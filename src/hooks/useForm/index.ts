"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm as useReactForm } from "react-hook-form"
import { z } from "zod"
import { UseFormProps } from "./useForm.props"

const useForm = (props: UseFormProps) => {
  const { schema, defaultValues, cbSubmit } = props

  const form = useReactForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof schema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    cbSubmit(values);
  }
  return {
    form,
    onSubmit
  }
}

export default useForm