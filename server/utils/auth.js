const { GraphQLError } = require('graphql');
// using jwt
const jwt = require('jsonwebtoken');
//  used to sign and verify JWTs. The secret ensures that the token is not tampered with after it is issued.
const secret = 'imbatman';
const expiration = '2h';

module.exports = {
    AuthenticationError: new GraphQLError('Couldnt authenticate user.', {
        extensions: {
            code: 'UNAUTHENTICATED',
        },
    }),
    authMiddleware: function({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        return req;
    },
    signToken: function({ firstName, email, _id }) {
        const payload = {  firstName, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};