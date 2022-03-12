import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cita from 'App/Models/Cita';

export default class CitasController {

  public async create({request, response}: HttpContextContract)
  {
    const descripcion=request.input('descripcion')
    const fecha=request.input('fecha_cita')
    const hora=request.input('hora_cita')
    const usuario=request.input('usuario')

    const cita=new Cita()

    cita.descripcion=descripcion
    cita.fecha_cita=fecha
    cita.hora_cita=hora
    cita.usuario=usuario

    await cita.save()
    response.json({cita})
  }

  public async show({ response}: HttpContextContract) 
  {
    const citas = await Cita.all()
    response.status(200)
    response.send({
      'citas':citas
    })
  }

  public async update({params, request, response}: HttpContextContract) 
  {
    await Cita.query().where('id', params.id).update(request.all());
    return {
      res: true,
      message: "Cita modificada correctamente"
    }
  }

  public async destroy({ params,response}: HttpContextContract) {
    try {
      const cita = await Cita.findOrFail(params.id)
      const cit_tmp = cita
      cita.delete()
      response.status(200)
      response.send({
        'mensaje':'Cita Eliminada',
        'cita':cit_tmp
      })
    } catch (cita) {
      response.status(404)
      response.send({
        'mensaje':'Cita no encontrada'
      })
    }
  }
}
