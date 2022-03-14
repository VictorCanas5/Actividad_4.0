// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Response } from '@adonisjs/core/build/standalone';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import Usuario from "App/Models/Usuario"

export default class UsuariosController {

    public async create({request, response}: HttpContextContract)
    {
      const correo=request.input('email')
      const contraseña=request.input('password')
      const rol=request.input('rol_usuario')
      const recordar=request.input('remember_me_token')
  
      const usuari=new Usuario()
  
      usuari.email=correo
      usuari.password=contraseña
      usuari.rol_usuario=rol
      usuari.remember_me_token=recordar
  
      await usuari.save()
      response.json({usuari})
    }
    public async show({ }: HttpContextContract) 
    {
      const users = await Database.query().from('usuarios').select('*')
      return users
    }

    public async store ({ request, response }) {
      const userData = request.only(['email', 'password'])
      const user = await Usuario.create(userData)

       return response.created({
         status:true,
         data: user
       })
    }
        
}
