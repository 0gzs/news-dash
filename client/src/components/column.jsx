import React from 'react'
import './column.scss'

const Column = ({ articles }) => {
  return (
    <div className="column">
      {articles.map(article => (
        <div className="column-article" key={article.url}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Column
