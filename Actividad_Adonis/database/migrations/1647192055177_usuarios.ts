import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsuariosSchema extends BaseSchema {
  protected tableName = 'usuarios'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('username',50).notNullable()
      table.string('email', 255).notNullable()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.integer('rol_usuario').unsigned().references('id').inTable('rol_usuarios')

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
