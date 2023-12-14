const typeDefs = 
`
type User {
 _id: ID!
  username: String!
  posts: [Post]
}

type Auth {
  token: String
  user: User
}

type Post {
  _id: ID!
  postAuthor: String!
  postText: String!
  dateCreated: String,
  image: String,
  comments: [Comment]
}

type Comment {
  _id: ID!
  commentAuthor: String
  commentText: String!
  date: String
}

type Query {
  users: [User]
  posts: [Post]
}

type Mutation {
  addUser(username: String!, password: String!): Auth
  login(username: String!, password: String!): Auth
  addPost(postText: String!, postAuthor: String!): Post
  addImage(postId: ID!, image: String!): Post
  removePost(postId: ID!): Post
  addComment(postId: ID!, commentText: String!, commentAuthor: String): Comment
  removeComment(commentId: ID!): Comment
}
`;


module.exports = typeDefs;


