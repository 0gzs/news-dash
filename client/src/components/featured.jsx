import React, { useEffect } from 'react'
import './featured.scss'

const Featured = ({ article }) => {

  useEffect(() => {
    console.log(article)
  }, [article])

  return (
    <div className='featured-container'>

      <div className="article-wrapper">
        <div className="article-image">
          <img src={article.urlToImage} alt={article.title} />
        </div>
        <div className="article-content">
          <h2><a href={article.url}>{article.title}</a></h2>
          <p>{article.description}</p>
          <p className='source'>Source: {article.source && article.source.name}</p>
        </div>
      </div>

    </div>
  )
}

export default Featured
