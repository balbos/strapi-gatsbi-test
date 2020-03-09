import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/layout"

export const query = graphql`
  query ArticleQuery($id: String!) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      content
      published_at
    }
  }
`

const Article = ({ data }) => {
  const article = data.strapiArticle
  return (
    <Layout>
      <div>
          <h1>{article.title}</h1>

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <ReactMarkdown source={article.content} />
            <p>
              <Moment format="MMM Do YYYY">{article.published_at}</Moment>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article
