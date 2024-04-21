import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Plan from '#models/plan'
import Plans from '#enums/plans.js'

export default class extends BaseSeeder {
  async run() {
    await Plan.createMany([
      {
        id: Plans.FREE,
        title: 'Free',
        stripeId: 'stripe_xxx1',
        price: 0,
        description: 'Free plan to use the app',
      },
      {
        id: Plans.BASIC,
        title: 'Basic',
        stripeId: 'stripe_xxx2',
        price: 10,
        description: 'Add basics features to your account',
      },
      {
        id: Plans.PREMIUM,
        title: 'Premium',
        stripeId: 'stripe_xxx3',
        price: 20,
        description: 'Unlock all features of the app',
      },
    ])
  }
}
