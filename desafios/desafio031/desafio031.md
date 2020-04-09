# Desafio 031 :books:

1. Intermediário
2. Avançado

## 1. Intermediário :ballot_box_with_check:

> Isolar o componente memory card com IIFE, 

Dica #01: No arquivo tem 4 funções, a função de criação do memoryCard() deve ficar do lado de fora, para que o page possa consumi-la e assim criar os cards, mas todas as outras funções devem manter o escopo fechado.

Dica #02: Como testar se você tem acesso as funções e variáveis do arquivo... Veja no console se você pode acessar e retonar algo, se isso ocorrer você deve fechar o escopo dessa função.

DIca #03: Lembrar que quando a função memoryCard() alguma coisa tem que ser exposta, mas como fazer isso?

:memo: [Link do repositório aqui](https://github.com/StefanyVasc/memory-game/commit/316b9e59b5b30223dfd18000d367dfb8bd2fc38d)

## 2. Avançado :ballot_box_with_check:

>  Pensar no que fazer com o wrapper... se eu devo isolá-lo... pensar em como ele funciona. 
>  Dentro do memory card existe uma função que checa se você acertou os cards... Isso deveria ser função do componente memory-card, jogo ou cards wrapper? Repensar a função chekingIfRight().




