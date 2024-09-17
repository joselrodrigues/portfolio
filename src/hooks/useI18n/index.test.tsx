import { useI18n } from "."

// vi.mock("@solid-primitives/i18n", () => ({
//   flatten: jest.fn((dict) => dict),
//   translator: jest.fn((dict) => jest.fn((key) => dict[key] || key)),
// }))

describe("useI18n", () => {
  it("should return an object containing locale, setLocale, and t", () => {
    const result = useI18n()
    expect(result).toEqual({
      locale: expect.any(Function),
      setLocale: expect.any(Function),
      t: expect.any(Function),
    })
  })

  it("should change locale when setLocale is called", () => {
    const { locale, setLocale } = useI18n()
    setLocale("es")
    expect(locale()).toBe("es")
  })
})
