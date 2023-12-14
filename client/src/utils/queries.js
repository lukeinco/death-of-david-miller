import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
query getPosts {
  posts {
    image
    _id
    postAuthor
    postText
    dateCreated
    comments {
      _id
      commentText
      commentAuthor
      date
    }
  }
}
`;



export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
    post(postId: $postId) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
