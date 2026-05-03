import { Role } from "@prisma/client";
import { IsEmail, IsEnum, IsString, MinLength } from "class-validator";

export class RegisterDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(6)
  password!: string;
  @IsString()
  firstName?: string;
  @IsString()
  lastName?: string;
  @IsString()
  phone?: string;
  @IsEnum(Role)
  role?: Role;
}