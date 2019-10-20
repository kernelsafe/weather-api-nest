import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Weather } from './interfaces/weather.interface'
import { CreateWeatherDto } from './dto/create-weather.dto'

@Injectable()
export class WeatherService {
    constructor(@InjectModel('Weather') private readonly weatherModel: Model<Weather>) { }

    async getAll(): Promise<Weather[]> {
        return this.weatherModel.find().sort({date: 'desc'}).exec()
    }

    async getOne(id: string): Promise<Weather> {
        const res = await this.weatherModel.findById(id)
        if (res) {
            return res
        }
        throw new NotFoundException()
    }

    async create(weather: CreateWeatherDto): Promise<Weather> {
        const newTemp = new this.weatherModel(weather)
        return newTemp.save()
    }

    async delete(id: string): Promise<Weather> {
        const res = await this.weatherModel.findByIdAndDelete(id)
        if (res) {
            return res
        }
        throw new NotFoundException()
    }
}
