# News
Esse é um teste de aplicativo para Flex, usando React Native, e para o banco de dados, usado o RealmDB, um banco que atua de forma local no telefone. As respostas do teste estão no final do documento.

Para usar vai precisar do Yarn instalado e do JAVA_HOME configurado(no caso do android).

Para instalar, de o gitclone no projeto, abra a pasta theNews e rode o comando 'yarn'. ELe fará todas as instalações que o projeto vai precisar.

Com a instalação pronta, ainda no diretorio ./theNews:
Rode o comando 'yarn start' para startar o  servidor.
E agora rode 'yarn android' ou 'yarn ios' para testar nos respectivos aparelhos/emuladores que estiverem conectados ao seu computador.

Foram usados na montagem do teste: Yarn, Homebrew, Node, Yarn, Watchman, Cocoapods, React-Native, RealmDB.

Se acontecer de no mac não rodar o IOS, experimente o seguinte comando: 'cd ios && pod install & cd ..'.

Documentos que podem ser úteis: 
Sobre  o banco: https://realm.io/docs/javascript/latest, 
Sobre os softwares e formas de testes mobile: https://react-native.rocketseat.dev/. Aqui se encontra como instalar o JAVA_HOME, e outras informações úteis tbem. Qualquer outra dúvida, entre em contato.


RESPOSTAS DO TESTE:

1) C - Todo cristal é corpo sólido
2) E - 48
3) D - O resultado da soma da numeração da terceira e da quarta casa é igual a 240
4) 54326
5) E - Aplicações WEB são implementadas para renderizar/entregar páginas
      em browsers executando em dispositivos móveis. Geralmente são implementadas em HTML e Javascript
6) D - Acessará todas as bibliotecas nativas dos dispositivos
7) E - Híbridos podem ser gerados através da compilação de código para diferentes sistemas
8) D - Define em sua estrutura XML o layout da aplicação
9) B - Java
10) B - Apenas II
11) A - I, II e III
12) B - Colchetes
13) A - Apenas I e V

14)
  algoritmo "ordenaVetor"
  var
    vet : vetor[5 3 2 4 7 1 0 6] de inteiro
    x, y, troca : inteiro

  inicio
    //ordenar e exibir
    para x de 1 ate 7 faca  // penultima posicao
      para y de x+1 ate 8 faca  //proxima ate ultima pos.
        se vet[y] < vet[x] entao // < crescente   > decrescente
          troca <- vet[x]
          vet[x] <- vet[y]
          vet[y] <- troca
        fimse
      fimpara
      escreval(vet[x])
    fimpara
    escreval(vet[6])
  fimalgoritmo
