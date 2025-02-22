const { gql, ApolloServer } = require("apollo-server");

const typeDefs = gql`
   type Query {
    idade: Int
    salario: Float
    nome: String
    ativo: Boolean
    id: ID
    }`;

const resolvers = {
    Query: {
        idade: () => 30,
        salario: () => 1000.50,
        nome: () => "Fulano",
        ativo: () => true,
        id: () => "123"
    }
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen();
