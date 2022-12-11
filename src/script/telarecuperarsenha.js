function compararDados() {
    let email = document.querySelector("#email")
    let senha1 = document.querySelector("#nova-senha")
    let senha2 = document.querySelector("#confirmar-senha")

    const usuarios = JSON.parse(localStorage.getItem("listaUser"))

  if (email.value != usuarios[0].emailCad) {
  alert("Esse email não existe")
    }
    else if (senha1.value != senha2.value) {
        alert("Campos de senha não coincidem")
    }

    else if (senha1.value.length <= 8 || senha2.value.length <= 8) {
        alert("senha deve conter pelo menos 8 digitos")
    }
    else if (email.value == usuarios[0].emailCad) {
        usuarios[0].senhaCad = `${senha1.value}`

        let usuarioString = JSON.stringify(usuarios)
        localStorage.setItem("listaUser", usuarioString)
        alert("Senha alterada com sucesso")
    }
}

function Enviar(e) {

    let button = document.querySelector(".btn-salvar")
    button.addEventListener("click", (e) => {
        e.preventDefault()
        compararDados()

        if (compararDados) {
            window.location.href = "../pages/login.html"
        }
      })
      
    
}

Enviar()
