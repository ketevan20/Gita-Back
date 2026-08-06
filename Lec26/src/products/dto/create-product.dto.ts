import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsString()
    @MinLength(2)
    description!: string;

    @IsNumber()
    @IsNotEmpty()
    price!: number;

    @IsNumber()
    @IsNotEmpty()
    stock!: number;

    @IsString()
    @IsNotEmpty()
    category!: string;
}
