import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'plans'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title', 200).notNullable().unique()
      table.text('description').notNullable().defaultTo('')
      table.integer('price').notNullable().defaultTo(0)
      table.string('stripe_id').nullable().unique()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
