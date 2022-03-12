import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import RolUsuario from './RolUsuario'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column()
  public ap_paterno: string

  @column()
  public ap_materno: string

  @column()
  public direccion: string

  @column()
  public fecha_nac: DateTime

  @column()
  public correo: string

  @column({ serializeAs: null })
  public contraseña: string

  @column()
  public telefono: number

  @column()
  public rol_usuario:number
  
  @column()
  public recordar_token: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
}

