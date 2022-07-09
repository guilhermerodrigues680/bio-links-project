<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Projeto Bio Links
</h1>
<p align="center">
  <a href="https://app.netlify.com/sites/bio-links-project/deploys">
    <img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/be11415e-bfe3-4eb3-a91e-c4f4e2c99126/deploy-status" />
  </a>
</p>

## Sobre o projeto

Este projeto é uma prova de conceito de um ferramenta de link na bio (**link-in-bio tool**) usando o gerador de site estático [Gatsby](https://www.gatsbyjs.com/) e o gerenciador de conteúdo [Netlify CMS](https://www.netlifycms.org/).

As configurações do Netlify CMS estão no arquivo `static/admin/config.yml`, para editar o contéudo do site é necessário possuir acesso de leitura e escrita no repositório.

Ao acessar a página do Netlify CMS, `http://localhost:8000/admin/` ou `https://<dominio>/admin/` será solicitado o login no repositório, após o login basta acessar a seção **Links** e a configuração **Bio Links**. Qualquer alteração realizada gerará um commit no repositório e basta fazer o build do projeto novamente para entrar em vigor as alterações. Esse fluxo de alterar e gerar um novo build pode ser automatizado usando um CI ou serviços como Netlify e Vercel.

Veja esse projeto em execução em: [https://bio-links-project.netlify.app/](https://bio-links-project.netlify.app/)

## 🚀 Quick start

0. **Versões**

   ```console
     $ node -v
       v14.19.2
     $ npm -v
       6.14.17
   ```

1. **Create a Gatsby site.**

   Use the Gatsby CLI to create a new site, specifying the minimal starter.

   ```shell
   # create a new Gatsby site using the minimal starter
   npm init gatsby
   ```

2. **Start developing.**

   Navigate into your new site’s directory and start it up.

   ```shell
   cd my-gatsby-site/
   npm run develop
   ```

3. **Open the code and start customizing!**

   Your site is now running at http://localhost:8000!

   Edit `src/pages/index.js` to see your site update in real-time!

4. **Learn more**

   - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

   - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

   - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

   - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

   - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

   - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)
