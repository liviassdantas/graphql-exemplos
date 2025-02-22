const { gql, ApolloServer } = require("apollo-server");

const typeDefs = gql`
  type Produto {
    nome: String
    valor: Float
    id: ID
  }
  type Usuario {
    idade: Int
    salario: Float
    nome: String
    ativo: Boolean
    id: ID
  }
  type Query {
    usuario: Usuario
    produto: Produto
  }
`;

const resolvers = {
  Query: {
    usuario() {
      return {
        idade: 23,
        salario: 1000.0,
        nome: "Fulano",
        ativo: true,
        id: "123",
      };
    },
    produto() {
      return {
        nome: "Notebook",
        valor: 2000.0,
        id: "321",
      };
    }
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen();
