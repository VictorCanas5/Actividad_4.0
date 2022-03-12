import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cita from 'App/Models/Cita';

export default class CitasController {
  public async index({}: HttpContextContract) 
  {

  }

  public async create({request, response}: HttpContextContract)
  {
    let input = request.all();
    await Cita.create(input);
    return response.status(200).send({
      res: true,
      message: "categoria creada correctamente"
    });
  }

  public async store({}: HttpContextContract) 
  {
  }

  public async show({}: HttpContextContract) {

  }
  public async update({params, request, response}: HttpContextContract) 
  {
    await Cita.query().where('id', params.id).update(request.all());
    return {
      res: true,
      message: "Cita modificada correctamente"
    }
  }

  public async destroy({ params, request, response}: HttpContextContract) {
    const cita = await Cita.findOrFail(params.id);
    await cita.delete();
    return {
      res: true,
      message: "Registro eliminado correctamente"
    }
  }
}
