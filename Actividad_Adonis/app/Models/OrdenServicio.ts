import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class OrdenServicio extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public desc_problema: string

  @column()
  public especificacion_equipo: string

  @column()
  public diagnostico: string

  @column()
  public citas: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
