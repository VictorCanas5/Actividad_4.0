// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Usuario from "App/Models/Usuario";

export default class AuthController {
   public async login({ request, response, auth, session }: HttpContextContract) {
      // grab uid and password values off request body
      const { uid, password } = request.only(['uid', 'password'])
  
      try {
        // attempt to login
        await auth.attempt(uid, password)
      } catch (error) {
        // if login fails, return vague form message and redirect back
        session.flash('form', 'Your username, email, or password is incorrect')
        return response.redirect().back()
      }
  
      // otherwise, redirect to home page
      return response.redirect('/')
    }
  
    public async logout({ response, auth }: HttpContextContract) {
      // logout the user
      await auth.logout()
  
      // redirect to login page
      return response.redirect().toRoute('auth.login.show')
    }
}
