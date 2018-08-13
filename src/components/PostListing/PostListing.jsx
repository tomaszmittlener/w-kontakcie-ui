import React from "react";
import styled from 'styled-components'
import { Link } from 'gatsby'
import { ms } from 'src/layout/helpers'

const H1 = styled.h1`
  text-decoration: none;
  color: ${({theme:{colors}}) => colors.secondary};
  font-size: ${ms(0)};
`

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
          <Link to={post.path} key={post.title}>
            <H1>{post.title}</H1>
            <p>{post.excerpt}</p>
          </Link>
        ))}
      </div>
    );
  }
}

export default PostListing;
