// Para cadastrar um usuario "falso para testes" e pegar ele do local storange,
//  o ideal é a pagina cadastro já armazenar ele lá quando tiver tudo junto
function salvarUsuarioNavegador() {

      const usuario = {
          email: "mail@mail.com",
          senha: "coxinha123",
          cidade: "manaus"
      }
  
      let usuarioString = JSON.stringify(usuario)
      console.log(usuarioString)
      localStorage.setItem("@BudplanUsuario", usuarioString)
  } 
  
  
  
  
  
                                                                                                                                                                                                                                                                                                                      
  // Compara as coisas dos inputs com as que vieram da pagina de cadastro
  function compararDados() {
      let email = document.querySelector("#email")
      let senha1 = document.querySelector("#nova-senha")
      let senha2 = document.querySelector("#confirmar-senha")
  
      const usuario = JSON.parse(localStorage.getItem("@BudplanUsuario"))
  
  
      if (email.value != usuario.email) {
          alert("Esse email não existe")
      }
      else if (senha1.value != senha2.value) {
          alert("Campos de senha não coincidem")
      }
      // Para Fazer com que aceite pelo menos 8 caracteres
  
      else if (senha1.value.length <= 8 || senha2.value.length <= 8) {
          alert("senha deve conter pelo menos 8 digitos")
      }
      else if (email.value == usuario.email) {
          usuario.senha = `${senha1.value}`
  
          let usuarioString = JSON.stringify(usuario)
          localStorage.setItem("@BudplanUsuario", usuarioString)
          alert("Senha alterada com sucesso")
          console.log(usuario)
  
      }
  }
  // funcao que bota um evento no botão que faz ele rodar a função "comparar dados"
  
  function Enviar(e) {
  
      let button = document.querySelector(".btn-salvar")
  
      button.addEventListener("click", (e) => {
          e.preventDefault()
          compararDados()
      })
  
  }
  
  Enviar()