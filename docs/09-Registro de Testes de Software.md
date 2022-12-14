# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Os resultados obtidos nos testes de software realizados são descritos abaixo. 

### CT-01 - Cadastro de usuário
![Página de cadastro](../docs/img/telaCadastro.png)
Na página inicial, clicou-se no botão “CADASTRO” e assim foi-se redirecionado para a página mostrada acima. <br>
Preencheu-se o campo de nome com o valor “Milleny”, o de usuário com “milleny”, de e-mail com “ellenmilleny@gmail.com” e o de senha e confirmar senha com “adasadas2”. <br>
Logo após o preenchimento dos campos, clicou-se no botão “Cadastrar” e foi redirecionado para a página de login. <br>
Podemos verificar o sucesso do teste acessando o armazenamento local, em listaUser, mostrado na figura abaixo.

![Teste Cadastro](../docs/img/testeCadastro.png)


### CT-02 - Realizar login
![Página de Login](../docs/img/telaLogin.png)
Acessou-se a página inicial , clicou-se no botão “Login” e foi-se redirecionado para a página de fazer login mostrada acima. <br>
No campo usuário colocou-se “milleny” e no campo senha coloquei “adasadas2”. Depois de preencher os campos nome de usuário e senha, clicou-se no botão “Entrar”. <br>
Podemos verificar o sucesso do teste acessando o armazenamento local, em userLogado, mostrado na figura abaixo.
![Teste Login](../docs/img/testeLogin.png)

### CT-03 - Recuperação de senha
![Página de Login](../docs/img/telaRecSenha.png)
Acessou-se a página inicial , clicou-se no botão “Login” e foi-se redirecionado para a página de fazer login mostrada acima. Clicou-se em “Recuperar senha” e foi redirecionado para a página de recuperar a senha. <br>
Preencheu-se o campo de e-mail com “ellenmilleny@gmail.com” e os campos nova senha e confirmar senha com “asdasd2” e clicou-se no botão “Salvar”. <br>
Podemos verificar que o teste não foi bem sucedido pela imagem abaixo.
![Teste Login](../docs/img/testeRecSenha.png)


### CT-04 - Incluir uma categoria
![Modal de adicionar categoria](../docs/img/telaOrcamento-categoria.png)
Após realizar o login, detalhado em um teste acima, foi redirecionado para a tela principal. Nela estão presentes 3 (três) botões: incluir categoria, incluir item e fazer orçamento. <br>
Clicou-se no botão "incluir categoria", tendo uma visão igual à imagem acima, podemos digitar qualquer categoria que precisarmos utilizar mais a frente. Nesse teste foi digitado “Materiais” e logo em seguida clicado no botão “Adicionar”. <br>
Podemos verificar o sucesso do teste acessando o armazenamento local, mostrado na figura abaixo.
![Resultado do teste de adicionar categoria](../docs/img/testeCategoria.png)

### CT-05 - Incluir no mínimo 3 (três) itens
![Modal de adicionar categoria](../docs/img/telaOrcamento-incluirItem.png)
Após realizar o login, detalhado em um teste acima, foi redirecionado para a tela principal. Clicou-se no botão “Incluir item”, que abre um modal como o apresentado na figura acima. <br>
Para o primeiro item, preencheu-se o campo de nome com “cimento”, a categoria ficou como “Materiais”, a medida com o valor “unidade”, a quantidade foi “3” e o preço foi de “76,80”. <br>
No segundo item, preencheu-se o campo de nome com “Tijolo”, a categoria ficou como “Materiais”, a medida com o valor “unidade”, a quantidade foi “50” e o preço foi de “2,80”. <br>
No último item, preencheu-se o campo de nome com “Areia”, a categoria ficou como “Materiais”, a medida com o valor “metro”, a quantidade foi “5” e o preço foi de 113,40”. <br>
Podemos verificar o sucesso do teste observando que os itens incluídos estão sendo apresentados na página principal, como na figura abaixo.

![Resultado do teste de adicionar categoria](../docs/img/testeIncluirItem.png)

### CT-06 - Editar item
![Modal de adicionar categoria](../docs/img/telaOrcamento-editarItem.png)
Após realizar o login, detalhado em um teste acima, foi redirecionado para a tela principal. Clicou-se no botão “Incluir item”, que abre um modal como o apresentado na figura acima. <br>
Alterou-se o campo quantidade do segundo item que havia cadastrado no teste anterior, o Tijolo. A quantidade alterada foi de 50 para 39. <br>
Podemos verificar o sucesso do teste observando que o item apresenta na página principal agora a quantidade como 39, como na figura abaixo.

![Resultado do teste de adicionar categoria](../docs/img/testeEditarItem.png)

### CT-07 - Fazer orçamento
Após realizar o login, detalhado em um teste acima, foi redirecionado para a tela principal. Com alguns itens já cadastrados, clicou-se no botão “Fazer orçamento”. <br>
Nele, foi apresentado o nome, a quantidade, o preço unitário, o valor total do produto e o valor total de todos os produtos. <br>
Podemos verificar o sucesso do teste observando o modal apresentado na figura abaixo.
![Resultado do teste de adicionar categoria](../docs/img/testeOrcamento.png)