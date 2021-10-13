import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from "../components/Post/styled"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <S.MainContent>
      <h1>Um pouquinho sobre a Nate ;D</h1>
      <p>Meu nome é Natália de Azevedo, casada e gay. Resido em São Paulo capital, e sou desenvolvedora frontend desde 2014.</p>

      <p>Sou formada em Análise e Desenvolvimento de Sistemas pela UNICID. E desde então, sigo na área de TI como desenvolvedora. </p>


      <p>Trabalhei em diversas empresas como frontend, desenvolvendo em React/ React Native e outras tecnologias do mercado. Já desenvolvi vários tipos de aplicações, como: Email Marketing,Landing Pages, Ecommerce, Aplicativo e outros.</p>

      <p>Sempre estou em busca de conhecimento e amo compartilhar sobre tudo, e espero ajudar a comunidade com as minhas experiências.</p>
    </S.MainContent>
  </Layout>
)

export default AboutPage;
