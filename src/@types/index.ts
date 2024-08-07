import { z } from "zod";

// Auth & Users

const authSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password:z.string(),
  password_confirmation: z.string(),
  token: z.string()
});

type Auth = z.infer<typeof authSchema>;
export type UserLoginForm = Pick<Auth, "email" | "password">;
export type UserRegistrationForm = Pick<Auth, 'name' | "email" |'password'|'password_confirmation'>;
export type RequestConfirmationCodeForm = Pick<Auth,'email'>
export type ConfirmToken = Pick<Auth, "token" >
export type ForgotPasswordForm = Pick<Auth,'email'>
export type NewPasswordForm = Pick<Auth,'password' | 'password_confirmation'>

/* Tasks */

export const taskStatusSchema = z.enum([
  "pending",
  "onHold",
  "inProgress",
  "underReview",
  "completed",
]);
export type TaskStatus = z.infer<typeof taskStatusSchema>;

export const taskSchema = z.object({
  _id: z.string(),
  taskName: z.string(),
  description: z.string(),
  project: z.string(),
  status: taskStatusSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
export type TaskFormData = Pick<Task, "taskName" | "description">;

/**Projects */

export const projectSchema = z.object({
  _id: z.string(),
  projectName: z.string(),
  clientName: z.string(),
  description: z.string(),
});
export type Project = z.infer<typeof projectSchema>;
export type ProjectFormData = Pick<
  Project,
  "clientName" | "description" | "projectName"
>;
export const dashboardProjectSchema = z.array(
  projectSchema.pick({
    _id: true,
    projectName: true,
    clientName: true,
    description: true,
  })
);

export type TaskT = {
	id: string;
	title: string;
	description: string;
	priority: string;
	deadline: number;
	image?: string;
	alt?: string;
	tags: { title: string; bg: string; text: string }[];
};

type Column = {
	name: string;
	items: TaskT[];
};

export type Columns = {
	[key: string]: Column;
};