// api/models/userModel.js

const supabase = require('../supabase')

const getAllUsers = async () => {
  return await supabase
    .from('users')
    .select('*')
}

const getUserByMSSV = async (mssv) => {
  return await supabase
    .from('users')
    .select('*')
    .eq('mssv', mssv)
    .single()
}

const createUser = async (userData) => {
  return await supabase
    .from('users')
    .insert([userData])
    .select()
}

const updateUser = async (id, userData) => {
  return await supabase
    .from('users')
    .update(userData)
    .eq('id', id)
    .select()
}

const deleteUser = async (id) => {
  return await supabase
    .from('users')
    .delete()
    .eq('id', id)
}

module.exports = {
  getAllUsers,
  getUserByMSSV,
  createUser,
  updateUser,
  deleteUser,
}