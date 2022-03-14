import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import Usuario from './Usuario'

export default class usuarios extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public remember_me_token: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static assignUuid(user:usuarios){
    user.secure_id = uuidv4()
  }

  @beforeSave()
  public static async hashPassword (users: usuarios) {
    if (users.$dirty.password) {
      users.password = await Hash.make(users.password)
    }
  }
}
