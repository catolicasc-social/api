# BackEnd

## Instruções

#### Requisitos

- Node.js (recomendavel versão mínima v11.13.0)
- Yarn (recomendavel versão mínima 1.15.2)
  
#### Instalar dependências

Dentro da pasta raiz do projeto, executar o seguinte comando para instalar todas dependências: 

`yarn install`

#### Verificar Configurações

No arquivo .env configurar porta `PORT`, e qual banco (desenv/prod) `BANCO`.
Pegar o `index.js` no drive da comida.catolica (arquivo de configuração que tem as chaves de acesso ao banco firestore), e colocar no diretório config.

#### Executar

Dentro da pasta raiz do projeto, executar o seguinte comando para executar o projeto: 

`yarn api`

****

## Rotas

#### [GET /products](https://github.com/catolicasc-social/api/issues/9)
Retorna lista de produtos.

------

#### [GET /products/id](https://github.com/catolicasc-social/api/issues/8)
Retorna produto pela identificação.

------

#### [GET /usuarios](https://github.com/catolicasc-social/api/issues/7)
Retorna lista de usuários.

------

#### [GET /usuarios/id](https://github.com/catolicasc-social/api/issues/6)
Retorna usuário pela identificação.

------

#### [DELETE /products/id](https://github.com/catolicasc-social/api/issues/5)
Deleta um produto.

------

#### [DELETE /usuarios/id](https://github.com/catolicasc-social/api/issues/4)
Deleta um usuário.

