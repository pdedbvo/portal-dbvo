# Portal DBVO: página inicial do SharePoint

## Arquivos
- `index.html`: a página (layout e funcionamento)
- `dados.js`: **todo o conteúdo** (empresas, ferramentas, avisos, aniversariantes, agenda, vídeo e redes). Para mudar o conteúdo, edite só este arquivo.
- `assets/logos`: logos com fundo transparente. A cor dos logos é aplicada pelo código.
- `assets/fonts`: fonte N27

## Publicar no GitHub Pages
1. Crie um repositório na conta `pdedbvo`, por exemplo `portal-dbvo`.
2. Envie todos os arquivos desta pasta, mantendo a estrutura.
3. Em Settings → Pages, escolha a branch `main` e a pasta `/root`.
4. O endereço fica `https://pdedbvo.github.io/portal-dbvo/`.

## Colocar no SharePoint (web part "Inserir")
Use uma seção de **largura total**. Cole o código abaixo e ajuste a altura:

```html
<iframe src="https://pdedbvo.github.io/portal-dbvo/?secao=empresas" width="100%" height="620" style="border:0"></iframe>
```

| `?secao=` | Conteúdo | Altura sugerida |
|---|---|---|
| `topo` | Saudação, missão/propósito e busca | 440 |
| `empresas` | Cards das 8 empresas | 620 |
| `obras` | Carrossel "Em construção" (some sozinho se não houver foto) | 560 |
| `numeros` | O grupo em números | 420 |
| `cultura` | Valores + faixa de fotos "Momentos" | 640 |
| `ferramentas` | Central de ferramentas (desligada no dados.js) | 380 |
| `mural` | Avisos, aniversariantes e agenda (desligado no dados.js) | 720 |
| `video` | Vídeo | 560 |
| `redes` | Redes sociais | 480 |

Também dá para juntar seções: `?secao=topo,empresas`. Sem o parâmetro, a página inteira aparece.

## Ordem sugerida na página do SharePoint
1. `topo` → 2. `empresas` → 3. web part dos OKRs (a que já existe) → 4. `obras` → 5. `numeros` → 6. `cultura` → 7. `video,redes`

## Atualizações
- **Fotos das obras:** automáticas. Basta subir a foto do mês em Bases → FOTOS DO PROJETO no site do Comitê de Incorporação; aparece em até ~2 h.
- **Fotos de momentos:** coloque a imagem em `assets/momentos/` e adicione uma linha em `momentos` no `dados.js` (foto + legenda). Prefira fotos deitadas, até ~1600 px.
- **Números e valores:** no `dados.js`.
