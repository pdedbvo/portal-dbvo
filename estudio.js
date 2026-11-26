/* =====================================================================
   ESTÚDIO — conteúdo editável (Firebase sharepoint-studio, coleção "conteudo").
   Leitura pública pela API REST (sem login). Se falhar, fica o que está no código.
   Guarda uma cópia no navegador; busca de novo a cada ESTUDIO.minutos.
   ?estudio=nao no link ignora o Estúdio (para testes).
   ===================================================================== */
const ESTUDIO = window.ESTUDIO = {
  url: 'https://firestore.googleapis.com/v1/projects/sharepoint-studio/databases/(default)/documents/conteudo?pageSize=50&key=AIzaSyA1w_OOq478oTeTzebdaL29oCnvwFwWW3g',
  cache: 'estudio:conteudo:v1', minutos: 10, espera: 2500
};
function estudioValor(v) {
  if (!v) return null;
  if ('stringValue' in v) return v.stringValue;
  if ('integerValue' in v) return Number(v.integerValue);
  if ('doubleValue' in v) return v.doubleValue;
  if ('booleanValue' in v) return v.booleanValue;
  if ('nullValue' in v) return null;
  if ('timestampValue' in v) return v.timestampValue;
  if ('arrayValue' in v) return (v.arrayValue.values || []).map(estudioValor);
  if ('mapValue' in v) { const o = {}, f = v.mapValue.fields || {}; for (const k in f) o[k] = estudioValor(f[k]); return o; }
  return null;
}
function estudioCache() {
  if (/[?&]estudio=nao/.test(location.search)) return null;
  try { return JSON.parse(localStorage.getItem(ESTUDIO.cache) || 'null'); } catch (e) { return null; }
}
async function estudioBuscar() {
  if (/[?&]estudio=nao/.test(location.search)) return null;
  const c = estudioCache();
  if (c && Date.now() - c.t < ESTUDIO.minutos * 60000) return c.d;
  try {
    const ctl = new AbortController(), tm = setTimeout(() => ctl.abort(), ESTUDIO.espera);
    const r = await fetch(ESTUDIO.url, { signal: ctl.signal }); clearTimeout(tm);
    if (!r.ok) throw new Error(r.status);
    const j = await r.json(), d = {};
    (j.documents || []).forEach(doc => { d[doc.name.split('/').pop()] = estudioValor((doc.fields || {}).v); });
    try { localStorage.setItem(ESTUDIO.cache, JSON.stringify({ t: Date.now(), d })); } catch (e) {}
    return d;
  } catch (e) { return c ? c.d : null; }
}

/* Começa a página com o conteúdo do Estúdio. Com cópia no navegador desenha na hora
   (e atualiza a cópia em segundo plano); sem cópia espera a busca (no máximo ESTUDIO.espera). */
function estudioIniciar(desenhar) {
  let feito = false; const vai = d => { if (feito) return; feito = true; try { desenhar(d); } catch (e) { console.error(e); } };
  const c = estudioCache();
  if (c) { vai(c.d); if (Date.now() - c.t >= ESTUDIO.minutos * 60000) estudioBuscar(); return; }
  estudioBuscar().then(vai, () => vai(null));
}

/* Página inicial (dados.js): só troca o que veio preenchido do Estúdio. */
function aplicarEstudioPortal(D, d) {
  if (!d) return;
  try {
    const p = d.portal || {};
    ['missao', 'proposito'].forEach(k => { if (p[k]) D[k] = p[k]; });
    if (p.exibir) D.exibir = Object.assign({}, D.exibir, p.exibir);
    ['numeros', 'valores', 'avisos', 'aniversariantes', 'agenda'].forEach(k => { if (Array.isArray(p[k])) D[k] = p[k]; });
    if (p.video && p.video.youtube) D.video = p.video;
    if (Array.isArray(d.momentos)) D.momentos = d.momentos.filter(m => m && m.foto);
    const F = d.ferramentas;
    if (F && Array.isArray(F.itens)) {
      const nomeArea = id => ((F.areas || []).find(a => a.id === id) || {}).nome || id;
      D.ferramentas = F.itens.filter(f => f && f.nome).map(f => ({ nome: f.nome, area: nomeArea(f.area), texto: f.d || '', link: f.u || '#', restrito: !!f.login }));
    }
  } catch (e) { console.warn('Estúdio: conteúdo ignorado', e); }
}

/* Páginas (paginas-dados.js): por enquanto a Central de ferramentas. */
function aplicarEstudioPaginas(P, d) {
  if (!d) return;
  try {
    const F = d.ferramentas;
    if (F && Array.isArray(F.itens) && F.itens.length) {
      P.ferramentas.itens = F.itens.filter(f => f && f.nome);
      if (Array.isArray(F.areas) && F.areas.length) P.ferramentas.areas = F.areas;
    }
  } catch (e) { console.warn('Estúdio: conteúdo ignorado', e); }
}
