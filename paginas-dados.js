/* =====================================================================
   PÁGINAS DO SHAREPOINT — CONTEÚDO
   Dúvidas frequentes · Estratégia de marca · Rotinas · Central de ferramentas
   Edite só este arquivo para mudar o conteúdo. Mantenha aspas e vírgulas.
   ===================================================================== */
window.PAGINAS = {

  site: "https://grupodbvo.sharepoint.com",

  /* Link do chamado (usado nos botões "Fale com a gente") */
  chamado: "https://pdedbvo.github.io/CentralDeServicos/",

  /* ================= DÚVIDAS FREQUENTES ================= */
  duvidas: {
    contato: "sergio.f@edificabpo.com.br",
    temas: ["Primeiros passos", "Arquivos e pastas", "Metas e OKRs", "Páginas e ferramentas", "Ajuda"],
    /* r: parágrafos · itens: lista com marcadores · passos: lista numerada
       ex: { ok: [...], nao: [...] } exemplos certo/errado · img: imagem · link: botão (u pode ser mailto:) */
    perguntas: [
      /* ---------- PRIMEIROS PASSOS ---------- */
      { id: "o-que-muda-com-o-novo-sharepoint", tema: "Primeiros passos",
        q: "O que muda com o novo SharePoint?",
        r: ["Tudo passa a seguir a mesma estrutura em todo o grupo:"],
        itens: ["Padronizada por empresa, setor e empreendimento.",
                "Organizada em bibliotecas e pastas específicas, como Serviços, Controles, KPIs e People Analytics.",
                "Com mais segurança e controle de acesso.",
                "Com as metas de cada time na própria página, ao lado dos documentos.",
                "Mais fácil de buscar e acompanhar documentos e metas."] },
      { id: "como-acessar-os-sites-do-sharepoint", tema: "Primeiros passos",
        q: "Como acessar os sites do SharePoint?",
        r: ["Para acessar qualquer site do grupo você precisa de:"],
        passos: ["Uma conta Microsoft vinculada ao Grupo DBVO (o seu e-mail da empresa).",
                 "Acesso autorizado pelo responsável da área ou pela administração."],
        r2: ["Com o acesso liberado, entre pela página inicial e navegue pelos cards das empresas, times e empreendimentos."],
        link: { t: "Ir para a página inicial", u: "/" } },
      { id: "como-pedir-acesso", tema: "Primeiros passos",
        q: "Não consigo abrir um site. Como peço acesso?",
        r: ["Se aparecer \"Você precisa de permissão\", clique em Solicitar acesso na própria tela ou peça ao responsável da área. Se não souber quem é, escreva para o administrador das páginas."],
        link: { t: "Pedir acesso por e-mail", u: "mailto:sergio.f@edificabpo.com.br?subject=Acesso%20ao%20SharePoint" } },
      { id: "quais-sites-existem-e-para-que-servem", tema: "Primeiros passos",
        q: "Quais sites existem e para que servem?",
        itens: ["Sites por empresa: DBVO, DBVO Hub, Edifica, Delta Bravo Engenharia, Delta Bravo Obras, BE A Moradia do Futuro, Engine e Inside.",
                "Sites por setor: Incorporação, Operações, Engenharia, Arquitetura, Obras, CSUA, CSUM e outros.",
                "Sites por empreendimento: cada projeto (BE01, BE02, BE03, BE06, BE09) tem o seu próprio ambiente."],
        r2: ["Os sites dos setores guardam as informações internas da área: tudo o que é produzido para executar as atividades e cumprir as metas."] },

      /* ---------- ARQUIVOS E PASTAS ---------- */
      { id: "como-acessar-os-arquivos-de-um-empreendimento", tema: "Arquivos e pastas",
        q: "Como acessar os arquivos de um empreendimento?",
        passos: ["Na página inicial, abra BE A Moradia do Futuro.",
                 "Clique no card do empreendimento.",
                 "Navegue pela estrutura de pastas, logo abaixo do cabeçalho."],
        r2: ["Cada site de empreendimento reúne as entregas finais dos documentos, organizadas para que todos os setores encontrem o que precisam sobre aquele projeto."],
        link: { t: "Abrir empreendimentos", u: "/SitePages/BEAMORADIADOFUTURO.aspx" } },
      { id: "como-acessar-os-arquivos-dos-departamentos", tema: "Arquivos e pastas",
        q: "Como acessar os arquivos dos departamentos?",
        r: ["Abra a página da empresa e entre no card do time (por exemplo, DBVO Hub → CSUA). Os arquivos ficam na faixa Arquivos e pastas, no fim da página, depois dos OKRs.",
            "Cada empresa do grupo tem o seu site, e cada setor tem o seu, com as informações específicas da área."] },
      { id: "como-devo-nomear-arquivos", tema: "Arquivos e pastas",
        q: "Como devo nomear arquivos?",
        r: ["Use o identificador do projeto e do setor, o nome do arquivo e a revisão ou a data:"],
        ex: { ok: ["BEXX-EDFI-NOMENCLATURA_DO_ARQUIVO.R00", "BEXX-EDFI-NOMENCLATURA_DO_ARQUIVO-20250519"],
              nao: ["versão final (1).pdf", "documento novo atualizado.pdf"] },
        r2: ["Exceção: ENGE e ENGA usam uma nomenclatura própria para o gerenciamento de projetos."] },
      { id: "como-funciona-o-controle-de-versões", tema: "Arquivos e pastas",
        q: "Como funciona o controle de versões?",
        r: ["O nome do arquivo leva a revisão (R00, R01…) ou a data (AAAAMMDD). Assim cada entrega fica registrada e nenhum arquivo antigo é sobrescrito."],
        ex: { ok: ["BE09-ENGO-CRONOGRAMA.R02", "BE09-ENGO-CRONOGRAMA-20261124"] },
        r2: ["Além disso, o SharePoint guarda sozinho as versões de cada arquivo: três pontinhos → Histórico de versões, para ver ou restaurar uma versão anterior."] },
      { id: "posso-criar-novas-pastas", tema: "Arquivos e pastas",
        q: "Posso criar novas pastas?",
        r: ["Siga a estrutura padrão das bibliotecas principais (Serviços, Controles, Metas fundamentais e KPIs, People Analytics, entre outras)."],
        itens: ["Pode: criar um nível de pastas dentro dessas bibliotecas.",
                "Combine antes com o seu líder: subpastas dentro de subpastas.",
                "Prefira a nomenclatura padrão a criar muitas pastas. Fica mais limpo, mais fácil de buscar e de controlar versões."] },
      { id: "sincronizar-no-computador", tema: "Arquivos e pastas",
        q: "Como ter uma pasta do SharePoint no meu computador?",
        passos: ["Abra a biblioteca ou a pasta no SharePoint.",
                 "Clique em Adicionar atalho para Meus arquivos.",
                 "A pasta aparece no OneDrive do computador e sincroniza sozinha."] },
      { id: "recuperar-arquivo-apagado", tema: "Arquivos e pastas",
        q: "Apaguei um arquivo sem querer. Consigo recuperar?",
        r: ["Sim. No site onde ele estava, abra Conteúdo do site → Lixeira, selecione o arquivo e clique em Restaurar. Ele fica na lixeira por 93 dias."] },
      { id: "compartilhar-sem-anexo", tema: "Arquivos e pastas",
        q: "Como mandar um arquivo sem anexar no e-mail?",
        r: ["Três pontinhos do arquivo → Copiar link, e cole no Teams ou no e-mail. Quem receber abre sempre a versão mais recente, e o acesso continua controlado pelo SharePoint."] },

      /* ---------- METAS E OKRs ---------- */
      { id: "como-visualizar-as-metas-fundamentais", tema: "Metas e OKRs",
        q: "Como visualizar as metas fundamentais?",
        itens: ["Na página inicial do grupo: o painel geral das metas, com o resultado de cada área.",
                "Na página de cada empresa: o OKR de cada time.",
                "Na página de cada time: as metas específicas da área e quem ainda precisa lançar."],
        r2: ["Clique em uma pessoa para ver os objetivos e, em cada objetivo, os resultados-chave com meta, realizado e peso."] },
      { id: "como-lancar-okr", tema: "Metas e OKRs",
        q: "Como lanço o realizado dos meus resultados-chave?",
        r: ["Os lançamentos são feitos no app de OKRs, com o seu usuário e senha. As páginas do SharePoint só mostram o que está no app."],
        link: { t: "Abrir o app de OKRs", u: "https://okrs---bravo.web.app/" } },
      { id: "cores-e-ritmo", tema: "Metas e OKRs",
        q: "O que significam as cores e o ritmo?",
        itens: ["Verde: acima de 90%. Amarelo: acima de 50%. Vermelho: 50% ou menos.",
                "Ritmo compara o seu % com quanto do trimestre já passou (o tracinho branco na barra): acima, no ritmo ou abaixo do ritmo.",
                "Preenchimento mostra quantos KRs já têm realizado lançado. KR sem lançamento conta como 0%."] },
      { id: "painel-desatualizado", tema: "Metas e OKRs",
        q: "Lancei no app e o painel não mudou. Por quê?",
        r: ["O painel busca os dados uma vez por dia. Para ver na hora, clique em Atualizar na barra do painel."] },

      /* ---------- PÁGINAS E FERRAMENTAS ---------- */
      { id: "pagina-do-time", tema: "Páginas e ferramentas",
        q: "O que aparece na página do meu time?",
        itens: ["O % do OKR do trimestre, na cor do semáforo.",
                "Ritmo, preenchimento e quantos dias faltam para fechar o trimestre.",
                "Quem ainda precisa lançar e quantos KRs faltam.",
                "Os OKRs do time e, no fim, os arquivos e pastas da área."] },
      { id: "onde-ficam-os-sistemas", tema: "Páginas e ferramentas",
        q: "Onde encontro os sistemas do grupo?",
        r: ["Na Central de ferramentas: PDE, Portal DP, Central de Serviços, OKRs, Comitê de Growth, Weekly e outros, separados por área. Cada um abre em uma nova aba."],
        link: { t: "Abrir Central de ferramentas", u: "/SitePages/CentralDeFerramentas.aspx" } },
      { id: "politicas-e-pops", tema: "Páginas e ferramentas",
        q: "Onde encontro as políticas e os POPs?",
        r: ["Na página Rotinas, separados em Políticas, POPs e Fichas cadastrais. Antes de começar uma atividade nova, veja se ela já tem um procedimento."],
        link: { t: "Abrir Rotinas", u: "/SitePages/ROTINAS.aspx" } },
      { id: "logos-e-modelos", tema: "Páginas e ferramentas",
        q: "Onde pego logos, fonte e modelos de apresentação?",
        r: ["Na página Nossa estratégia de marca: escolha a marca e baixe logos, PPT editável, papel timbrado e fundo de reunião. Lá também estão as cores e o tom de voz de cada marca."],
        link: { t: "Abrir estratégia de marca", u: "/SitePages/ESTRATEGIADEMARCA.aspx" } },

      /* ---------- AJUDA ---------- */
      { id: "quem-posso-procurar-se-tiver-dúvidas", tema: "Ajuda",
        q: "Quem posso procurar se tiver dúvidas?",
        r: ["Fale com o Sérgio (CSUA), que acompanha a implantação e a padronização do novo SharePoint. Pedidos de acesso, pastas novas ou ajustes também podem ir pela Central de Serviços."],
        link: { t: "sergio.f@edificabpo.com.br", u: "mailto:sergio.f@edificabpo.com.br?subject=D%C3%BAvida%20sobre%20o%20SharePoint" } }
    ]
  },

  /* ================= ESTRATÉGIA DE MARCA ================= */
  marca: {
    manual: "https://grupodbvo.sharepoint.com/:b:/r/SiteAssets/SitePages/Our-Brand-Strategy(1)/CSUM-Manual_de_marcas-R002-20260331.pdf?d=wf515aa8d79824d5e807eee0419939a61&csf=1&web=1&e=y9sr90",
    paginasNoManual: false,   /* o visualizador do SharePoint não abre direto na página */
    essencial: [
      { t: "Só a fonte N27", d: "Regular no texto, Bold para destacar. Nenhuma outra fonte." },
      { t: "Títulos em maiúsculas", d: "Títulos e textos principais em maiúsculas; corpo em minúsculas." },
      { t: "Só as cores da paleta", d: "Cada marca tem a sua paleta. Nada de cor fora dela." },
      { t: "Logo é imagem", d: "Não digite o nome em N27 no lugar da logo, não estique, não gire, sem sombra." }
    ],
    grupos: ["Grupo", "Linha BE", "Empresas"],
    marcas: [
      { id: "DBVO", nome: "DBVO", grupo: "Grupo", logo: "dbvo", pag: 5,
        cores: [["Preto","#111111"],["Cinza escuro","#646464"],["Cinza claro","#C8C8C8"]],
        missao: "Construir empreendimentos imobiliários perto de tudo, à frente do tempo.",
        visao: "Ser o maior e mais rentável grupo de soluções imobiliárias de Maringá.",
        tom: [["Profissional e estratégico","Seguro, embasado e assertivo, com autoridade no mercado imobiliário."],["Inovador e aspiracional","Moderno e visionário, mostra soluções que vão além do convencional."]],
        palavras: ["Valorização imobiliária","Localização estratégica","Soluções inteligentes","Excelência em engenharia","À frente do tempo","Inovação que transforma"] },
      { id: "HUB", nome: "DBVO Hub", grupo: "Grupo", logo: "dbvo-hub", pag: 187,
        cores: [["Preto","#111111"],["Cinza escuro","#646464"],["Cinza claro","#C8C8C8"]] },
      { id: "BE", nome: "BE A Moradia do Futuro", grupo: "Linha BE", logo: "be", pag: 27,
        cores: [["Preto","#111111"],["Cinza escuro","#646464"],["Cinza claro","#C8C8C8"]],
        missao: "Criar experiências únicas de moradia para as pessoas.",
        visao: "Ser a melhor opção de moradia inteligente para as pessoas e de investimento para o investidor, a incorporadora mais inovadora e rentável do Sul do País.",
        tom: [["Confiante","Embasado em dados e estudos, analítico e direto."],["Inspirador","Visionário, aspiracional, acredita no futuro do mercado imobiliário."]],
        palavras: ["Faça parte do futuro","Invista em um BE","A nova forma de morar e investir","Valorização","Rentabilidade","Localização privilegiada"] },
      { id: "BE01", nome: "BE Garden", grupo: "Linha BE", logo: "be", pag: 65,
        cores: [["Verde","#46B276"],["","#B1E86A"],["","#C3F9A6"],["","#E5FFC3"],["Preto","#111111"]],
        tom: [["Sustentável","Arquitetura, bem-estar e design inteligente."],["Inovador","À frente do tempo, com o lifestyle dos grandes centros."]],
        palavras: ["Perto de tudo, à frente do tempo","O futuro do morar começa aqui","WELL e GBC Ouro","Sustentabilidade","Bem-estar"] },
      { id: "BE02", nome: "BE Deodoro", grupo: "Linha BE", logo: "be", pag: 47,
        cores: [["Laranja","#F75F01"],["","#FF943F"],["","#FFC67E"],["","#FFECD2"],["Preto","#111111"]],
        tom: [["Moderno","Conectado aos grandes centros, tecnológico e prático."],["Aspiracional","Liberdade, flexibilidade e estilo de vida dinâmico."]],
        palavras: ["Uma nova forma de morar e investir","Viva a cidade, experimente o mundo","Praticidade","Mobilidade","Flexibilidade"] },
      { id: "BE03", nome: "BE Bonifácio", grupo: "Linha BE", logo: "be", pag: 83,
        cores: [["Amarelo","#FCBF44"],["","#FFDC5A"],["","#FFF578"],["Creme","#FFECD2"],["Preto","#111111"]],
        tom: [["Sofisticado","Une tradição e modernidade, no coração de Maringá."],["Visionário","Soluções modulares e integração urbana."]],
        palavras: ["Para quem enxerga além","O primeiro edifício modular de Maringá","Exclusividade","Personalização"] },
      { id: "BE06", nome: "BE São Paulo", grupo: "Linha BE", logo: "be", pag: 101,
        cores: [["Roxo","#7247F6"],["","#847EDE"],["","#ABA4F6"],["","#E8D6EB"],["Preto","#000000"]],
        tom: [["Prático","Direto e funcional, focado no dia a dia."],["Eficiente","Simples, acessível, espaços bem planejados."]],
        palavras: ["Tudo o que você precisa, sem excessos","Morar bem, viver melhor","Compacto e eficiente","Mobilidade urbana"] },
      { id: "BE09", nome: "BE Dumont", grupo: "Linha BE", logo: "be", pag: 118,
        cores: [["Vinho","#992C1A"],["","#DD725E"],["","#FF866E"],["","#F9DCDC"],["Preto","#000000"]],
        tom: [["Prático","Para quem valoriza tempo e localização."],["Eficiente","Equilíbrio entre cidade e natureza."]],
        palavras: ["Tudo o que você precisa, no lugar certo","Menos tempo no trânsito, mais tempo para viver","Praticidade"] },
      { id: "EDIFICA", nome: "Edifica", grupo: "Empresas", logo: "edifica", pag: 134,
        cores: [["Azul","#008FD5"],["Preto","#111111"],["Cinza escuro","#646464"],["Cinza claro","#C8C8C8"]],
        missao: "Impulsionar o sucesso de incorporadoras imobiliárias através de processos administrativos e gerenciais tecnológicos e inovadores.",
        visao: "Ser referência nacional em gestão administrativa de empreendimentos, com automação e simplificação dos processos.",
        tom: [["Confiante","Embasado em dados, analítico e direto."],["Inovador","Tecnológico, pensa fora da caixa e executa o novo."]],
        palavras: ["Maximize seus resultados","Gestão inteligente e automatizada","Eficiência","Análise de dados","Processos simplificados"] },
      { id: "DBENG", nome: "DeltaBravo Engenharia", grupo: "Empresas", logo: "deltabravo-engenharia", pag: 155,
        cores: [["Salmão","#FF766C"],["Preto","#111111"],["Cinza escuro","#646464"],["Cinza claro","#C8C8C8"]],
        missao: "Dar transparência e eficácia de engenharia para as obras dos incorporadores, com BIM e planejamento preciso de custos e prazos.",
        visao: "Ser reconhecida nacionalmente como a maior difusora e aplicadora de BIM no mercado imobiliário.",
        tom: [["Técnico","Conhecimento especializado, detalhado e preciso."],["Moderno","Adota novas metodologias e transforma processos."]],
        palavras: ["BIM","Precisão","Eficiência","Tecnologia","Dentro do cronograma"] },
      { id: "DBOBRAS", nome: "DeltaBravo Obras", grupo: "Empresas", logo: "deltabravo-obra", pag: 176,
        cores: [["Salmão","#FF766C"],["Preto","#111111"],["Cinza escuro","#646464"],["Cinza claro","#C8C8C8"]] },
      { id: "ENGINE", nome: "Engine", grupo: "Empresas", logo: "engine", pag: 196,
        cores: [["Roxo","#AE7DF5"],["Preto","#111111"],["Cinza escuro","#646464"],["Cinza claro","#C8C8C8"]] },
      { id: "INSIDE", nome: "Inside", grupo: "Empresas", logo: "inside", pag: 213,
        cores: [["Bege","#FFB383"],["Preto","#111111"],["Cinza escuro","#646464"],["Cinza claro","#C8C8C8"]] }
    ],
    /* links tirados do próprio manual (logos, fonte e materiais de cada marca) */
    links: {
     "DBVO": {
      "logos": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgDiS1mpj3DyRoQa5ulXS883AQKcTGGGcJj2J9pRrEih51Y?e=WMfKqi",
      "fonte": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgD9LiLL6zLrSanHCsmC_XunAVV4o44GLypbayxwJ7BsZ0E?e=GRhKnx",
      "materiais": [
       {
        "t": "ASSINATURA DE E-MAIL",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgDef_E5Y8XISauH578ZyD7-Aazlh5IiFBEXZ6cbKxjvAk0?e=d1c9Lr"
       },
       {
        "t": "PPT EDITÁVEL",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgAmkUlCRjfSSqHLBYcX8XcaAQyI76kHncYDZA83zh5KqXQ?e=oey7EE"
       },
       {
        "t": "PAPEL TIMBRADO",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgB5pf6YU0ROSoTwwDvfBhe9AcuartJD8mkNkmnCq0BN42s?e=N8Gefh"
       },
       {
        "t": "FUNDO REUNIÃO",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgAMXulaGoiNSrG4NKDjTT_jAfPHq0JnkvFBo-egAWMfGek?e=qEL0XN"
       }
      ]
     },
     "BE": {
      "logos": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgDrjaDrQB6JTrtd5fAbTUe2AXN81yQ6THLlrbda5BiLsJQ?e=JqKzsR",
      "fonte": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgChWM24k-HIT6CxUqvwTPixAdDOsmkI_tDF4hi_9ZBCn7s?e=keS4RH",
      "materiais": [
       {
        "t": "PPT EDITÁVEL",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgAqFAHp-IUQRJyY0HJAdIr8ARZ5ZfJ2W3eK6yMEt_6dcdw?e=Hl0hDD"
       },
       {
        "t": "ARQUIVOS BASE PARA ARTES (.PSD)",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgBEyvA8IctMQa5_JjMBjA6wAZBl1CXaRmW7njP1lv17ZI0?e=ioiJmu"
       },
       {
        "t": "PAPEL TIMBRADO",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgAH0L4pzwkQRKzHLE128Zo3AW34ii6ArQu_qcwFubD50cM?e=K0lfo5"
       },
       {
        "t": "FUNDO REUNIÃO",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgDKnJMgd0t8SbkRvcL9tfO5AXNR-FA73CW2UTetEuhan2w?e=RqUdm9"
       },
       {
        "t": "CAPA LINKEDIN",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgBVVWvI8wRGTp8k54wtEVlAAaJwmxTHGmwowuSUa_YUsnw?e=7yFV1T"
       }
      ]
     },
     "BE02": {
      "logos": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgAb67wx_UpAQKekwUmxdnsQAYuSaa6PDBCtz6wW5lJfMbM?e=RpQQzd",
      "fonte": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgD9LiLL6zLrSanHCsmC_XunAVV4o44GLypbayxwJ7BsZ0E?e=GRhKnx",
      "materiais": [
       {
        "t": "PPT EDITÁVEL",
        "u": "https://grupodbvo.sharepoint.com/:p:/s/BE02-BEDEODORO/IQCngdZf97Y3TLfHFm4GwGbUAX6rtl08_nKwTmx05hI8aes?e=TWRBbJ"
       },
       {
        "t": "ARQUIVOS BASE PARA ARTES (.PSD)",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/BE02-BEDEODORO/IgB0X7K4FZXLTIMadbpEclSLARelM8NpYADPU4zUcFiDvMY?e=C7Cxba"
       },
       {
        "t": "PAPEL TIMBRADO",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/BE02-BEDEODORO/IgBXd8Zc4iRaSbfB_Pn91-7nAWZiTdvmnnhhMYK3WL79wbE?e=eACscA"
       },
       {
        "t": "CATÁLOGO, IMAGENS, VÍDEOS",
        "u": "https://grupodbvo.sharepoint.com/:b:/s/BE02-BEDEODORO/IQAfr-R1sddXRYS17xXyBUD3AXYO0z0tREwkZCgJfJ1nVN8?e=opxwWD"
       }
      ]
     },
     "BE01": {
      "logos": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgBYWEG_Wyo-T4-W61DZBysZASdUQqLQCPYy_aiFW3sBzmA?e=W4F57b",
      "fonte": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgD9LiLL6zLrSanHCsmC_XunAVV4o44GLypbayxwJ7BsZ0E?e=GRhKnx",
      "materiais": [
       {
        "t": "PPT EDITÁVEL",
        "u": "https://grupodbvo.sharepoint.com/:p:/s/BE01-BEGARDEN/IQAF4KmGIPwZQLkG4Xc1e2-0AeyHN5EAWpbpnRIN0aFUGiI?e=HHlmYa"
       },
       {
        "t": "ARQUIVOS BASE PARA ARTES (.PSD)",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/BE01-BEGARDEN/IgAxWka320P3S7JYdGM21j_CAZftaH1vH5a-OHBezw6uUwM?e=KYymw8"
       },
       {
        "t": "PAPEL TIMBRADO",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/BE01-BEGARDEN/IgBMEK9_JxVjQZGnj4q1aTqCAUt9euVRwUZcKoj25sSBOGc?e=Pns1EB"
       },
       {
        "t": "CATÁLOGO, IMAGENS, VÍDEOS",
        "u": "https://grupodbvo.sharepoint.com/:b:/s/DBVOHUB/IQBJqO25O-B2T73H3JuQz47LAU754GW48QLAaS2QUd7FFuU?e=XJxalS"
       },
       {
        "t": "FUNDO REUNIÃO",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/BE01-BEGARDEN/IgAWVIPYoDLTSqb9DWFY_xxSAcuMVTpMykAUgMVguZn_Lxw?e=eDh4Y7"
       }
      ]
     },
     "BE03": {
      "logos": "https://grupodbvo.sharepoint.com/:f:/s/BE03-BEBONIFCIO/IgDxkyyFT0UpTJlltU3u8RuSAQZVfTX0YCDC6hiM1B4Pgzs?e=A67D20",
      "fonte": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgD9LiLL6zLrSanHCsmC_XunAVV4o44GLypbayxwJ7BsZ0E?e=GRhKnx",
      "materiais": [
       {
        "t": "PPT EDITÁVEL",
        "u": "https://grupodbvo.sharepoint.com/:p:/s/BE03-BEBONIFCIO/IQCWn8MeSyWHSLyCGW65IqiGASPhss2Ka72mmCMjORZMiGE?e=gt5tP9"
       },
       {
        "t": "ARQUIVOS BASE PARA ARTES (.PSD)",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/BE03-BEBONIFCIO/IgDvarsDLHWdSZuvdwIM_mBUAVD9CKH7G35WhhkkqJovfxg?e=pJZPmD"
       },
       {
        "t": "PAPEL TIMBRADO",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/BE03-BEBONIFCIO/IgA5_wQjg9CaT5PqeVoDw6sIAc4D1jzuOugkNZSGey-HbvI?e=KqrdCL"
       },
       {
        "t": "CATÁLOGO, IMAGENS, VÍDEOS",
        "u": "https://grupodbvo.sharepoint.com/:b:/s/DBVOHUB/IQDcpln96UMsRbC0OeV2JkjZAamDQuUtheK9gCEIezztesw?e=jUrcfJ"
       },
       {
        "t": "FUNDO REUNIÃO",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/BE03-BEBONIFCIO/IgCjjO1VEuVUT5onJbBpOoBKAYyIFziOsohW9hOwTAGRj5o?e=KoDHOS"
       }
      ]
     },
     "BE06": {
      "logos": "https://grupodbvo.sharepoint.com/:f:/s/BE06-BeSoPaulo/IgBpEtqgx1WGRoFl5AGUK0VGARtfJoBQ_uWlL0Yo79k_xos?e=AFj9SP",
      "fonte": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgD9LiLL6zLrSanHCsmC_XunAVV4o44GLypbayxwJ7BsZ0E?e=GRhKnx",
      "materiais": [
       {
        "t": "PPT EDITÁVEL",
        "u": "https://grupodbvo.sharepoint.com/:p:/s/BE06-BeSoPaulo/IQC2xNQWtsNTQLBct8okcZZxAQDoKK544jYKAj1V16BNh30?e=ng5IP0"
       },
       {
        "t": "ARQUIVOS BASE PARA ARTES (.PSD)",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/BE06-BeSoPaulo/IgATUM6ZltifRYj5lm5Hf2ndAQuwuhf6B3MrRl-2rA31wYA?e=NhuzjP"
       },
       {
        "t": "PAPEL TIMBRADO",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/BE06-BeSoPaulo/IgCtTZr3hqS-Tbh0To220rHgAY6QRNJuz5-wc-8gT9OOLhk?e=dO8nsc"
       },
       {
        "t": "CATÁLOGO, IMAGENS, VÍDEOS",
        "u": "https://grupodbvo.sharepoint.com/:b:/s/DBVOHUB/IQAg_oUVdOhCQbyKkSGbnxnwAejvTadSSfn0W048ZVVQ4As?e=wih5K0"
       },
       {
        "t": "FUNDO REUNIÃO",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/BE06-BeSoPaulo/IgA-59k8w4VRQK4N-sZbtRXZASMeQaAllFiLSLE3TKyVoUw?e=VWcovo"
       }
      ]
     },
     "BE09": {
      "logos": "https://grupodbvo.sharepoint.com/:f:/s/BE09-BEDUMONT/IgDsZ86Y72OlR6tdHv8bqqfEAQDFa9iVx0e6dny3UN6jvao?e=cVNepF",
      "fonte": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgD9LiLL6zLrSanHCsmC_XunAVV4o44GLypbayxwJ7BsZ0E?e=GRhKnx",
      "materiais": [
       {
        "t": "ARQUIVOS BASE PARA ARTES (.PSD)",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/BE09-BEDUMONT/IgBVL416ro6fQKY_zkog02ABAR3l0kM0cVH9FS-upgJkvMI?e=kApij3"
       },
       {
        "t": "PAPEL TIMBRADO",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/BE09-BEDUMONT/IgB2bOD6pmeWRY8nNQnvTdgmAfyaWHg0m4FPqtMT8YCW66I?e=3kd8Zy"
       },
       {
        "t": "CATÁLOGO, IMAGENS, VÍDEOS",
        "u": "https://grupodbvo.sharepoint.com/:b:/s/BE09-BEDUMONT/IQCwQP6uajOJSZK94m-guvAnAV0H_N3kQbf6pYixQQMd8EI?e=gS2Egv"
       },
       {
        "t": "FUNDO REUNIÃO",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/BE09-BEDUMONT/IgAI-5EKbWPoQKB9j2wuvHZNASbubA9ySmiFJ9dRoOQDcJM?e=KzawLF"
       }
      ]
     },
     "EDIFICA": {
      "logos": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgD1v8hhwzPQR7OsNywNB4W9AYJjwtsHaYkSM890hlPogZQ?e=WOdv0l",
      "fonte": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgD9LiLL6zLrSanHCsmC_XunAVV4o44GLypbayxwJ7BsZ0E?e=GRhKnx",
      "materiais": [
       {
        "t": "PPT EDITÁVEL",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgCLq4lZXK7YT7vhl1NrO3J_AUpD7BRSCT9CV76lG8O4IYw?e=fasR9x"
       },
       {
        "t": "ARQUIVOS BASE PARA ARTES (.PSD)",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgC7V8PhpgZeRq2pSrJbMQ-tAchMyIZkNSFbBitK6FPvyeU?e=NYvmUr"
       },
       {
        "t": "PAPEL TIMBRADO",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgDV40eAKvZCRZvWE0qkMghWARTIoqkPm_Ufp-_W72M1jHU?e=bAZSqt"
       },
       {
        "t": "FUNDO DE REUNIÃO",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgC2_QSauSZpT7_LvCo27ni8ASyRKs5d31vM5kvBuTxZyM4?e=8QuNoD"
       }
      ]
     },
     "DBENG": {
      "logos": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgBf4NOpHwUySKaaUsZSV3ZfAQ-IzfQMSpW9JMFY5XPyrE8?e=Wv9TtK",
      "fonte": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgD9LiLL6zLrSanHCsmC_XunAVV4o44GLypbayxwJ7BsZ0E?e=GRhKnx",
      "materiais": [
       {
        "t": "PPT EDITÁVEL",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgAtb4w-Z8KoSZGhnbzrbY1vASzfPOioF_xtMtweotNLAZw?e=gaMCUP"
       },
       {
        "t": "PAPEL TIMBRADO",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgB7Kj25-5z-SIwcLeLWj9mIAV7raGUtRXW_HBFLP3P7Gxk?e=CTUWG9"
       },
       {
        "t": "FUNDO DE REUNIÃO",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgAM8hjqS_AwToFkKuTz7_2AAUzzlVRpQiULGEj2mRxWbIg?e=qG61h7"
       }
      ]
     },
     "DBOBRAS": {
      "logos": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgBaVWLitrLbQodiL4Z9XTfPAX4mRIz4v9QPEN5FeumGVr0?e=9e23dN",
      "fonte": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgD9LiLL6zLrSanHCsmC_XunAVV4o44GLypbayxwJ7BsZ0E?e=GRhKnx",
      "materiais": [
       {
        "t": "PPT EDITÁVEL",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgBnc1ElblOSRJjdFNbslHevASL-cx_2sWBSRTiFD4Nkxck?e=PWzsXb"
       },
       {
        "t": "PAPEL TIMBRADO",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgDP-ON8pV4HQaRnw8RfSmxJASMOYTlsQO-3liZ13Xnl9d0?e=eS5QOl"
       },
       {
        "t": "FUNDO DE REUNIÃO",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgDNnnKL3G4EQ5hMkRI7idCJAQK4kSOQlB-_QylRH21yFN4?e=oO84d6"
       }
      ]
     },
     "HUB": {
      "logos": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgC752HQgi1QQqdRTa7X5leXAUANvuR8K_DxooszW36E5PE?e=C9PLzZ",
      "fonte": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgD9LiLL6zLrSanHCsmC_XunAVV4o44GLypbayxwJ7BsZ0E?e=GRhKnx",
      "materiais": [
       {
        "t": "PAPEL TIMBRADO",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgAnDZnh7qiBS5WFmv81t9osAdAQIKd_dnlx7rTEADXJYNY?e=cTb6zE"
       },
       {
        "t": "FUNDO DE REUNIÃO",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgBKYTny8ZeTSoyXvJgA-AY9Afd419X8PPFXrSDKF8V8XjE?e=FRBhdR"
       }
      ]
     },
     "ENGINE": {
      "logos": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgArWWscPhqJTp0bVY-UeS6BAQHY4gmkLy-40AWjw0H24l0?e=eT4Fin",
      "fonte": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgD9LiLL6zLrSanHCsmC_XunAVV4o44GLypbayxwJ7BsZ0E?e=GRhKnx",
      "materiais": [
       {
        "t": "PPT EDITÁVEL",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgAXKxEU5UBwSJSYTEExlu6gAeaQ2yGdlwgxhF6m4OVzm3g?e=4Hvn2G"
       },
       {
        "t": "ARQUIVOS BASE PARA ARTES (.PSD)",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgDsJoSKeWgGTbeMLiJWAMNpAbeVhuSYsGuikH6YI43AhOE?e=rWaz3k"
       }
      ]
     },
     "INSIDE": {
      "logos": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgDpW6oGlwvjQqIYonhLfrYKAQNnYk5S8Y9Y2MBWbDFBmuk?e=XgUGDe",
      "fonte": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgD9LiLL6zLrSanHCsmC_XunAVV4o44GLypbayxwJ7BsZ0E?e=GRhKnx",
      "materiais": [
       {
        "t": "PPT EDITÁVEL",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgAZc-GsajUMQrvNbL5KM77CAUWiYACwZEC3nA456MdHRpE?e=EJiLVM"
       },
       {
        "t": "ARQUIVOS BASE PARA ARTES (.PSD)",
        "u": "https://grupodbvo.sharepoint.com/:f:/s/DBVOHUB/IgDrNMEZZodpR4tjJPskhY-sAU7R0bi9e2knL3NoNOuWxR8?e=bpfh8I"
       }
      ]
     }
    },
    falamos: {
      sim: ["Linguagem simples, acessível e objetiva, com leveza.", "Tom positivo e motivador: inovação e transformação.", "Cada empreendimento com a sua identidade e os seus ganchos verbais."],
      nao: ["Burocrático, formal demais ou conservador.", "Convencional, previsível ou mediano.", "Seguir o mercado sem questionar ou reinventar."],
      exSim: "Olá, time DBVO! Temos uma novidade incrível para compartilhar com vocês…",
      exNao: "Prezados colaboradores, temos o prazer de informar que, em alinhamento com…",
      praticas: ["Seja claro e autêntico", "Adapte ao canal e ao público", "Mantenha a consistência", "Revise antes de publicar", "Aprove com o Marketing quando o material for grande"]
    }
  },

  /* ================= ROTINAS ================= */
  rotinas: {
    biblioteca: "/POPs e Manuais",
    pastas: [
      { n: "00", t: "Políticas", pasta: "00. Políticas",
        d: "As regras do grupo: o que pode, o que não pode e quem decide.",
        quando: "Antes de tomar uma decisão que envolve dinheiro, pessoas ou clientes." },
      { n: "01", t: "POPs", pasta: "01. Procedimentos Operacionais Padrões (POP)",
        d: "Procedimentos operacionais padrão: o passo a passo de cada atividade.",
        quando: "Ao fazer uma atividade pela primeira vez ou treinar alguém." },
      { n: "02", t: "Fichas cadastrais", pasta: "02. Fichas Cadastrais",
        d: "Os formulários para cadastrar clientes, fornecedores e colaboradores.",
        quando: "Sempre que for abrir um cadastro novo." }
    ],
    passos: [
      { t: "Procure", d: "Veja se a atividade já tem POP ou política." },
      { t: "Siga", d: "Faça como está escrito. É assim que todos fazem igual." },
      { t: "Melhore", d: "Achou algo errado ou desatualizado? Peça a revisão." }
    ]
  },

  /* ================= CENTRAL DE FERRAMENTAS ================= */
  ferramentas: {
    areas: [
      { id: "CSUA", nome: "CSUA", sub: "Controladoria, tesouraria e DP" },
      { id: "BA",   nome: "Business Analytics", sub: "Dados e metas" },
      { id: "CSUM", nome: "CSUM & EDFC", sub: "Comercial e marketing" }
    ],
    /* login: true mostra o cadeado */
    itens: [
      { area: "CSUA", nome: "PDE", sigla: "PDE", d: "Processo de Desenvolvimento de Empreendimento: cada etapa, do terreno à entrega.", u: "https://pdedbvo.github.io/Processo-De-Desenvolvimento-de-Empreendimento/" },
      { area: "CSUA", nome: "Portal DP", sigla: "DP", d: "Gestão de pessoas e relacionamento: férias, holerite e solicitações ao DP.", u: "https://portal-dp-bravo-881c5.web.app", login: true },
      { area: "CSUA", nome: "Central de Serviços", sigla: "CS", d: "Tickets centralizados: abra e acompanhe pedidos para as áreas.", u: "https://pdedbvo.github.io/CentralDeServicos/" },
      { area: "BA",   nome: "OKRs", sigla: "OKR", d: "Gestão de objetivos e resultados: lance o realizado dos seus KRs.", u: "https://okrs---bravo.web.app/", login: true },
      { area: "BA",   nome: "Comitê de Incorporação", sigla: "CI", d: "Andamento das obras e fotos do mês de cada empreendimento.", u: "https://comite-de-incorporacao.web.app/", sugestao: true },
      { area: "CSUM", nome: "Comitê de Growth", sigla: "CG", d: "Indicadores e decisões do comitê comercial e de marketing.", u: "https://comite-de-growth---comercial.web.app/", login: true },
      { area: "CSUM", nome: "Weekly", sigla: "WK", d: "Gestão de atividades: o que cada um entrega na semana.", u: "https://weekly-social.web.app/", login: true }
    ]
  }
};
