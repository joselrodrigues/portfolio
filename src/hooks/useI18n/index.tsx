import * as i18n from "@solid-primitives/i18n"
import { createMemo, createSignal } from "solid-js"
import { en, es } from "~/i18n"

export type Locale = "en" | "es"

const dictionaries = {
  en,
  es,
}

/**
 * A custom hook for handling internationalization (i18n) in a SolidJS application.
 * It provides the current locale, a function to change the locale, and a translator function.
 *
 * @returns An object containing:
 * - `locale`: A reactive signal for the current locale.
 * - `setLocale`: A function to change the current locale.
 * - `t`: A translator function to get the translated strings based on the current locale.
 *
 * @example
 * ```tsx
 * import { useI18n } from "./useI18n";
 *
 * const App = () => {
 *   const { t, setLocale, locale } = useI18n();
 *
 *   return (
 *     <div>
 *       <h1>{t("welcome_message")}</h1>
 *       <button onClick={() => setLocale("en")}>English</button>
 *       <p>Current Locale: {locale()}</p>
 *     </div>
 *   );
 * };
 * ```
 */
export function useI18n() {
  const [locale, setLocale] = createSignal<Locale>("en")

  const dict = createMemo(() => i18n.flatten(dictionaries[locale()]))

  const t = i18n.translator(dict)

  const changeLocale = (newLocale: Locale) => {
    if (newLocale in dictionaries) {
      setLocale(newLocale)
    }
  }

  return { locale, setLocale: changeLocale, t }
}
