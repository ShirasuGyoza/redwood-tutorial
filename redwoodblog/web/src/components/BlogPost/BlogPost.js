import { Link, routes } from '@redwoodjs/router'

const BlogPost = ({ post }) => {
  return (
    <article>
      <h1>
        <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
      </h1>
      <time>Posted at: {post.createdAt}</time>
      <p>{post.body}</p>
    </article>
  )
}

export default BlogPost
