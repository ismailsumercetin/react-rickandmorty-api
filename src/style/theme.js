const COLORSTORE = {
  blue: 'rgba(16, 176, 200, 1)',
  opaqueblue: 'rgba(16, 176, 200, 0.8)',
  whiteish: '#F8FAF5',
  dark: '#070709',
  yellowish: 'rgba(195, 217, 70, 1)',
  opaqueyellowish: 'rgba(195, 217, 70, .6)',
  gray: 'rgba(47, 79, 79, 1)',
  darkergray: 'rgba(47, 79, 79, .6)',
}

export const lightTheme = {
  body: COLORSTORE.whiteish,
  btnBackgroundHoverColor: COLORSTORE.blue,
  btnBackgroundColor: COLORSTORE.opaqueblue,
  btnTextColor: COLORSTORE.whiteish,
  btnActiveBackgroundColor: COLORSTORE.yellowish,
  btnActiveTextColor: COLORSTORE.opaqueblue,
  themeToggleBgColor: COLORSTORE.opaqueblue,
  themeToggleHoverBgColor: COLORSTORE.blue,
  plainCardBgColor: COLORSTORE.blue,
  quoteTextColor: COLORSTORE.dark
}

export const darkTheme = {
  body: COLORSTORE.dark,
  btnBackgroundHoverColor: COLORSTORE.darkergray,
  btnBackgroundColor: COLORSTORE.gray,
  btnTextColor: COLORSTORE.whiteish,
  btnActiveBackgroundColor: COLORSTORE.yellowish,
  btnActiveTextColor: COLORSTORE.opaqueblue,
  themeToggleBgColor: COLORSTORE.opaqueyellowish,
  themeToggleHoverBgColor: COLORSTORE.yellowish,
  plainCardBgColor: COLORSTORE.gray,
  quoteTextColor: COLORSTORE.yellowish
}