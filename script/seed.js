'use strict'

const db = require('../server/db')
const {User, Picture} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const pictures = await Promise.all([
    Picture.create({
      name: 'test1',
      pictureUrl: 'https://imgur.com/a/JQCBryC',
      description: 'test test test test test'
    }),

    Picture.create({
      name: 'test2',
      pictureUrl:
        'https://media.gettyimages.com/photos/an-alligator-is-seen-near-the-seventh-green-during-the-first-round-of-picture-id1145116174?s=612x612',
      description: 'test test test test test'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${pictures.length} pictures`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
