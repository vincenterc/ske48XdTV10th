import React from 'react'
import styled from 'styled-components'

import PageWrapper from '../components/page-wrapper'
import globalBg from '../../assets/img/global-bg.jpg'
import teams from '../../contents/teams.json'

class HomePage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Header />

          <Main />

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

class Main extends React.Component {
  render() {
    return (
      <Main.Wrapper>
        {teams.map(t => (
          <Main.Team key={t.id}>
            <h4>{`TEAM ${t.name.toUpperCase()}`}</h4>

            <div>
              {t.members.map(m => {
                let nameEngTemp = m.id.split('_')
                let nameEng = `${nameEngTemp[1].toUpperCase()} ${nameEngTemp[0].toUpperCase()}`
                return (
                  <Main.Member key={m.id} href={m.dTV10thLink} target="_blank">
                    <img src={m.photo} alt={`${nameEng}`} />
                    <h5>{m.name}</h5>
                    <h6>{nameEng}</h6>
                  </Main.Member>
                )
              })}
              <Main.Member style={{ marginBottom: 0 }} />
              <Main.Member style={{ marginBottom: 0 }} />
              <Main.Member style={{ marginBottom: 0 }} />
              <Main.Member style={{ marginBottom: 0 }} />
            </div>
          </Main.Team>
        ))}
      </Main.Wrapper>
    )
  }

  static Wrapper = styled.main``

  static Team = styled.div`
    & > h4 {
      margin-bottom: 15px;
      padding: 5px;
      background: #f8b500;
      color: #fff;
    }

    & > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  `

  static Member = styled.a`
    width: 120px;
    margin: 0 7.5px 30px;
    text-decoration: none;
    cursor: pointer;

    & > img {
      width: 120px;
      height: 150px;
      background: #d0d0d0;
      display: block;
    }

    & > h5 {
      padding: 5px;
      border-bottom: solid 1px #eee;
      color: #e57e16;
      text-align: center;
    }

    & > h6 {
      padding: 2px;
      color: #ccc;
      text-align: center;
    }

    &:hover {
      opacity: 0.8;
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
