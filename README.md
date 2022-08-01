# Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)

***


## 1. Prefácio

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto

Primeiramente eu pensei no tema do projeto e fiz um desenho no caderno mesmo, imaginando mais ou menos como seria a interface da página.

![Rascunho do projeto](/Rascunho_projeto.jpeg)


O tema escolhido para a Cifra de César foi **Paquera/flerte**; como uma forma de deixar as paqueras dos uuários mais divertidas e intrigantes com a cifragem e decifragem das mensagens. 
A minha ideia inicial era criar 4 campos de texto, onde no primeiro a esquerda o usuário utilizaria a caixa para inserir a mensagem que gostaria que fosse cifrada com um botão abaixo para cifrar a mensagem, e o resultado dessa cifragem apareceria na caixa de texto ao lado. e o mesmo seria para as outras duas caixas abaixo caso o usuário quisesse decifrar uma mensagem recebida.
Porém quando comecei a codar, entendi que dava pra otimizar esses espaços, utilizando apenas duas caixas de texto, sendo a primeira para a inserção da mensagem pelo usuário, e outra para o resultado. Contudo o usuário clicaria no botam de cifrar ou decifrar mensagem para escolher a ação desejada.
Além disso, também coloquei um campo para o usuário adicionar o deslocamento desejado para a cifragem e decifragem, que não tinha no esquema inicial.

E assim nasceu o *Paquera Cifrada*!

![Interface do projeto](/interface_projeto.jpeg)
