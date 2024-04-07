"use client"
import useForm from "@/hooks/useForm"
import { useLoginFormValidate } from "./loginForm.validate"

export const useLoginForm = () => {
  function _onSubmit(values: any) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  const { schema } = useLoginFormValidate()
  const { form, onSubmit } = useForm({ schema, defaultValues: { username: "", password: "" }, cbSubmit: _onSubmit })

  return {
    form,
    onSubmit
  }
}