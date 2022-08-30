const inputCurso = document.getElementById('curso-novo')

function adicionarCurso() {
    const item = document.createElement('li')
 

    item.innerHTML = `<li>
    <span>${inputCurso.value}</span>
    <button class="excluir">x</button>
  </li>`;

    const lista = document.querySelector('#lista')
    lista.appendChild(item)
    


}
const botao = document.querySelector('#btn-adicionar')
botao.addEventListener('click', ()=>console.log('clicou'))
// =)



