/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/login', async ({ auth, request, response }) => {

  const email = request.input('correo')
  const password = request.input('contraseña')

  try {
    const token = await auth.use('api').attempt(email, password)
    return token
  } catch {
    return response.badRequest('Credenciales invalidas')
  }
})


//Citast
Route.get('/mostrar','CitasController.show').as('citas')
Route.post('insertar','CitasController.create').as('insert')
Route.delete('/eliminar/:cve_cita','CitasController.destroy')
Route.put('modificar/:id','CitasController.update')

//Usuario
Route.post('/insertarU','UsuariosController.create').as('insertU')
Route.get('/mostrarU','UsuariosController.show')