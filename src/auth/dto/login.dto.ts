import { IsEmail, IsNumber, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email!: string;

  @IsString()
  password!: string;

  firstName?: string;
  @IsString()
  lastName?: string;
  @IsNumber()
  phone?: string;
}