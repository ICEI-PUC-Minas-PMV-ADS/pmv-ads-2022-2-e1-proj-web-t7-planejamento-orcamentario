const modalItem = document.querySelector('.modal__container__item')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sCategoria = document.querySelector('#m-categoria')
const sMedida = document.querySelector('#m-medida')
const sQuantidade = document.querySelector('#m-quantidade')
const sPreco = document.querySelector('#m-preco')
const btnSalvar = document.querySelector('#btnSalvar')
const modalCategoria = document.querySelector('.modal__container__categoria')
const cCategoria = document.querySelector('#c-categoria')
const btnAdicionar = document.querySelector('#btnAdicionar')

const modalOrcamento = document.querySelector('.modal__container__orcamento')
const oCategoria = document.querySelector('#m-categoria-orcamento')
let span = document.querySelector(".span")


let itens = [];
let id;
let categorias;
let total = 0;


loadCategorias = () => {
  categorias = JSON.parse(localStorage.getItem('categorias')) ?? ["Materiais"];
  sCategoria.innerHTML = "";
  categorias.forEach(function(elemento, chave) {
    sCategoria.appendChild(new Option(elemento, chave));
});
}
loadCategorias();

function openModalItem(edit = false, index = 0) {
  modalItem.classList.add('active')

 modalItem.onclick = e => {
    if (e.target.className.indexOf('modal__container__item') !== -1) {
      modalItem.classList.remove('active')
    }
  }

    if (edit) {
        sNome.value = itens[index].nome
        sCategoria.value = itens[index].categoria
        sMedida.value = itens[index].medida
        sQuantidade.value = itens[index].quantidade
        sPreco.value = itens[index].preco
        id = index
      } else {
        sNome.value = ''
        sMedida.value = ''
        sQuantidade.value = ''
        sPreco.value = ''
      }
}

function editItem(index) {

 openModalItem(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

 tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${categorias[item.categoria]}</td>
    <td>${item.medida}</td>
    <td>${item.quantidade}</td>
    <td>R$ ${item.preco}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (sNome.value == '' || sCategoria.value == '' || sMedida.value == '' || sQuantidade.value == '' || sPreco.value == '') {
    return
  }

 e.preventDefault();

 if (id !== undefined) {
    itens[id].nome = sNome.value
    itens[id].categoria = sCategoria.value
    itens[id].medida = sMedida.value
    itens[id].quantidade = sQuantidade.value
    itens[id].preco = sPreco.value
  } else {
    itens.push({'nome': sNome.value, 'categoria': sCategoria.value, 'medida' : sMedida.value, 'quantidade': sQuantidade.value, 'preco': sPreco.value})
  }

 setItensBD()

 modalItem.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('itens')) ?? [];
const setItensBD = () => localStorage.setItem('itens', JSON.stringify(itens));
loadItens();

function openModalCategoria() {
  modalCategoria.classList.add('active')

 modalCategoria.onclick = e => {
    if (e.target.className.indexOf('modal__container__categoria') !== -1) {
      modalCategoria.classList.remove('active')
    }
  }
}

btnAdicionar.onclick = e => {
  
  if (cCategoria.value == '') {
    return
  }

 e.preventDefault();

 categorias.push(cCategoria.value)
  cCategoria.value = ""
  localStorage.categorias = JSON.stringify(categorias)
  
  loadCategorias();



 modalCategoria.classList.remove('active')
  id = undefined
}


function openModalOrcamento(edit = false, index = 0) {
  modalOrcamento.classList.add('active')
  loadItensOrcamento()

  modalOrcamento.onclick = e => {
    if (e.target.className.indexOf('modal__container__orcamento') !== -1) {
      modalOrcamento.classList.remove('active')
    }
  }
  
  total = 0
}

function insertItemOrcamento(item) {
  let tbody = document.querySelector(".orcamento")
  let tr = document.createElement('tr')


 tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.quantidade}</td>
    <td>${item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
    <td>${(item.quantidade*item.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
    
  `
  tbody.appendChild(tr)
}

function loadItensOrcamento() {
  let tbody = document.querySelector(".orcamento")
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItemOrcamento(item, index)

    total = total + parseFloat(item.quantidade*item.preco);
  })

  span.innerHTML = `
    Total: R$ ${total.toFixed(2)}
  `
}
