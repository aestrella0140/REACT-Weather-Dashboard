const typeDefs = `
type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
}

type Query {
    users: [User]
}
`;
module.exports = typeDefs;