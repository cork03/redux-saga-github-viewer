import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/Variables'
import { Link } from 'react-router-dom'
import Menu from './Menu'

const Container = styled.div`
  width: 100%;
  background-color: ${colors.backgroundBlack};
  color: ${colors.white};
  padding: 16px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  display: flex;
  align-items: center;
`
const Logo = styled.div`
a {
    color: ${colors.white}
}
`
const Lists = styled.ul`
  display: flex;
  padding: 0 32px;
  li{
      margin-right: 16px;
      font-size: 1.1rem;
  }
  a{
      color: ${colors.white}
  }
`
const Right = styled.div`
  padding: 8px;
  font-size: 1.2rem;
`

const links = [
    {to: '/issue',text: 'Issue'},
    {to: '/pullRequest',text: 'Pull Request'}
]

const Header = () => {
    return (
        <Container>
          <Left>
            <Logo>
              <Link to='/'>
                <h1>Github Viewer</h1>
              </Link>
            </Logo>
            <Lists>
              {links.map((link,index) => {
                return (
                  <li key ={index}>
                    <Link to={link.to}>{link.text}</Link>
                  </li>
                );
              })}
            </Lists>
          </Left>
          <Right>
              <Menu />
          </Right>

        </Container>
    );
}

export default Header
