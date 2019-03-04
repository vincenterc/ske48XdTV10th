import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import './layout.css'
import favicon from '../../assets/img/favicon.ico'

class Layout extends React.Component {
  render() {
    let { children } = this.props

    return (
      <Wrapper>
        <Helmet>
          <title>SKE48XdTV 10th</title>
          <meta name="description" content="Links of SKE48XdTV 10th" />
          <link rel="icon" href={favicon} />
        </Helmet>

        {children}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div``

export default Layout
