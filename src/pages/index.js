import React from 'react'
import styled from 'styled-components'

import PageWrapper from '../components/page-wrapper'
import globalBg from '../../assets/img/global-bg.jpg'

class HomePage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Header />

          <Footer />
        </Container>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  background: url(${globalBg});
`

const Container = styled.div`
  max-width: 690px;
  min-height: 100vh;
  margin: 0 auto;
  background: #fff9ed;
`

class Header extends React.Component {
  render() {
    return (
      <Header.Wrapper>
        <h1>SKE48XdTV 10th</h1>
      </Header.Wrapper>
    )
  }

  static Wrapper = styled.header`
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    & > h1 {
      height: 70px;
      border-radius: 35px;
      padding: 0 35px;
      background: linear-gradient(to right, #e467db, #aa3bd8, #9280ea);
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }
  `
}

class Footer extends React.Component {
  render() {
    return <Footer.Wrapper />
  }

  static Wrapper = styled.footer`
    padding: 5px;
    background-color: #f8b500;
    color: #fff;
    text-align: center;
  `
}

export default PageWrapper(HomePage)
