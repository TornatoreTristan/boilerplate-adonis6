import Role from '#models/role'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Roles from '#enums/roles.js'

export default class extends BaseSeeder {
  async run() {
    await Role.createMany([
      {
        id: Roles.USER,
        title: 'User',
      },
      {
        id: Roles.ADMIN,
        title: 'Admin',
      },
    ])
  }
}
