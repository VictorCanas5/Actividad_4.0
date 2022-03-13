import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cita extends BaseModel {
  @column({ isPrimary: true })
  public cve_cita: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column()
  public descripcion:string

  @column()
  public fecha_cita:Date

  @column()
  public hora_cita:DateTime

  @column()
  public usuario: number

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}
