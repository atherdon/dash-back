import { gql } from 'apollo-server-express';

const Schema = gql`
  # Dependendency 'orm/schema.prisma'{model Brand}
  type Brand @cacheControl(maxAge: 1000) {
    id: Int
    url: String!
    email: String!
    created: String
    updated: String
    avgTimeStory: Float
    avgAllTimeStory: Float
  }
  # Wrong parameters item
  type WrongParam {
    name: String!
    required: String!
    received: String!
  }
  # All returned types must have in Response
  type Response {
    # Required fields on all response result
    status: String!
    message: String!
    httpCode: Int!
    # Optional fields
    stdErrorMessage: String # Standart error in development mode
    wrongParameter: WrongParam # Data with wrong parameters
    # Fields of custom objects
    brand: Brand
    brands: [Brand]
  }
  input ParamsBrand {
    url: String!
    email: String!
  }
  type Query {
    getBrands: Response!
  }
  type Mutation {
    postBrand(brand: ParamsBrand!): Response!
  }
`;

export default Schema;
