import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Psychologist } from '../../database/entity/index'
import {
  statusIncorrectRequest,
  statusNoContent,
  statusOk,
  statusServerError
} from '../../helpers'

const IdIsValid = (id: string ) => {
  const idIsValid = id.length == 24

  if(idIsValid){
    return true
  }
  throw statusIncorrectRequest('Psicólogo(a) inválido(a)')
}

const ExistsPsychologist = (psychologist: Psychologist) => {
  if(psychologist){
    return true
  }
  throw statusNoContent('Psicólogo(a) não encontrado(a)')
}

const GetPsychologist = async (request: Request, response: Response) => {
  const { id } = request.params
  try{
    IdIsValid(id)
    const psychologist = await getRepository(Psychologist).findOneById(id)
    ExistsPsychologist(psychologist)

    response.json( statusOk('ok', psychologist ))
  }
  catch(responseError){
    if(responseError.code){
      return response.json(responseError)
    }
    response.json( statusServerError() )
  }
}

export default GetPsychologist
