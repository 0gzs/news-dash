import axios from "axios"

axios.defaults.baseURL = "https://newsapi.org/v2"

axios.defaults.headers.common = {
  "X-API-Key": process.env.NEWS_API_KEY,
}

export const fetchTopHeadlines = async () => {
  const response = await axios.get("/top-headlines?country=us")
  return response.data
}
