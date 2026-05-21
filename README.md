# 💼 Portfólio Pessoal — André Luiz Jesus Martins

> Projeto acadêmico desenvolvido como atividade prática da disciplina de Desenvolvimento Web.  
> Aplicação de arquitetura **MVC**, **responsividade**, **acessibilidade (WCAG)** e boas práticas de organização de código — tudo em **HTML, CSS e JavaScript puro**, sem frameworks.

---

## 📁 Estrutura do Projeto

```
portfolio-andre/
├── model/
│   └── model.js          # Camada de dados (perfil, projetos, contato)
├── controller/
│   └── controller.js     # Camada de controle (eventos, fluxo, lógica)
├── view/
│   ├── index.html        # Página principal (perfil pessoal)
│   └── portfolio.html    # Página de projetos
├── css/
│   └── style.css         # Estilos globais (responsivo, acessível)
├── js/
│   └── app.js            # Camada de view (renderização do DOM)
├── images/               # Imagens do projeto
└── README.md
```

---

## 🚀 Como Executar

### Opção 1 — Abrir direto no navegador (mais simples)
Navegue até a pasta `view/` e dê dois cliques no arquivo `index.html`.

### Opção 2 — Servidor local com Node.js
```bash
npx serve .
```
Acesse: [http://localhost:3000/view/index.html](http://localhost:3000/view/index.html)

### Opção 3 — Servidor local com Python
```bash
python -m http.server 3000
```
Acesse: [http://localhost:3000/view/index.html](http://localhost:3000/view/index.html)

### Opção 4 — VS Code (recomendado para desenvolvimento)
Instale a extensão **Live Server**, clique com o botão direito em `view/index.html` e selecione **"Open with Live Server"**.

---

## 🏗️ Arquitetura MVC

O projeto segue o padrão **Model-View-Controller** aplicado ao front-end sem frameworks:

| Camada | Arquivo | Responsabilidade |
|--------|---------|-----------------|
| **Model** | `model/model.js` | Armazena todos os dados: perfil, projetos, habilidades, contato |
| **View** | `js/app.js` | Renderiza os dados no DOM, sem conter lógica de negócio |
| **Controller** | `controller/controller.js` | Conecta Model e View, gerencia eventos e estado da aplicação |

> A ordem de carregamento dos scripts respeita a dependência entre camadas:  
> `model.js` → `app.js` → `controller.js`

---

## 🎨 Tecnologias Utilizadas

- **HTML5** — Semântico e acessível
- **CSS3** — Flexbox, Grid, Media Queries, animações
- **JavaScript** — Vanilla JS, manipulação de DOM, eventos
- Fontes: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) + [Syne](https://fonts.google.com/specimen/Syne) via Google Fonts

---

## 📱 Responsividade

Layout **mobile-first** com breakpoints definidos em `style.css`:

- `max-width: 767px` — Layout em coluna única, menu hamburguer
- `min-width: 768px` — Layout em grid de duas colunas
- Uso de `clamp()` para tipografia fluida
- Grid e Flexbox para adaptação automática dos componentes

---

## ♿ Acessibilidade (WCAG)

Recursos implementados conforme os princípios WCAG:

- ✅ HTML semântico (`header`, `main`, `footer`, `nav`, `section`, `aside`, `form`)
- ✅ Skip link ("Pular para o conteúdo principal")
- ✅ Atributos ARIA (`aria-label`, `aria-expanded`, `aria-live`, `aria-required`, `role`)
- ✅ Navegação completa via teclado (Escape fecha menu, foco gerenciado)
- ✅ `:focus-visible` com outline de alto contraste
- ✅ `@media (prefers-reduced-motion)` respeitando preferências do usuário
- ✅ Contraste adequado entre texto e fundo (modo escuro)
- ✅ `lang="pt-BR"` declarado no `<html>`

---

## 📄 Páginas

### `view/index.html` — Perfil Pessoal
Página principal com as seções:
- **Hero** — Apresentação com nome, cargo e links de ação
- **Sobre** — Bio, localização, e-mail e interesses
- **Habilidades** — Stack técnico com barras de nível
- **Referências** — Tipos de Landing Pages e Portfólios
- **Contato** — Formulário com validação + redes sociais

### `view/portfolio.html` — Portfólio de Projetos
Página dedicada a projetos com:
- Listagem completa de projetos
- Filtros por categoria
- Stack técnico completo

---

## ✅ Critérios de Avaliação

| Critério | Implementação |
|----------|--------------|
| **Uso correto de tags semânticas** (2 pts) | `header`, `main`, `footer`, `nav`, `section`, `aside`, `form`, `h1`-`h2` |
| **Responsividade** (2 pts) | Flexbox + Grid + Media Queries + mobile-first |
| **Organização MVC** (2 pts) | Model / View / Controller separados em arquivos distintos |
| **Acessibilidade WCAG** (2 pts) | ARIA, skip link, foco, contraste, reduced-motion |
| **Qualidade geral** (2 pts) | Loader, animações, filtros, formulário com validação |

---

## 👨‍💻 Autor

**André Luiz Jesus Martins**  
Estudante de Sistemas para Internet

---

*Desenvolvido com HTML · CSS · JavaScript puro — Arquitetura MVC*