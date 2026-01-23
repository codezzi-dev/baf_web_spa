import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !["en", "bn"].includes(locale)) {
    locale = "en";
  }

  // Import all namespace files and merge them
  const messages = {
    common: (await import(`../messages/${locale}/common.json`)).default,
    nav: (await import(`../messages/${locale}/nav.json`)).default,
    home: (await import(`../messages/${locale}/home.json`)).default,
    athletes: (await import(`../messages/${locale}/athletes.json`)).default,
    coachesAndjudges: (await import(`../messages/${locale}/coaches-and-judges.json`)).default,
    events: (await import(`../messages/${locale}/events.json`)).default,
    federation: (await import(`../messages/${locale}/federation.json`)).default,
    resources: (await import(`../messages/${locale}/resources.json`)).default,
    history: (await import(`../messages/${locale}/history.json`)).default,
    footer: (await import(`../messages/${locale}/footer.json`)).default,
  };

  return {
    locale,
    messages,
  };
});