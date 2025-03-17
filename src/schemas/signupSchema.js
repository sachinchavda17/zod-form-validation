import {z } from "zod"

export const usernameSchemaValidation = z
    .string()
    .min(3,"username must be atleast 3 characters")
    .max(20,"username must be no more than 20 characters")
    .regax(/^[a-zA-Z0-9_]/,"username must not contain special charcters")

export const signupSchemaValidation = z.object({
    username:usernameSchemaValidation,
    email:z.string().email({message:"Invalid Email"}),
    password:z.string().min(6,{message:'password must be atleast 6 characters'})
})
    