import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@Injectable()
export class ClassesService {
  constructor(private prisma: PrismaService) { }

  create(dto: CreateClassDto) {
    return this.prisma.class.create({
      data: {
        name: dto.name,
        level: dto.level,
        section: dto.section,
        teacher: dto.teacherId
          ? { connect: { id: dto.teacherId } }
          : undefined,
      },
    });
  }

  findAll() {
    return this.prisma.class.findMany({
      include: {
        teacher: true,
        students: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.class.findUnique({
      where: { id },
      include: {
        teacher: true,
        students: true,
      },
    });
  }

  update(id: string, dto: UpdateClassDto) {
    return this.prisma.class.update({
      where: { id },
      data: {
        name: dto.name,
        level: dto.level,
        section: dto.section,

        teacher: dto.teacherId
          ? { connect: { id: dto.teacherId } }
          : undefined,
      },
    });
  }

  remove(id: string) {
    return this.prisma.class.delete({
      where: { id },
    });
  }
}