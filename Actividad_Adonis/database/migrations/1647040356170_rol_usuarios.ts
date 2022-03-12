import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RolUsuarios extends BaseSchema {
  protected tableName = 'rol_usuarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre_rol').notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
