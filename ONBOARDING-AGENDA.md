# Onboarding e agenda de onboarding

## Páginas
| Página do SharePoint | iframe `src` | Altura |
|---|---|---|
| `/SitePages/ONBOARDING.aspx` | `https://pdedbvo.github.io/portal-dbvo/paginas.html?pagina=onboarding` | 2500 |
| Agenda (abre em nova aba pelo botão da página) | `https://pdedbvo.github.io/portal-dbvo/paginas.html?pagina=agenda` | — |

`?pagina=agenda&demo` testa a agenda sem login (grava só no navegador). `&demo=lider` simula um líder.
Conteúdo em `paginas-dados.js` (chave `onboarding`). O Estúdio pode sobrescrever pelo doc `conteudo/onboarding` (campo `v`), mas o bloco de edição no Estúdio (repo okrs-sharepoint) ainda não existe.

## Agenda: banco e acessos (Firebase sharepoint-studio)
- Coleção `onboarding`: uma ficha por contratação (nome, cargo, setor, líder, liderEmail, aceite, inicio, itens{id:{ok,data,reg}}).
- Quem está em `editores/{email}` (Estúdio) entra como RH e vê tudo.
- Outros: criar usuário no Firebase Auth (e-mail/senha) e o doc `acessosOnboarding/{email em minúsculas}` com `papel: "RH"` (ex.: Carol) ou `papel: "Lider"`. Líder vê e cria só agendas com o próprio e-mail em `liderEmail`.

### Regras a acrescentar no console (Firestore → Regras), dentro de `match /databases/{database}/documents`
```
function ehEditor() { return request.auth != null && exists(/databases/$(database)/documents/editores/$(request.auth.token.email)); }
function papelOnb() { return get(/databases/$(database)/documents/acessosOnboarding/$(request.auth.token.email)).data.papel; }
function temOnb() { return request.auth != null && exists(/databases/$(database)/documents/acessosOnboarding/$(request.auth.token.email)); }
function ehRH() { return ehEditor() || (temOnb() && papelOnb() == "RH"); }
match /onboarding/{id} {
  allow read, update: if ehRH() || (temOnb() && resource.data.liderEmail == request.auth.token.email);
  allow create: if ehRH() || (temOnb() && request.resource.data.liderEmail == request.auth.token.email);
  allow delete: if ehRH();
}
match /acessosOnboarding/{email} {
  allow read: if request.auth != null && (request.auth.token.email == email || ehRH());
  allow write: if ehEditor();
}
```
