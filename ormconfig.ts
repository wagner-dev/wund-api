import dotenv from 'dotenv'
dotenv.config()

const {
  URL_DATABASE
} = process.env

export default {
   "type": "mongodb",
   "url": URL_DATABASE,
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/database/entity/**/*.ts"
   ],
   "migrations": [
      "src/database/migration/**/*.ts"
   ],
   "subscribers": [
      "src/database/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/database/entity",
      "migrationsDir": "src/database/migration",
      "subscribersDir": "src/database/subscriber"
   }
}
