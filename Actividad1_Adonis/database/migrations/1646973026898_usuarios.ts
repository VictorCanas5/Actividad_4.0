import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Usuarios extends BaseSchema {
  protected tableName = 'usuarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.string('nombre').notNullable()
      table.string('ap_materno').notNullable()
      table.string('ap_paterno').notNullable()
      table.string('dirección').notNullable()
      table.date('fecha_nac').notNullable()
      table.string('correo').unique().notNullable()
      table.string('contraseña').notNullable()
      table.integer('telefono')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
