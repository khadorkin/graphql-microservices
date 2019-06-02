import { gql } from 'apollo-server';

const post = gql`
  # A post entry
  type Post @key(fields: "id") {
    id: Int!
    # The posts' title
    title: String
    # The posts' actual content
    content: String
    author: User
  }

  type Identifier {
    # a unique hash to identify the running node process
    hash: String
  }

  # Queries from post service
  type Query {
    # List of all our posts
    allPosts: [Post]
    # A single post
    post(id: Int!): Post
    # A single post
    postsByAuthorId(authorId: Int!): [Post]
    # infos identifying running process
    identifier: Identifier
  }

  extend type User @key(fields: "id") {
    id: Int! @external
    posts: [Post]
  }
`;

export default post;
