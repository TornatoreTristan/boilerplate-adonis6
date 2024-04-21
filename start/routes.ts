import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home', { version: 6, versionBoilerplate: 'v0.1.0' })
