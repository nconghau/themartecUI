"use client"
import { z } from "zod"

export const useSignupFormValidate = () => {
  const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );

  const formSchema = z.object({
    username: z.string().min(5).max(50),
    phone: z.string().regex(phoneRegex, 'Invalid Phone Number').min(9).max(15),
    password: z.string().min(5).max(50),
  })

  return {
    schema: formSchema
  }
}