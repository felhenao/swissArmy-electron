const { remote } = require('electron');

if (process.platform === 'darwin') {
  const { systemPreferences } = remote;

  const setOSTheme = () => {
    let theme = systemPreferences.isDarkMode() ? 'dark' : 'light';
    window.localStorage.os_theme = theme;

    if ('__setTheme' in window) {
      window._setTheme();
    }
  };

  systemPreferences.subscribeNotification(
    'AppleInterfaceThemeChangedNotification',
    setOSTheme
  );

  setOSTheme();
}
