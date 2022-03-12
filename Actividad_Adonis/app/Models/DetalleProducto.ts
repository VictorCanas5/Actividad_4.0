import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class DetalleProducto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cantidad:number

  @column()
  public producto:number

  @column()
  public ord_compra:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
