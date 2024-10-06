import { z } from "zod";

// Auth & Users

const authSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  password_confirmation: z.string(),
  token: z.string(),
  current_password: z.string(),
 
});

type Auth = z.infer<typeof authSchema>;
export type UserLoginForm = Pick<Auth, "email" | "password">;
export type UserRegistrationForm = Pick<
  Auth,
  "name" | "email" | "password" | "password_confirmation"
>;
export type RequestConfirmationCodeForm = Pick<Auth, "email">;
export type ConfirmToken = Pick<Auth, "token">;
export type ForgotPasswordForm = Pick<Auth, "email">;
export type NewPasswordForm = Pick<Auth, "password" | "password_confirmation">;
export type UpdateCurrentPasswordForm = Pick<
  Auth,
  "password" | "password_confirmation" | "current_password"
>;
export type CheckPasswordForm = Pick<Auth, "password">;

export const userSchema = authSchema
  .pick({
    name: true,
    email: true,
    
  })
  .extend({ _id: z.string(),  image: z
    .any()
    .refine(
      (file) => file instanceof File || file === undefined || file === null,
      {
        message: "Você precisa enviar um arquivo válido",
      }
    )
    .refine((file) => file?.size <= 5000000, {
      // 5MB
      message: "O arquivo deve ter no máximo 5MB",
    }), });

export type User = z.infer<typeof userSchema>;
export type UserProfileForm = Pick<User, "email" | "name" | "image">;

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
  priority: z.string(),
  deadline: z.string(),
  alt: z.string(),
  completedBy: z.array(
    z.object({
      user: userSchema,
      status: taskStatusSchema,
      _id: z.string(),
    })
  ),
  image: z
    .any()
    .refine(
      (file) => file instanceof File || file === undefined || file === null,
      {
        message: "Você precisa enviar um arquivo válido",
      }
    )
    .refine((file) => file?.size <= 5000000, {
      // 5MB
      message: "O arquivo deve ter no máximo 5MB",
    }),
});

export type Task = z.infer<typeof taskSchema>;
export type TaskFormData = Pick<
  Task,
  "taskName" | "description" | "priority" | "deadline" | "alt" | "image"
>;

/**Projects */

export const projectSchema = z.object({
  _id: z.string(),
  projectName: z.string(),
  clientName: z.string(),
  description: z.string(),
  manager: z.string(userSchema.pick({ _id: true })),
  active: z.boolean().optional(),
});
export type Project = z.infer<typeof projectSchema>;
export type ProjectFormData = Pick<
  Project,
  "clientName" | "description" | "projectName" | 'active'
>;

export const dashboardProjectSchema = z.array(
  projectSchema.pick({
    _id: true,
    projectName: true,
    clientName: true,
    description: true,
    manager: true,
  })
);

// Team
const teamMemberSchema = userSchema.pick({
  name: true,
  email: true,
  _id: true,
});

export const teamMembersSchema = z.array(teamMemberSchema);
export type TeamMember = z.infer<typeof teamMemberSchema>;
export type TeamMemberForm = Pick<TeamMember, "email">;

// Clients Types

export const clientShema = z.object({
  clientName: z.string(),
  phone: z.string(),
  email: z.string().email(),
  bankHours: z.string(),
  description: z.string(),
  active: z.string(),
  _id:z.string(),
});

export type Client = z.infer<typeof clientShema>;
export type RegisterClient = Pick<Client,"description"| 'email'| 'bankHours' |"clientName" |"phone">
export type ClientForm = Pick<
  Client,
  "active" | "bankHours" | "clientName" | "email" | "phone" | '_id'|'description'
>;


export const postSchema = z.object({
  title: z.string(),
  content:z.string(),
  summary:z.string(),
  image: z
  .any()
  .refine(
    (file) => file instanceof File || file === undefined || file === null,
    {
      message: "Você precisa enviar um arquivo válido",
    }
  )
  .refine((file) => file?.size <= 5000000, {
    // 5MB
    message: "O arquivo deve ter no máximo 5MB",
  }),
});

export type PostRegister = z.infer<typeof postSchema>