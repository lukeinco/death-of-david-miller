import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
query Query {
  posts {
    _id
    dateCreated
    postAuthor
    postText
    comments {
      _id
      commentAuthor
      commentText
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
