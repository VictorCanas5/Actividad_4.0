import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DetalleProductos extends BaseSchema {
  protected tableName = 'detalle_productos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('reg_det_prod')
      table.integer('cantidad').notNullable()
      table.integer('producto').unsigned().references('cve_producto').inTable('productos')
      table.integer('ord_compra').unsigned().references('cve_orden_compra').inTable('orden_compras')
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
