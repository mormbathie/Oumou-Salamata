import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService){}

    @Post('register')
    async register(@Body() dto: RegisterDto) {
        return this.authService.register(dto);
    }

    @Get()
    async findUsers(){
        return this.authService.GetAllUsers();
    }
    @Post('login')
    async login(@Body() loginDto){
        return this.authService.Login(loginDto);
    }

}
