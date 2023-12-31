const typeDefs = `
type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
}

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    removeUser: User
}
`;
module.exports = typeDefs;