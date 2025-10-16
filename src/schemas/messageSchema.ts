import {z} from 'zod'

export const messageSchema = z.object({
    content : z
        .string()
        .min(10, 'Content must be atleat of 10 characters')
        .max(300, 'Content must be under of 300 characters')
})

