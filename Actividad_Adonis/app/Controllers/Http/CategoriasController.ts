 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Categoria from "App/Models/Categoria";
import Cita from 'App/Models/Cita';

export default class CategoriasController {
    public async create({request, response}: HttpContextContract)
    {
      let input = request.all();
      await Categoria.create(input);
      return response.status(200).send({
        res: true,
        message: "pene"212341
      });
    }
  
    public async show({request, response}: HttpContextContract) 
    {
      const input = await request.all();
      if(input.txtBuscar !== undefined){
        return await Categoria.query()
                              .where('id', input.txtBuscar)
                              .orWhere('Categoria', 'like', '%' + input.txtBuscar + '%');
      }
      else{
        return await Categoria.all();
      }  
    }
    public async update({params, request, response}: HttpContextContract) 
    {
      await Categoria.query().where('id', params.id).update(request.all());
      return {
        res: true,
        message: "Cita modificada correctamente"
      }
    }
  
    public async destroy({ params, response}: HttpContextContract) {
        try {
            const categoria = await Categoria.findOrFail(params.id)
            const cat_tmp = categoria
            categoria.delete()
            response.status(200)
            response.send({
              'mensaje':'Categoria Eliminada',
              'ctegoria':cat_tmp
            })
          } catch (cita) {
            response.status(404)
            response.send({
              'mensaje':'categoria no encontrada'
            })
      
          }
        }
}
