import factory from '@adonisjs/lucid/factories'
import Profile from '#models/profile'
import { UserFactory } from '#database/factories/user_factory'

export const ProfileFactory = factory
  .define(Profile, async ({ faker }) => {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      avatarUrl: faker.image.avatar(),
    }
  })
  .relation('user', () => UserFactory)
  .build()
