import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class OrdenCompra extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public fecha_pedido: Date

  @column()
  public tipo_pago: string

  @column()
  public usuario: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
