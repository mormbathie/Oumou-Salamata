import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { Role } from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService
    ) { }
    async register(RegisterDto: RegisterDto) {
        const UserExists = await this.prisma.user.findUnique({
            where: {
                email: RegisterDto.email
            }
        });
        if (UserExists) {
            throw new Error('User already exists');
        }
        const user = await this.prisma.user.create({
            data: {
                email: RegisterDto.email,
                password: await this.HashPassword(RegisterDto.password),
                role: RegisterDto.role ?? Role.PARENT,
                firstName: RegisterDto.firstName,
                lastName: RegisterDto.lastName,
                phone: RegisterDto.phone,
            }
        });
        return user;

    }

    private async HashPassword(password: string): Promise<string> {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;

    }

    async Login(loginDto: LoginDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: loginDto.email
            }
        });
        if (!user) {
            throw new Error('User not found');
        }
        const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        const token = this.jwt.sign({
            sub: user.id,
            email: user.email,
            role: user.role,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,

        });

        return {
            access_token: token,
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
                firstName: user.firstName,
                lastName: user.lastName,
                phone: user.phone

            },
        };

    }

    findAll(role?: string) {
        const validRoles = Object.values(Role);

        return this.prisma.user.findMany({
            where: role && validRoles.includes(role as Role)
                ? { role: role as Role }
                : {},
        });
    }
    updateRole(id: string, role: string) {
        return this.prisma.user.update({
            where: { id },
            data: { role: role as Role },
        });
    }

    
}






