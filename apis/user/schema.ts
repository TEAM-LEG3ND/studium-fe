import { z } from "zod";

export type User = z.infer<typeof userSchema>;
export const userSchema = z.object({
  id: z.number(),
  nickname: z.string(),
  manners: z.number(),
  intro: z.string(),
  profileURL: z.string(),
});
