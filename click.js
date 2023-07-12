const botao = document.getElementById('bntclick')
const contadorSpan = document.getElementById('contador')

// pegou o botão e onde irá ser o contador

let contador = 0;

// e colocou um valor inicial, que começa no zero

function cliqueBotao(){

    contador ++;

    // e criou a funcão, quano clicar o contador adicionará um numero a mais

contadorSpan.textContent = contador.toString();
// textContent é uma propriedade de elementos HTML que permite acessar e modificar o texto contido dentro do elemento. Ela retorna o conteúdo de texto como uma string e também pode ser usada para alterar o texto exibido no elemento.
}

// o contador vai passar a poder ser alterado

botao.addEventListener('click', cliqueBotao);

// addEventListener é um método utilizado para adicionar um ouvinte de eventos a um elemento HTML. Ele recebe dois argumentos: o tipo de evento a ser ouvido e a função a ser executada quando o evento ocorrer.

// e o botão ao ser clicado receberá um evento