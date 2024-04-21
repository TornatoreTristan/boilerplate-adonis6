import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'profiles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('first_name', 100).notNullable().defaultTo('')
      table.string('last_name', 100).notNullable().defaultTo('')
      table.string('username', 100).nullable().unique()
      table.string('avatar_url', 254).nullable().defaultTo('')
      table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
