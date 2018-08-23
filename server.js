const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();

app.use('/graphql', expressGraphQL({
    graphiql: true
}));

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Servers running on ${port}`)
});