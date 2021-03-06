import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Producto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre:string

  @column()
  public existencia:number

  @column()
  public precio_unitario:number

  @column()
  public descripcion:string

  @column()
  public categoria:number


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
