import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Citas extends BaseSchema {
  protected tableName = 'citas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cve_cita').primary()
      table.string('descripcion').notNullable()
      table.date('fecha_cita').unique().notNullable()
      table.time('hora_cita').notNullable()
      table.integer('usuario').unsigned().references('id').inTable('usuarios')

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
