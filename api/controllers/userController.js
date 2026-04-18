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

const addUser = async (req, res) => {
  const { name, age, school, hometown } = req.body

  const { data, error } = await userModel.createUser({
    name,
    age,
    school,
    hometown,
  })

  if (error) {
    return res.status(500).json({
      error: error.message,
    })
  }

  res.json(data)
}

const editUser = async (req, res) => {
  const { id } = req.params
  const { name, age, school, hometown } = req.body

  const { data, error } = await userModel.updateUser(id, {
    name,
    age,
    school,
    hometown,
  })

  if (error) {
    return res.status(500).json({
      error: error.message,
    })
  }

  res.json(data)
}

const removeUser = async (req, res) => {
  const { id } = req.params

  const { error } = await userModel.deleteUser(id)

  if (error) {
    return res.status(500).json({
      error: error.message,
    })
  }

  res.json({
    message: 'Xóa user thành công',
  })
}

module.exports = {
  getUsers,
  addUser,
  editUser,
  removeUser,
}