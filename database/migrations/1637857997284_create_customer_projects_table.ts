import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateProjectCustomerTables extends BaseSchema {
  protected tableName = 'customer_projects'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('customer_id').unsigned().notNullable().references('id').inTable('customers')
      table.integer('project_id').unsigned().notNullable().references('id').inTable('projects')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
