import { flatten } from "@solid-primitives/i18n"
import { createRoot } from "solid-js"

import { Locale, useI18n } from "."

vi.mock("@solid-primitives/i18n", () => ({
  flatten: vi.fn((dict) => dict),
  translator: vi.fn((dict) => vi.fn((key) => dict[key] || key)),
}))

describe("useI18n", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("should locale be default to en", () => {
    createRoot(() => {
      const { locale } = useI18n()
      expect(locale()).toBe("en")

      expect(flatten).toHaveBeenCalledTimes(1)
    })
  })

  it("should return an object containing locale, setLocale, and t", () => {
    createRoot(() => {
      const result = useI18n()
      expect(result).toEqual({
        locale: expect.any(Function),
        setLocale: expect.any(Function),
        t: expect.any(Function),
      })
    })
  })

  it("should change locale when setLocale is called", () => {
    createRoot(() => {
      const { locale, setLocale } = useI18n()
      setLocale("es")
      expect(locale()).toBe("es")
    })
  })

  it("should keep locale unchanged if setLocale is called with invalid locale after valid one", () => {
    createRoot(() => {
      const { locale, setLocale } = useI18n()
      setLocale("es")
      expect(locale()).toBe("es")
      setLocale("invalid-locale" as Locale)
      expect(locale()).toBe("es")
    })
  })

  it("should translate keys using the t function", () => {
    createRoot(() => {
      const { t } = useI18n()

      const expectedTranslation = "components.login.passwordLabel"

      const result = t("components.login.passwordLabel")

      expect(result).toBe(expectedTranslation)
    })
  })
})
