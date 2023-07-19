import { gql } from '@apollo/client'

export const Posts = gql`
query Blogs {
  blogs {
    createdAt
    excerpt
    id
    publishedAt
    slug
    tags
    title
    updatedAt
    featureImage {
      url
    }
    author {
      name
      twitterUrl
      linkedinurl
      facebookUrl
      profileImage {
        url
      }
      designation
    }
    content {
      html
    }
  }
}

`
export const post = gql`
query Blog($slug:String!) {
  blog(where: {slug: $slug}) {
    createdAt
    excerpt
    id
    publishedAt
    slug
    tags
    title
    updatedAt
    featureImage {
      url
    }
    author {
      name
      twitterUrl
      linkedinurl
      facebookUrl
      profileImage {
        url
      }
      designation
    }
    content {
      html
    }
  }
}
`