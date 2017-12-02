/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = [1, 'gleyson', null, true, 'santos']

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myfunction(arr) {
    return arr;
};
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myfunction(myarray)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myfunction2( arr, index ){
    return arr[ index ];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myarray2 = [ 10, 'ninja', null, false, 'js'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myarray2( myarray2[0] ) )
console.log(myarray2( myarray2[1] ) )
console.log(myarray2( myarray2[2] ) )
console.log(myarray2( myarray2[3] ) )
console.log(myarray2( myarray2[4] ) )
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(bookName) {
    var allBooks = {
        'segredos do ninja javascrip': {
            quantidadePaginas: 488,
            autor: 'Jhon Resingk',
            editora:'Novatec'
        }
        'introdução ao html5': {
            quantidadePaginas: 220,
            autor: 'Bruce loston',
            editora:'Alta books'
        }
        'smashing css': {
            quantidadePaginas: 283,
            autor: 'Erick meyer',
            editora: 'Bookman'
        }
    };

    return !bookname ? allBooks : allBooks[bookName]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'introdução ao html5';
console.log( "O livro ' + bookName + ' tem ' + book(bookName).quantidadePaginas + ' páginas!");
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro' + bookName + ' é ' + book(bookName).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
*/
console.log('A editora do livro' + bookName + ' é ' + book(bookName).editora + '.');
