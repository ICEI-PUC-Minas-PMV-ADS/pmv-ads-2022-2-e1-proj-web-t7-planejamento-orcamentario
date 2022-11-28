let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

function entrar() {
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let msgError = document.querySelector('#msgError')
    let listaUser = []

    let userValid = {
        nome: null,
        user: null,
        senha: null
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser?.forEach((item) => {
        if (usuario.value == item.userCad && senha.value == item.senhaCad) {

            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }

        }
    })

    //se usuario e senha correto abre index
    if (usuario.value == userValid.user && senha.value == userValid.senha) {
        window.location.href = 'Orcamento.html' //mudar aqui

        let mathRandom = Math.random().toString(16).substr(2)
        let token = mathRandom + mathRandom

        localStorage.setItem('token', token)
        localStorage.setItem('userLogado', JSON.stringify(userValid))
        
        //senão volta msg de erro com estilização
    } else {
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorretos'
        usuario.focus()
    }

}
