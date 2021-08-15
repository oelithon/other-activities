// 1 - No código abaixo você tem a função getUser , que retorna uma pessoa qualquer. Complete a função getUser de forma que ela receba uma outra função como parâmetro para que possa realizar as operações abaixo sobre a pessoa retornada.

const assert = require('assert');

// Foi utilizado destructuring para pegar as chaves específicas para esse exemplo:
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;

// Foi utilizado destructuring para pegar as chaves específicas para esse exemplo:
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// Aqui a função getUser tem como parametro uma callback, essa callback recebe como parametro a variável userToReturn com um objeto.
const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return callback(userToReturn)
};

assert.strictEqual(getUser(userFullName), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.strictEqual(getUser(userNationality), "Ivan is Russian"); // complete a chamada da função de getUser
