import React, { createContext } from 'react';
import { applicationtheme } from './applicationtheme';

const AppTheme = createContext();

export const Theme = ({ children }) => <AppTheme.Provider value={applicationtheme}>{children}</AppTheme.Provider>;

export const Themed = AppTheme.Consumer;

