const statusOk = (message: string = 'ok', data: any = null) => ({
  data,
  message,
  code: 200,
  timestamp: new Date()
})

const statusCreated = (message: string = 'O item foi criado com sucesso', data: any = null) => ({
  data,
  message,
  code: 201,
  timestamp: new Date()
})

const statusNoContent = (message: string = 'Nenhum item encontrado', data: any = null) => ({
  data,
  message,
  code: 204,
  error: 'no-content',
  timestamp: new Date()
})

const statusIncorrectRequest = (message: string = 'Campo(s) inválido(s)', data: any = null) => ({
  data,
  message,
  code: 400,
  error: 'incorrect-request',
  timestamp: new Date()
})

const statusUnauthorized = (message: string = 'Não autorizado') => ({
  code: 401,
  message,
  error: 'unauthorized',
  timestamp: new Date()
})

const statusNotFound = (message: string = 'O item não foi encontrado') => ({
  message,
  code: 404,
  error: 'not-found',
  timestamp: new Date()
})

const statusUnprocessableEntity = (message: string = 'Usuário já existente') => ({
  message,
  code: 422,
  error: 'unprocessable-entity',
  timestamp: new Date()
})

const statusTooManyRequest = (message: string = 'Você solicitou muitas requisições em um curto intervalo de tempo. Por favor, aguarde.') => ({
  message,
  code: 429,
  error: 'too-many-request',
  timestamp: new Date()
})

const statusServerError = (message: string = 'Um erro inesperado ocorreu. Aguarde alguns minutos e tente novamente. Caso o problema persista, entre em contato com os administradores do sistema.') => ({
  message,
  code: 500,
  error: 'server-error',
  timestamp: new Date()
})

export {
  statusOk,
  statusCreated,
  statusNoContent,
  statusNotFound,
  statusUnprocessableEntity,
  statusServerError,
  statusUnauthorized,
  statusTooManyRequest,
  statusIncorrectRequest
}
