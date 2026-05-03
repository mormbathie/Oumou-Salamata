import { Body, Controller, Get, Param, Patch, Post, Query, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AdminGuard } from './admin.guard';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('register')
    async register(@Body() dto: RegisterDto) {
        return this.authService.register(dto);
    }


    @Post('login')
    async login(@Body() loginDto) {
        return this.authService.Login(loginDto);
    }
    @UseGuards(JwtAuthGuard,RolesGuard)
    @Roles('ADMIN')
    @Get()
    findAll(@Query('role') role?: string) {
        return this.authService.findAll(role);
    }
    @UseGuards(JwtAuthGuard,AdminGuard)
    @Patch(':id/role')
    updateRole(
        @Param('id') id: string,
        @Body('role') role: string,
    ) {
        return this.authService.updateRole(id, role);
    }


}
