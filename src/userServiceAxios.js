// userService.js
import axios from 'axios'

// Base URL for the API
const API_URL = 'https://jsonplaceholder.typicode.com/users'

// Create an axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

/**
 * Logs the response details and returns the response data
 * @param {AxiosResponse} response - The Axios Response object
 * @param {string} operation - The type of operation (GET, POST, PUT, etc.)
 * @returns {any} The response data
 */
const logResponse = (response, operation) => {
  console.group(`API ${operation} - ${response.config.url}`)
  console.log('Status:', response.status)
  console.log('Status Text:', response.statusText)
  console.log('Headers:', response.headers)
  console.log('Data:', response.data)
  console.groupEnd()

  return response.data
}

/**
 * Handles and logs errors from API calls
 * @param {Error} error - The error object from Axios
 * @param {string} operation - The type of operation (GET, POST, PUT, etc.)
 * @throws {Error} A new error with a custom message
 */
const handleError = (error, operation) => {
  console.error(`Failed to ${operation}:`, error)
  if (error.response) {
    console.error('Response data:', error.response.data)
    console.error('Response status:', error.response.status)
    console.error('Response headers:', error.response.headers)
  } else if (error.request) {
    console.error('No response received:', error.request)
  } else {
    console.error('Error message:', error.message)
  }
  throw new Error(`Failed to ${operation}`)
}

/**
 * Fetches all users from the API
 * @returns {Promise<any>} The fetched user data
 * @throws {Error} If the fetch operation fails
 */
export const fetchUsers = async () => {
  try {
    const response = await api.get('/')
    return logResponse(response, 'GET')
  } catch (error) {
    handleError(error, 'fetch users')
  }
}

/**
 * Creates a new user via the API
 * @param {Object} userData - The data for the new user
 * @returns {Promise<any>} The created user data
 * @throws {Error} If the create operation fails
 */
export const createUser = async (userData) => {
  try {
    const response = await api.post('/', userData)
    return logResponse(response, 'POST')
  } catch (error) {
    handleError(error, 'create user')
  }
}

/**
 * Updates an existing user via the API
 * @param {number|string} userId - The ID of the user to update
 * @param {Object} userData - The updated user data
 * @returns {Promise<any>} The updated user data
 * @throws {Error} If the update operation fails
 */
export const updateUser = async (userId, userData) => {
  try {
    const response = await api.put(`/${userId}`, userData)
    return logResponse(response, 'PUT')
  } catch (error) {
    handleError(error, 'update user')
  }
}
