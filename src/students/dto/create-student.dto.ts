import { IsDateString } from "class-validator";

export class CreateStudentDto {
    firstName!: string;
    lastName!: string;
    @IsDateString()
    birthDate?: string;
    classId?: string;
    parentId?: string;
}
