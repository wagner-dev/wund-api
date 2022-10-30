import { createConnection } from 'typeorm'

const UseDatabase = async () => {
  try {
    const connection = await createConnection()
    return connection
  } catch (error) {
    throw error
  }
}

export { UseDatabase }
