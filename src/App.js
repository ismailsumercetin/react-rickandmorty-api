import React, { useState } from 'react';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import DarkModeToggle from 'dark-mode-toggle-animation';
import { GlobalStyles } from './style/styleGlobal';
import { lightTheme, darkTheme } from './style/theme';
import { ThemeToggleWrapper } from './style/styleThemeToggle';

const TOGGLE_STYLE = {
  width: '30px',
  moonColor: '#000000',
  sunColor: '#000000',
  animationDuration: .8
}

const TOGGLE_MODE = {
  SUN: 'sun',
  MOON: 'moon'
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = () => {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <>
        <ThemeToggleWrapper onClick={changeTheme}>
          <DarkModeToggle
            { ...TOGGLE_STYLE }
            mode={darkMode ? TOGGLE_MODE.SUN : TOGGLE_MODE.MOON}
          />
        </ThemeToggleWrapper>
        <GlobalStyles />
        <Router theme={darkMode} />
      </>
    </ThemeProvider>
  )
}