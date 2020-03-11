/* 
> Função declarativa < 
function getName() {
  return "Stefany ";
}

const name = getName();

console.log(name); */

/* > arrow function <
const getName = () => {
  return "Stefany";
}; */

/* > arrow funcion de outra forma < 
const getName = () => "Stefany"; */

/* > arrow functions com template String <
const getName = () => `Stefany`; */

/* let info = {
  name: "SEM VALOR",
  email: "SEM EMAIL"
};
 */
/* function imprimeDados(name, email) {
  console.log("Name", name);
  console.log("Email", email);
  return function() {
    info = {
      name: name,
      email: email
    };
  };
} */

/* const imprimeDados = (name, email) => {
  console.log("Name", name);
  console.log("Email", email);

  return () => {
    info = {
      name: name,
      email: email
    };
  };
}; */

/* const gerarDados = (name, email) => {
  return () => {
    info = {
const pessoa = (name, email) => ({
  name: name,
  email: email
});      name: name,
      email: email
    };
  };
};
 */

/* const gerarDados = (name, email) => () => {
  info = {
    name: name,
    email: email
  };
}; */

/* console.log("Valores info antes", info);

const salvaDados = gerarDados("stefany", "stefa@email.com");

salvaDados();

console.log("verifcando se os dados foram alterados", info); */

/* OBS: SÓ SERÁ ATRIBUIDO O VALOR PARA O JSON QUANDO A FUNÇÃO SALVADADOS FOR EXECUTADA,
UMA VEZ QUE ELA É RECEVE O RETORNO DA FUNÇÃO DE GERAR gerarDados. ONDE O RETORNO DE
gerarDados É UMA FUNÇÃO ANONIMA */

/* function pessoa(name, email) {
  return {
    name: name,
    email: email
  };
}
 */

/* const pessoa = (name, email) => {
  return {
    name: name,
    email: email
  };
}; */

/*  */

/* const pessoa = (name, email) => ({
  name,
  email
});
 */
/* quando a chave e o valor tem nomes iguais, vc pode emitir o nome da chave
 */
/* console.log(pessoa("stefany", "stefany@gmail.com")); */
