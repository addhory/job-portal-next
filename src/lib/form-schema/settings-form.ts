import { z } from "zod";

export const overviewFormSchema = z.object({
  image: z
    .any()
    .refine((item: any) => item?.name, { message: "Image is required" }),

  name: z.string({ required_error: "Name is required" }),
  description: z.string({ required_error: "Description is required" }),
  website: z.string({ required_error: "Website is required" }),
  location: z.string({ required_error: "Location is required" }),
  employee: z.string({ required_error: "Employee is required" }),
  industry: z.string({ required_error: "Industry is required" }),
  dateFounded: z.string({ required_error: "Date founded is required" }),
  techStack: z
    .string({ required_error: "Tech stack is required" })
    .array()
    .nonempty({ message: "Tech stack must be at least 1 data" }),
});
