import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Publicaciones extends BaseSchema {
  protected tableName = 'publicaciones'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('titulo_pub').notNullable()
      table.string('imagen').notNullable()
      table.string('categoria').notNullable()
      table.time('hora_pub').notNullable()
      table.date('fecha_pub').notNullable()
      table.text('contendio').notNullable()
      table.enu('contenido',['informativo','consejos','sugerencias']).notNullable()
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
