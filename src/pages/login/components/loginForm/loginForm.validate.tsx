"use client"
import { z } from "zod"

export interface IFormSchema {
  username: string
  password: string
}

export const useLoginFormValidate = () => {
  const formSchema = z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
  })
  return {
    schema: formSchema
  }
}