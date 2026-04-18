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

const getUserInfo = async (req, res) => {
  const { mssv } = req.params

  const { data, error } = await userModel.getUserByMSSV(mssv)

  if (error) {
    return res.status(500).json({
      error: error.message,
    })
  }

  if (!data) {
    return res.status(404).json({
      message: 'Không tìm thấy sinh viên',
    })
  }

  res.json(data)
}

const addUser = async (req, res) => {
  const { name, age, school, hometown, mssv, image, description } = req.body

  const { data, error } = await userModel.createUser({
    name,
    age,
    school,
    hometown,
    mssv,
    image,
    description,
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

  const { data, error } = await userModel.updateUser(id, req.body)

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
  getUserInfo,
  addUser,
  editUser,
  removeUser,
}