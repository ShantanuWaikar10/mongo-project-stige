const express = require('express');
const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.get('/', TaskController.index)
router.post('/show', TaskController.show)
router.post('/store', TaskController.store)
router.post('/update', TaskController.update)
// router.post('/delete', TaskController.destroy)

module.exports = router