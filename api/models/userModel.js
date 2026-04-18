// api/models/userModel.js

const supabase = require('../supabase')

const getAllUsers = async () => {
  return await supabase
    .from('users')
    .select('*')
}

const getUserByMSSV = async (mssv) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('MSSV', mssv)

  if (error) return { data: null, error }

  return { data: data?.[0] || null, error: null }
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