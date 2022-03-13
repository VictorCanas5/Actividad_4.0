// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
 async login({request,auth,response})
 {
    const {correo, contraseña} = request.only(['correo','contraseña'])
    const token = await auth.attempt(contraseña,correo)

    return response.ok(token)
 }
}
