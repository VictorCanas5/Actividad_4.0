import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OrdenCompras extends BaseSchema {
  protected tableName = 'orden_compras'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cve_orden_compra').primary()
      table.date('fecha_pedido').notNullable()
      table.string('tipo_pago',15).notNullable()
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
