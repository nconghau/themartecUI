"use client"
import useForm from "@/hooks/useForm"
import { useSignupFormValidate } from "./signupForm.validate"

export const useSignupForm = () => {
  const { schema } = useSignupFormValidate()
  function _onSubmit(values: any) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  const { form, onSubmit } = useForm({ schema, defaultValues: { username: "", phone: "", password: "" }, cbSubmit: _onSubmit })

  return {
    form,
    onSubmit
  }
}