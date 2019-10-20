import { IsNotEmpty, IsNumber, IsOptional, IsDateString } from 'class-validator'

export class CreateWeatherDto {
    @IsNotEmpty()
    @IsNumber()
    readonly temperature: number

    @IsOptional()
    @IsDateString()
    readonly date: Date
}
