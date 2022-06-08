import { gql } from "apollo-server-express";

export default gql`
  type SeeCategoriesResult {
    totalPages: Int!
    totalCategories: Int!
    categories: [Category]
  }
  type Query {
    seeCategories(page: Int!): SeeCategoriesResult!
  }
`;
