import { BaseSchema } from '@adonisjs/lucid/schema'
import Plans from '#enums/plans.js'
import Roles from '#enums/roles.js'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(this.db.rawQuery('gen_random_uuid()').knexQuery)

      // basics infomration about the user
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.string('customer_id').nullable()
      table.string('subscription_id').nullable()

      // Ally Oauth if you want to use it
      table.text('ally_id').nullable()
      table.text('ally_token').nullable()
      table.text('ally_refresh_token').nullable()
      table.timestamp('ally_token_expires_at').nullable()

      // user role and plan
      table.integer('role_id').unsigned().references('roles.id').defaultTo(Roles.USER).notNullable()
      table.integer('plan_id').unsigned().references('plans.id').defaultTo(Plans.FREE).notNullable()

      // meta information about the user
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
      table.timestamp('last_login').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
