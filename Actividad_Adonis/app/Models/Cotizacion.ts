import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cotizacion extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public detalle_concepto: string

  @column()
  public precio: number

  @column()
  public tipo_serv: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
