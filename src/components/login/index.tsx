import { SubmitHandler, createForm, valiForm } from "@modular-forms/solid"

import { useI18n } from "~/hooks/useI18n"
import { LoginForm, LoginSchema } from "./index.schema"
import { FieldContainer, FormContainer } from "./index.styles"

// TODO: add i18n

const Login = () => {
  const [, { Form, Field }] = createForm<LoginForm>({
    validate: valiForm(LoginSchema),
  })

  const { t, setLocale } = useI18n()

  const handleSubmit: SubmitHandler<LoginForm> = () => {
    //TODO: conect to API
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FieldContainer>
          <Field name="email">
            {(field, props) => (
              <>
                <label for={field.name}>Email</label>
                <input
                  {...props}
                  value={field.value}
                  type="email"
                  required
                ></input>
                {field.error && <div>{field.error}</div>}
              </>
            )}
          </Field>
          <Field name="password">
            {(field, props) => (
              <>
                <label for={field.name}>
                  {t("components.login.passwordLabel")}
                </label>
                <input
                  {...props}
                  value={field.value}
                  type="password"
                  required
                ></input>
                {field.error && <div>{field.error}</div>}
              </>
            )}
          </Field>

          <button type="submit">Login</button>
        </FieldContainer>
      </Form>
    </FormContainer>
  )
}

export default Login
