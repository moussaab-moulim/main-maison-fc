export const manageLocal = (Locales: string[], locale: string) => {
  // Languages from API response
  // // Setting Master language as default language option
  const mainLanguage = Locales[0];
  // // Sets current language based on the locale
  const currentLang = locale !== undefined ? locale : mainLanguage;
  const isMyMainLanguage = mainLanguage === currentLang;

  return { mainLanguage, currentLang, isMyMainLanguage };
};
