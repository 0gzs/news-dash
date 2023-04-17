import axios from 'axios'

const apiUrl = process.env.API_URL

export const checkImage = async imageUrl => {
  try { 
    const response = await axios.post(`${apiUrl}/api/checkImage`, { imageUrl })

    if (response.data.isValid) return true
    return false
  } catch (err) {
    return false
  }
}
