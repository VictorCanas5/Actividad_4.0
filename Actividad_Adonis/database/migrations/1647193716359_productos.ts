import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Productos extends BaseSchema {
  protected tableName = 'productos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cve_producto').primary()
      table.string('nombre',20).notNullable()
      table.integer('existencia').notNullable()
      table.float('precio_unitario',8,2).notNullable
      table.text('descripcion').notNullable()
      table.integer('categoria').unsigned().references('id_cat').inTable('categorias')
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
