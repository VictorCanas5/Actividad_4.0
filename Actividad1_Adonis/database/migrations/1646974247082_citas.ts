import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Citas extends BaseSchema {
  protected tableName = 'citas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cve_cita')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
       table.string('descripcion').notNullable()
       table.date('fecha_crea').notNullable()
       table.date('fecha_cita').notNullable()
       table.time('hora_cita').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
