import { z } from "zod";

import { JOB_TYPES } from "@/constants";

export const jobFormSchema = z.object({
  roles: z
    .string({
      required_error: "Job Title is required",
    })
    .min(1, { message: "Job Title must be at least 1 characters" }),
  jobType: z.enum(JOB_TYPES, {
    required_error: "You need to select job type",
  }),
  salaryForm: z.string({
    required_error: "Salary From is required",
  }),
  salaryTo: z.string({
    required_error: "Salary To is required",
  }),
  categoryId: z.string({
    required_error: "You need to select a category",
  }),
  requiredSkills: z
    .string()
    .array()
    .nonempty({ message: "Required Skill must be at least 1 skill" }),
  jobDescription: z
    .string({
      required_error: "Job Description is required",
    })
    .min(10, {
      message: "Job Description must be at least 10 characters",
    }),
  responsibility: z
    .string({
      required_error: "Responsibilities is required",
    })
    .min(10, {
      message: "Responsibilities must be at least 10 characters",
    }),
  whoYouAre: z
    .string({
      required_error: "Who You Are is required",
    })
    .min(10, {
      message: "Who Your Are must be at least 10 characters",
    }),
  niceToHaves: z
    .string({
      required_error: "Nice to haves is required",
    })
    .min(10, {
      message: "Nice to haves must be at least 10 characters",
    }),
  benefits: z
    .object({
      benefit: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: "Perks and benefits must be at least 1 benefit" }),
});
