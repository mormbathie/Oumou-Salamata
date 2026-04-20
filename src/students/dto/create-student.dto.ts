import { IsDateString } from "class-validator";

export class CreateStudentDto {
    firstName!: string;
    lastName!: string;
    @IsDateString()
    birthDate?: string;
    gender?: "MALE" | "FEMALE"; // ✅ AJOUT
    classId?: string;
    parentId?: string;
}
