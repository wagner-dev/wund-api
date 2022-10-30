import express from 'express'
import { UseLoaders } from './loaders'

const app = express()

UseLoaders(app)

export default app
