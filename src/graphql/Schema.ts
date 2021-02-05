import { gql } from 'apollo-server-express';

const Schema = gql`
  enum Result {
    error
    warning
    success
  }
  # Dependendency 'orm/schema.prisma'{model Brand}
  type Brand {
    id: Int
    url: String!
    email: String!
    created: String
    updated: String
    avgTimeStory: Float
    avgAllTimeStory: Float
  }
  # All returned types must have in Response
  type Response {
    brand: Brand
  }
  input ParamsBrand {
    url: String!
    email: String!
  }
  type Query {
    getBrands: [Brand]
  }
  type Mutation {
    postBrand(brand: ParamsBrand!): Response!
  }
`;

export default Schema;
