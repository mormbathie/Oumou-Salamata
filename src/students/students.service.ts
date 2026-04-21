import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) { }
  create(dto: CreateStudentDto) {
    return this.prisma.student.create({
      data: {
        firstName: dto.firstName,
        lastName: dto.lastName,
        birthDate: dto.birthDate ? new Date(dto.birthDate) : null,
        gender: dto.gender,


        class: dto.classId
          ? { connect: { id: dto.classId } }
          : undefined,

        parent: dto.parentId
          ? { connect: { id: dto.parentId } }
          : undefined,
      },
    });
  }

  findAll(filters: any) {
    const { search, classId, parentId, birthDate, id } = filters;

    return this.prisma.student.findMany({
      where: {
        AND: [
          id ? { id } : {},
          classId ? { classId } : {},
          parentId ? { parentId } : {},
          birthDate
            ? { birthDate: new Date(birthDate) }
            : {},

          search
            ? {
              OR: [
                { firstName: { contains: search, mode: "insensitive" } },
                { lastName: { contains: search, mode: "insensitive" } },
              ],
            }
            : {},
        ],
      },
      include: {
        class: true,
        parent: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.student.findUnique({
      where: { id },
      include: {
        class: true,
        parent: true,
      },
    });
  }


  // update(id: string, data: UpdateStudentDto) {
  //   return this.prisma.student.update({
  //     where: { id },
  //     data,
  //   });
  // }

  // ✏️ UPDATE (IMPORTANT PART)
  update(id: string, dto: UpdateStudentDto) {
    const { classId, parentId, ...rest } = dto;

    return this.prisma.student.update({
      where: { id },
      data: {
        ...rest,
        birthDate: dto.birthDate ? new Date(dto.birthDate) : undefined,

        class: classId ? { connect: { id: classId } } : undefined,
        parent: parentId ? { connect: { id: parentId } } : undefined,
      },
    });
  }

  remove(id: string) {
    return this.prisma.student.delete({
      where: { id },
    });
  }
}
