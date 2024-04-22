import factory from '@adonisjs/lucid/factories'
import User from '#models/user'
import Plans from '#enums/plans.js'
import Roles from '#enums/roles.js'
import { ProfileFactory } from '#database/factories/profile_factory'

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    return {
      email: faker.internet.email(),
      password: faker.internet.password(),
      planId: Plans.FREE,
      roleId: Roles.USER,
      customerId: null,
      subscriptionId: null,
      allyId: null,
      allyToken: '',
      allyRefreshToken: '',
    }
  })
  .relation('profile', () => ProfileFactory)
  .build()
