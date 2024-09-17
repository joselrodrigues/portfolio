import * as v from "valibot"

export const LoginSchema = v.object({
  email: v.pipe(v.string(), v.email(), v.nonEmpty()),
  password: v.pipe(v.string(), v.minLength(8), v.nonEmpty()),
})

export type LoginForm = v.InferInput<typeof LoginSchema>
