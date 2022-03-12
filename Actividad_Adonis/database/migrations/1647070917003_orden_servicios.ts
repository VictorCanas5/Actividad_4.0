import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OrdenServicios extends BaseSchema {
  protected tableName = 'orden_servicios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('desc_problema').notNullable()
      table.string('especificacion_equipo').notNullable()
      table.string('diagnostico').defaultTo("no aprobado").notNullable()
      table.integer('citas').unsigned().references('cve_cita').inTable('citas')
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
