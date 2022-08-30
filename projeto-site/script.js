const inputCurso = document.getElementById('curso-novo')

function adicionarCurso() {
    const item = document.createElement('li')
 

    item.innerHTML = `<li>
    <span>${inputCurso.value}</span>
    <button class="excluir">x</button>
  </li>`;

    const lista = document.querySelector('#lista')
    lista.appendChild(item)
    inputCurso.value=""
    


}
const botaoAdicionar = document.querySelector('#btn-adicionar')
botaoAdicionar.addEventListener('click', adicionarCurso)

function limparLista(){
  const lista = document.querySelector('#lista')
  lista.innerHTML = ""
}

const botaoLimpar = document.querySelector('.bt-azul')



botaoLimpar.addEventListener('click', limparLista)



