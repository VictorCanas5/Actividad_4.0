import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Users from 'App/Models/Users'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    const uniqueKey = 'email'

    await Users.updateOrCreateMany(uniqueKey,[
      {
        email:'roquerivaldo@gmail.com',
        password:'admin'
      }
    ])
  }
}
