import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class SignUpDto {
    @IsString()
    @IsNotEmpty()
    fullName!: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email!: string;

    @IsString()
    @IsNotEmpty()
    @Length(6, 20)
    password!: string;
}