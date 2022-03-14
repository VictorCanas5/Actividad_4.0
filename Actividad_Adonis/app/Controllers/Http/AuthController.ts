// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Usuario from "App/Models/Usuario";

export default class AuthController {
  public async login ({request, response, auth }){
    const  {email, password}  = request.only(['email', 'password'])
    const token = await auth.attenpt(email, password)
      return response.ok(token)
  }
}
