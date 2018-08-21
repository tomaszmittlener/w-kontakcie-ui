import React, {Fragment} from 'react'
import Link from '../../components/Link'
import {ParagraphText} from '../../components/Text'
import {H2} from '../../components/Headings'

class Index extends React.Component {
  getPostList() {
    const postList = []
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      })
    })
    return postList
  }
  render() {
    const postList = this.getPostList()
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
          <Fragment key={post.title}>
            <Link to={post.path}>
              <H2>{post.title}</H2>
            </Link>
            <ParagraphText>{post.excerpt}</ParagraphText>
          </Fragment>
        ))}
      </div>
    )
  }
}

export default Index
