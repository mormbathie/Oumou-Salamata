export class CreateStudentDto {
    firstName!: string;
    lastName!: string;
    birthDate?: Date;
    classId?: string;
    parentId?: string;
}
