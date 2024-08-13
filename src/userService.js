// userService.js

// Base URL for the API
const API_URL = 'https://jsonplaceholder.typicode.com/users'

/**
 * Logs the response details and returns the response data
 * @param {Response} response - The fetch Response object
 * @param {string} operation - The type of operation (GET, POST, PUT, etc.)
 * @returns {Promise<any>} The response data
 */
const logResponse = async (response, operation) => {
  // Get the content type of the response
  const contentType = response.headers.get('content-type')
  let data

  // Parse the response body based on content type
  if (contentType && contentType.indexOf('application/json') !== -1) {
    data = await response.json()
  } else {
    data = await response.text()
  }

  // Log the response details in a collapsible group in the console
  console.group(`API ${operation} - ${response.url}`)
  console.log('Status:', response.status)
  console.log('Status Text:', response.statusText)
  console.log('Headers:', Object.fromEntries(response.headers.entries()))
  console.log('Data:', data)
  console.groupEnd()

  return data
}

/**
 * Fetches all users from the API
 * @returns {Promise<any>} The fetched user data
 * @throws {Error} If the fetch operation fails
 */
export const fetchUsers = async () => {
  const response = await fetch(API_URL)
  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }
  return logResponse(response, 'GET')
}

/**
 * Creates a new user via the API
 * @param {Object} userData - The data for the new user
 * @returns {Promise<any>} The created user data
 * @throws {Error} If the create operation fails
 */
export const createUser = async (userData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  if (!response.ok) {
    throw new Error('Failed to create user')
  }
  return logResponse(response, 'POST')
}

/**
 * Updates an existing user via the API
 * @param {number|string} userId - The ID of the user to update
 * @param {Object} userData - The updated user data
 * @returns {Promise<any>} The updated user data
 * @throws {Error} If the update operation fails
 */
export const updateUser = async (userId, userData) => {
  const response = await fetch(`${API_URL}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  if (!response.ok) {
    throw new Error('Failed to update user')
  }
  return logResponse(response, 'PUT')
}
