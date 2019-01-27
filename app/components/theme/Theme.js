import React, { createContext, Component } from 'react';
import { applicationtheme } from './applicationtheme';

const AppTheme = createContext();

export const Theme = ({ children }) => <AppTheme.Provider value={applicationtheme}>{children}</AppTheme.Provider>;

export const Themed = Child => props => (
  <AppTheme.Consumer>
    {
      theme => <Child {...props} theme={theme} />
    }
  </AppTheme.Consumer>
);

