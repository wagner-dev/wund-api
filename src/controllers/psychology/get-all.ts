import { Request, Response } from 'express'
import { Psychologist } from '../../database/entity/index'
import { getRepository } from 'typeorm'
import {
  statusNoContent,
  statusOk,
  statusServerError
} from '../../helpers'
import {
  PSYCHOLOGISTS_LIMIT_DEFAULT
} from '../../utils/constants'

interface QueryParams {
  limit?: number
}
const GetPsychologists = async (request: Request, response: Response) => {
  const {
    limit = PSYCHOLOGISTS_LIMIT_DEFAULT
  }: QueryParams = request.query
  try{
    const limitCurrent = Number(limit)

    const psychologists = await getRepository(Psychologist).find({
      take: limitCurrent
    })

    const psychologistsIsEmpty = !psychologists.length
    if(psychologistsIsEmpty){
      return response.json( statusNoContent('Nenhum(a) psicólogo(a) foi encontrado(a)', []) )
    }
    response.json( statusOk('ok', psychologists) )
  }
  catch{
    response.json( statusServerError() )
  }
}

export default GetPsychologists
