import { createRoot } from "solid-js"

import { useI18n } from "."

vi.mock("@solid-primitives/i18n", () => ({
  flatten: vi.fn((dict) => dict), // Mock de la función flatten
  translator: vi.fn((dict) => vi.fn((key) => dict[key] || key)), // Mock de la función translator
}))

describe("useI18n", () => {
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

  it("should translate keys using the t function", () => {
    createRoot(() => {
      const { t } = useI18n()
      const expectedTranslation = "components.login.passwordLabel"

      const result = t("components.login.passwordLabel")

      expect(result).toBe(expectedTranslation)
    })
  })
})
