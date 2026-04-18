// api/controllers/userController.js

const userModel = require('../models/userModel')

const getUsers = async (req, res) => {
  const { data, error } = await userModel.getAllUsers()

  if (error) {
    return res.status(500).json({
      error: error.message,
    })
  }

  res.json(data)
}

const getUserByMSSV = async (req, res) => {
  const { mssv } = req.params

  const { data, error } = await userModel.getUserByMSSV(mssv)

  if (error) {
    return res.status(500).json({
      error: error.message,
    })
  }

  res.json(data)
}

const addUser = async (req, res) => {
  const { name, age, school, hometown, mssv } = req.body

  const { data, error } = await userModel.createUser({
    name,
    age,
    school,
    hometown,
    mssv,
  })

  if (error) {
    return res.status(500).json({
      error: error.message,
    })
  }

  res.json(data)
}

module.exports = {
  getUsers,
  getUserByMSSV,
  addUser,
}