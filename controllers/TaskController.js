const { response } = require('express')
const Task = require('../models/Task')

const index = (req, res, next) => {
    Task.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured'
        })
    })
}

const show = (req, res, next) => {
    let taskID = req.body.taskID
    Task.findById(taskID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured'
        })
    })
}

const store = (req, res, next) => {
    let task = new Task({
        description: req.body.description,
        completed: req.body.completed
    })
    task.save()
    .then(response => {
        res.json({
            message: 'Task Added Successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured'
        })
    })
}

const update = (req, res, next) => {
    let taskID = req.body.taskID

    let updatedData = {
        description: req.body.description,
        completed: req.body.completed
    }
    Task.findByIdAndUpdate(taskID, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'Task updated successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured'
        })
    })

    // const destroy = (req, res, next) => {
    //     let taskID = req.body.taskID
    //     Task.findByIdAndRemove(taskID)
    //     .then(() => {
    //         req.json({
    //             message: 'Task deleted successfully!'
    //         })
    //     })
    //     .catch(error => {
    //         req.json({
    //             message: 'An error Occured!'
    //         })
    //     })
    // }
}

module.exports = {
    index, show, store, update
}