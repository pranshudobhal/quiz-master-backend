const { User } = require('../models/user.model');

/**
 * TODO:
 * Functionality has not been implemented
 */

const getUser = async (req, res) => {
  try {
    /**
     * Find user details, see if its reqd
     * Take out find user in a middleware
     */
    const user = await User.find({});
    res.json({ success: true, user });
  } catch (error) {
    res.json({ success: false, message: 'Error retrieving quizzes', errorMessage: error.message });
  }
};

const updateUserData = async (req, res) => {
  try {
    /**
     * Take user and the data to be updated
     * Update the data in BE
     */
    const user = await User.find({});
    res.json({ success: true, user });
  } catch (error) {
    res.json({ success: false, message: 'Error retrieving quizzes', errorMessage: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    /**
     * Delete the user from BE
     */
    const user = await User.find({});
    res.json({ success: true, user });
  } catch (error) {
    res.json({ success: false, message: 'Error retrieving quizzes', errorMessage: error.message });
  }
};

module.exports = { getUser, updateUserData, deleteUser };
