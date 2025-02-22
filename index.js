const { gql, ApolloServer } = require("apollo-server");
const usuarios = [
    {
        idade: 23,
        salario: 1000.0,
        nome: "Fulano",
        ativo: true,
        id: "123",
      },
      {
        idade: 25,
        salario: 2000.0,
        nome: "Ciclano",
        ativo: false,
        id: "124",
      },
      {
        idade: 30,
        salario: 3000.0,
        nome: "Beltrano",
        ativo: true,
        id: "125",
      },]
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
    usuarios: [Usuario]
    produto: Produto
    usuario(id: Int, nome: String): Usuario
  }
`;
const resolvers = {
  Query: {
    usuarios() {
      return usuarios;
    },
    usuario(_, args) {
        const {id, nome} = args;
        if(id)return usuarios.find((usuario) => usuario.id == args.id);
        return usuarios.find((usuario) => usuario.nome == args.nome); 
      },
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen();
