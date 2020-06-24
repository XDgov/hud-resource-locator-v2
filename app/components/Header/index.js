import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import FlexContainer from 'components/FlexContainer';
import HeaderLink from './HeaderLink';
import HUDLogo from './hud-logo.png';
import messages from './messages';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStream } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const AppHeader = styled.header`
  background: #4939D5;
  padding: 0.5rem 0;
`;

const AppLogo = styled.div`
  align-self: flex-start;
`;

const AppLogomark = styled.span`
  display: table-cell;
  max-width: 65px;
`;

const AppLogotype = styled.span`
  border-bottom: 0;
  display: table-cell;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding-left: 1rem;
  text-decoration: none;
  vertical-align: middle;
`;

const AppNav = styled.nav`
  align-self: stretch;
  font-size: 0.9rem;
  padding-top: 1.4rem;
`;

const NavLink = styled.a`
  color: #ffffff;
  font-weight: bold;
  margin-right: 2rem;
  text-decoration: none;

  &:hover {
    span {
      border-bottom: 2px solid #ffffff;
    }
  }

  &:last-child {
    margin-right: 0;
  }
`;

const NavSpan = styled.span`
  display: inline-block;
  margin-left: 0.5rem;
`;

function Header() {
  return (
    <AppHeader className="app-header">
      <FlexContainer>
        <AppLogo className="app-logo">
          <A href="/">
            <AppLogomark>
              <Img src={HUDLogo} alt="Department of Housing and Urban Development" />
            </AppLogomark>
            <AppLogotype>HUD Resource Locator</AppLogotype>
          </A>
        </AppLogo>
        <AppNav>
          <NavLink href="/">
            <FontAwesomeIcon icon={faSearch} />
            <NavSpan>
              Previous Searches
            </NavSpan>
          </NavLink>
        </AppNav>
      </FlexContainer>
    </AppHeader>
  );
}

export default Header;
