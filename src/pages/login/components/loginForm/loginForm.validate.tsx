"use client"

import { z } from "zod"

export const useLoginFormValidate = () => {
  const formSchema = z.object({
    username: z.string().min(2).max(50),
  })
  return {
    schema: formSchema
  }
}