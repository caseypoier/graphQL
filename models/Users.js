const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphql;


const users = [
    { id: 23, firstName: 'casey', age: 31 },
    { id: 24, firstName: 'megan', age: 28 },
    { id: 25, firstName: 'davesh', age: 42 },
    { id: 26, firstName: 'joe', age: 30 },
];

const userModel = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName:{ type: GraphQLString },
        age:{ type: GraphQLInt },

    }
});

const RootQuery = new GraphQLObjectType({
   name:'RootQueryType' ,
   fields: {
       user: {
           type: userModel,
           args: { id: {type: GraphQLString } },
           resolve(parentValue, args) {

           }
       }
   }
});