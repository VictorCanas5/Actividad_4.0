
import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, column,beforeSave } from '@ioc:Adonis/Lucid/Orm'


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
  public email: string

  @column({ serializeAs: null })
  public password: string

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


  @beforeSave()
  public static async hashPassword(user: Usuario) {
    if (user.$dirty.contrasena) {
      user.contrasena = await Hash.make(user.contrasena)
    }
  }

}

