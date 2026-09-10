import {IsNotEmpty, IsString, Length} from "class-validator"
export class CreatePostDto {
    
    @IsNotEmpty()
    @IsString()
    @Length(1,150)
    title!:string

    @IsNotEmpty()
    @IsString()
    @Length(1,150)
    content!:string
}