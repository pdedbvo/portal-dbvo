/* =====================================================================
   PORTAL DBVO — DADOS DA PÁGINA
   Edite só este arquivo para mudar o conteúdo. Mantenha as aspas e
   vírgulas. Datas no formato "AAAA-MM-DD".
   (Na fase 2 este conteúdo passa a vir das listas do SharePoint.)
   ===================================================================== */
window.DADOS = {

  site: "https://grupodbvo.sharepoint.com",

  /* ---------- SEÇÕES LIGADAS / DESLIGADAS ----------
     Mude para true quando o conteúdo estiver preenchido. */
  exibir: {
    ferramentas: false,   // falta preencher os links reais
    mural: false,         // avisos, aniversariantes e agenda
    indicadores: true,    // VGV, % vendido, avanço físico e entrega no carrossel "Em construção"
    provisorio: true      // selo "Dados provisórios" nos indicadores (desligar quando os dados forem oficiais)
  },

  /* Foto de fundo do cabeçalho (opcional). Ex.: "assets/topo.jpg" ou um link.
     Deixe "" para o fundo preto com grade. */
  topoImagem: "",

  missao: "Ser o maior e mais rentável grupo de soluções imobiliárias de Maringá.",
  proposito: "Construir empreendimentos imobiliários perto de tudo, à frente do tempo.",

  /* ---------- EMPRESAS DO GRUPO (cards) ---------- */
  empresas: [
    { nome: "Edifica",                   logo: "edifica",               pagina: "/SitePages/EDIFICA.aspx",              tag: "BPO",            texto: "" },
    { nome: "Delta Bravo Engenharia",    logo: "deltabravo-engenharia", pagina: "/SitePages/DELTABRAVOENGENHARIA.aspx", tag: "Engenharia",     texto: "" },
    { nome: "Delta Bravo Obras",         logo: "deltabravo-obra",       pagina: "/SitePages/DELTABRAVOOBRAS.aspx",      tag: "Obras",          texto: "" },
    { nome: "DBVO Hub",                  logo: "dbvo-hub",              pagina: "/SitePages/DBVOHUB.aspx",              tag: "Serviços",       texto: "" },
    { nome: "BE A Moradia do Futuro",    logo: "be",                    pagina: "/SitePages/BEAMORADIADOFUTURO.aspx",   tag: "Incorporação",   texto: "" },
    { nome: "DBVO",                      logo: "dbvo",                  pagina: "/SitePages/DBVO.aspx",                 tag: "Holding",        texto: "" },
    { nome: "Engine",                    logo: "engine",                pagina: "/SitePages/ENGINE.aspx",               tag: "Engine",         texto: "" },
    { nome: "Inside",                    logo: "inside",                pagina: "/SitePages/INSIDE.aspx",               tag: "Inovação",       texto: "" }
  ],

  /* ---------- CENTRAL DE FERRAMENTAS ---------- */
  /* restrito: true mostra o cadeado (ferramenta com login) */
  ferramentas: [
    { nome: "Central de Serviços", area: "DBVO Hub",   texto: "Solicitações entre áreas.",              link: "#", restrito: true },
    { nome: "OKRs",                area: "Gestão",     texto: "Plano de objetivos e painel de metas.",  link: "#", restrito: true },
    { nome: "Cronograma",          area: "Projetos",   texto: "Controle de projetos.",                  link: "#", restrito: true },
    { nome: "Exemplo de ferramenta", area: "Obras",    texto: "Troque pelo link real.",                 link: "#", restrito: false }
  ],

  /* ---------- MURAL DE AVISOS ---------- */
  avisos: [
    { titulo: "Exemplo de aviso em destaque", data: "2026-11-18", categoria: "Comunicado", texto: "Este é um aviso de exemplo. O texto completo aparece quando a pessoa clica no card.", link: "" },
    { titulo: "Exemplo: treinamento de planejamento no UAU", data: "2026-11-12", categoria: "Treinamento", texto: "Exemplo de aviso com link para mais informações.", link: "#" },
    { titulo: "Exemplo: novo processo de solicitações", data: "2026-11-03", categoria: "Processos", texto: "Exemplo de aviso mais antigo, sem a etiqueta de novo.", link: "" }
  ],

  /* ---------- ANIVERSARIANTES ---------- */
  /* email é opcional: com ele aparece o botão de parabéns pelo Teams */
  aniversariantes: [
    { nome: "Pessoa Exemplo 1", setor: "CSUA",       dia: 18, mes: 11, email: "" },
    { nome: "Pessoa Exemplo 2", setor: "Obras",      dia: 22, mes: 11, email: "" },
    { nome: "Pessoa Exemplo 3", setor: "Financeiro", dia: 5,  mes: 11, email: "" },
    { nome: "Pessoa Exemplo 4", setor: "Comercial",  dia: 9,  mes: 12, email: "" }
  ],

  /* ---------- AGENDA ---------- */
  agenda: [
    { titulo: "Exemplo: Comitê de Obras", data: "2026-11-25", hora: "09:00", local: "Sala de reuniões" },
    { titulo: "Exemplo: Inside",          data: "2026-12-04", hora: "17:00", local: "Auditório" },
    { titulo: "Exemplo: Confraternização", data: "2026-12-12", hora: "19:00", local: "A definir" }
  ],

  /* ---------- EM CONSTRUÇÃO (carrossel) ----------
     Puxa sozinho a foto do mês de cada obra do site do Comitê de Incorporação.
     Para atualizar: subir a foto em Bases → FOTOS DO PROJETO. Nada a fazer aqui. */
  obrasFonte: "https://comite-de-incorporacao.web.app/obras/obras-fotos.json",
  indicadoresFonte: "https://comite-de-incorporacao.web.app/hub/resumo.json",

  /* ---------- O GRUPO EM NÚMEROS ---------- */
  numeros: [
    { valor: 2013, prefixo: "",     sufixo: "",       rotulo: "Ano de fundação",          ano: true },
    { valor: 121,  prefixo: "",     sufixo: "",       rotulo: "Unidades entregues" },
    { valor: 400,  prefixo: "+R$ ", sufixo: " mi",    rotulo: "Em VGV lançado" },
    { valor: 5,    prefixo: "",     sufixo: "",       rotulo: "Horizontais entregues" },
    { valor: 1,    prefixo: "",     sufixo: "",       rotulo: "Vertical entregue" },
    { valor: 4,    prefixo: "",     sufixo: "",       rotulo: "Verticais em obra" }
  ],

  /* ---------- NOSSOS VALORES ---------- */
  /* icone: lampada, resultado, alvo, escalada, colaboracao */
  valores: [
    { nome: "Inovação",                 icone: "lampada" },
    { nome: "Resultados acima de tudo", icone: "resultado" },
    { nome: "Ousadia",                  icone: "alvo" },
    { nome: "Protagonismo",             icone: "escalada" },
    { nome: "Colaboratividade",         icone: "colaboracao" }
  ],

  /* ---------- MOMENTOS (fotos de cultura) ----------
     Coloque as fotos na pasta assets/momentos e adicione uma linha para cada:
     { foto: "assets/momentos/inside-2026.jpg", legenda: "Inside 2026" },
     Enquanto a lista estiver vazia, aparece o espaço reservado. */
  momentos: [
  ],

  /* ---------- VÍDEO ---------- */
  video: { titulo: "Conheça a BE", youtube: "WXMVHLZGw4M" },

  /* ---------- REDES SOCIAIS (agrupadas por marca) ---------- */
  redes: [
    { marca: "A Moradia do Futuro", logo: "be", links: [
      { rede: "Site",      link: "https://amoradiadofuturo.com.br/?utm_source=sharepoint&utm_medium=colaboradores&utm_campaign=saibamais" },
      { rede: "Instagram", link: "https://www.instagram.com/amoradiadofuturo/" },
      { rede: "LinkedIn",  link: "https://www.linkedin.com/company/amoradiadofuturo/" },
      { rede: "YouTube",   link: "https://www.youtube.com/%40amoradiadofuturo" },
      { rede: "TikTok",    link: "https://www.tiktok.com/%40amoradiadofuturo" },
      { rede: "Pinterest", link: "https://pin.it/6F7FXcxnf" } ] },
    { marca: "Delta Bravo", logo: "deltabravo-engenharia", links: [
      { rede: "Instagram", link: "https://www.instagram.com/deltabravo.eng" },
      { rede: "LinkedIn",  link: "https://www.linkedin.com/company/deltabravo-engenharia/" } ] },
    { marca: "Edifica", logo: "edifica", links: [
      { rede: "Instagram", link: "https://www.instagram.com/edificabpo/" } ] },
    { marca: "Evandro Rodrigues", logo: "", links: [
      { rede: "Instagram", link: "https://www.instagram.com/evandrors/" },
      { rede: "LinkedIn",  link: "https://www.linkedin.com/in/evandro-rodrigues-silva/" } ] }
  ]
};
