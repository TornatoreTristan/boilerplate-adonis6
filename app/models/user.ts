import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare email: string

  @column()
  declare password: string

  @column()
  declare planId: number

  @column()
  declare roleId: number

  @column()
  declare customerId: string | null

  @column()
  declare subscriptionId: string | null

  @column()
  declare allyId: string | null

  @column()
  declare allyToken: string | null

  @column()
  declare allyRefreshToken: string

  @column()
  declare allyExpiresIn: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @column.dateTime()
  declare lastLogin: DateTime | null
}
