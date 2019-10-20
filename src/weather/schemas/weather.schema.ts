import * as mongoose from 'mongoose'

export const WeatherSchema = new mongoose.Schema({
    temperature: { type: Number, required: true },
    date: { type: Date, default: Date.now },
})
