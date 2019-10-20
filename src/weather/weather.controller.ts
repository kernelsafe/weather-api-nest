import { Controller, Get, Param, Delete, Post, Body } from '@nestjs/common'
import { WeatherService } from './weather.service'
import { Weather } from './interfaces/weather.interface';
import { CreateWeatherDto } from './dto/create-weather.dto';

@Controller('weather')
export class WeatherController {
    constructor(private readonly weatherService: WeatherService) {

    }

    @Get()
    async getAll(): Promise<Weather[]> {
        return await this.weatherService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id') id: string): Promise<Weather> {
        return await this.weatherService.getOne(id)
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Weather> {
        return await this.weatherService.delete(id)
    }

    @Post()
    async create(@Body() weatherDto: CreateWeatherDto): Promise<Weather> {
        return await this.weatherService.create(weatherDto)
    }
}
