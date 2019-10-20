import { Document } from 'mongoose'

export interface Weather extends Document {
    readonly temperature: number
    readonly date: Date
}