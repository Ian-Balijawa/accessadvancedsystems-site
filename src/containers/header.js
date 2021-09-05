import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import './containers.css';
export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} />
        <div className="break">
          <Header.ButtonLink to={ROUTES.HOME}>Videos</Header.ButtonLink>
        </div>
      </Header.Frame>
      {children}
    </Header>
  );
}
