const router = require('express').Router()
const {Picture} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const pictures = await Picture.findAll()
    res.json(pictures)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const picture = await Picture.findByPk(req.params.id)
    if (!picture) {
      const error = Error('Sorry we currently do not have that image listed')
      error.status = 404
      return next(error)
    } else {
      res.json(picture)
    }
  } catch (error) {
    next(error)
  }
})
