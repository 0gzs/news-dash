import React, { useEffect, useState } from 'react'
import { fetchTopHeadlines } from './api'

const App = () => {
  const [articles, setArticles] = useState([])

  const getTopHeadlines = async () => {
    const headlines = await fetchTopHeadlines()
    localStorage.setItem('articles', JSON.stringify(headlines.articles))
    setArticles(headlines.articles)
  }

  useEffect(() => {
    if (!localStorage.getItem('headlines')) {
      getTopHeadlines()
    }
  }, [])

  return (
    <>
    </>
  )
}

export default App
