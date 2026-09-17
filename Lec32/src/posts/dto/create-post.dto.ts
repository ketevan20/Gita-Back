import { ApiProperty } from "@nestjs/swagger"
import {IsNotEmpty, IsString, Length} from "class-validator"
export class CreatePostDto {
    @ApiProperty({ example: 'My first post' })
    @IsNotEmpty()
    @IsString()
    @Length(1,150)
    title!:string

    @ApiProperty({ example: 'Post content goes here' })
    @IsNotEmpty()
    @IsString()
    @Length(1,150)
    content!:string
}