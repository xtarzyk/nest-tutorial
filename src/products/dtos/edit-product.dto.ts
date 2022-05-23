import { IsNumber } from "class-validator";

export class EditProductDto {
    @IsNumber({}, { message: 'The price must a number'} )
    price: number
}