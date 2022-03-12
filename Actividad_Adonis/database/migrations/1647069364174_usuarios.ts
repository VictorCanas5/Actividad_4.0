import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Usuarios extends BaseSchema {
  protected tableName = 'usuarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre',30).notNullable()
      table.string('ap_paterno',15).notNullable()
      table.string('ap_materno',15).notNullable()
      table.string('direccion',30).notNullable()
      table.date('fecha_nac').notNullable()
      table.string('correo',120).unique().notNullable()
      table.string('contraseña',15).notNullable()
      table.integer('telefono').notNullable()
      table.string('recordar_token').notNullable()
      table.integer('rol_usuario').unsigned().references('id').inTable('rol_usuarios')
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
