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

  const onSubmit = form.handleSubmit((values: z.infer<typeof schema>) => {
    cbSubmit(values);
  })

  return {
    form,
    onSubmit
  }
}

export default useForm