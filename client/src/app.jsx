import React, { useEffect, useState } from 'react'
import { fetchTopHeadlines } from './api'

import Featured from './components/featured'
import Slider from './components/slider'
import Column from './components/column'

const App = () => {
  const [articles, setArticles] = useState([])
  const [sliderArticles, setSliderArticles] = useState([])
  const [featuredArticle, setFeaturedArticle] = useState({})
  const [columnArticles, setColumnArticles] = useState([])
  const [loading, setLoading] = useState(true)

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

  useEffect(() => {
    if (articles.length) {
      setFeaturedArticle(articles[Math.floor(Math.random() * articles.length)])
      setSliderArticles(articles.slice(0, 5))
      setColumnArticles(articles.slice(5, 10))
    }
    setLoading(false)
  }, [articles])

  if (loading) return <h1>Loading...</h1>

  return (
    <>
      <header>
        <i className="fa-solid fa-newspaper"></i>
        <h2>News Digest</h2>

        <button onClick={getTopHeadlines}>Log in</button>
      </header>
      <div id="container">
        <Column articles={columnArticles} />
        <Featured article={featuredArticle} />
        <Slider articles={sliderArticles} />
      </div>
    </>
  )
}

export default App
