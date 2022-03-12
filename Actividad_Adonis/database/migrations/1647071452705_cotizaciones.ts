import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cotizaciones extends BaseSchema {
  protected tableName = 'cotizaciones'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('detalle_concepto',50).notNullable()
      table.float('precio',8,2).notNullable()
      table.enu('tipo_serv',['mantenimiento','reparacion']).notNullable()

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
