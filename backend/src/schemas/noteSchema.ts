import {z} from 'zod'

export const noteSchema = z.object({
    title: z.string().min(2).max(100),
    content: z.string().min(2).max(1000)
})