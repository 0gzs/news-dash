const axios = require('axios')

exports.checkImage = async (req, res) => {
  const { imageUrl } = req.body

  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' })

    if (response.status === 200 && response.headers['content-type'].includes('image')) {
      res.json({ isValid: true })
    } else {
      res.json({ isValid: false })
    }
  } catch (error) {
    res.json({ isValid: false })
  }
}
