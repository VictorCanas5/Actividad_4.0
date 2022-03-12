import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Publicacione extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public titulo_pub:string

  @column()
  public imagen:string

  @column()
  public categoria:string

  @column()
  public hora_pub:DateTime

  @column()
  public fecha_pub:DateTime

  @column()
  public contendio:string

  @column()
  public contenido:string 

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
