import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService){}
    async register(RegisterDto: RegisterDto){
        const UserExists =await this.prisma.user.findUnique({
            where : {
                email: RegisterDto.email
            }
        });
        if(UserExists){
            throw new Error('User already exists');
        }
        const user = await this.prisma.user.create({
            data: {
                email: RegisterDto.email,
                password: await this.HashPassword(RegisterDto.password),
                role: 'PARENT'
            }
        });
        return user;

    }

    private async HashPassword(password: string): Promise<string>{
            const hashedPassword = await bcrypt.hash(password, 10);
            return hashedPassword;

    }
    
}
