import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { WeatherModule } from './weather/weather.module'

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${process.env.DB_HOST || '127.0.0.1:27017'}/${process.env.DB_NAME || 'weather-api'}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    WeatherModule,
  ],
})
export class AppModule { }
