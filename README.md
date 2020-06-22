# Teste para Front-end - Conta Simples

### O desafio consiste em criar a Home do Internet Banking da Conta Simples.

## Entregáveis
- Apresentar as informações que você achar conveniente. 
- Você pode fazer uma tela de login também. 
- Se conseguir disponibilizar isso em alguma URL para acesso, melhor ainda. 
- Pode também apresentar os dados mockado; não precisa consultar nenhuma API.

## Critérios de Avaliação
- Nosso foco é identificar suas habilidade não só em programação, mas também comportamental, portanto, iremos analisar os seguintes critérios:
- Capacidade em auto-aprendizado;
- Comprometimento: Fazer mais do que o combinado;
- Organização do código: Separação de módulos, view e model, back-end e front-end
- Clareza: O README explica de forma resumida qual é o problema e como pode rodar a aplicação?
- Assertividade: A aplicação está fazendo o que é esperado? Se tem algo faltando, o README explica o porquê?
- Legibilidade do código (incluindo comentários)
- Segurança: Existe alguma vulnerabilidade clara?
- Cobertura de testes (Não esperamos cobertura completa)
- Histórico de commits (estrutura e qualidade)
- UX: A interface é de fácil uso e auto-explicativa
- Importante ressaltar que todo o conhecimento adquirido neste desafio, será utilizado nas atividades do dia-a-dia aqui na Conta Simples.

## Meu processo de desenvolvimento do projeto/teste de acordo com os commits

### Commit 01 - Initialize project using Create React App
  Criar a base do projeto/teste usando '’create-react-app’'.

### Commit 02 - Create basic main components from wireframe
  Criação de um wireframe que irá mostrar de forma simples como vou estruturar essa SPA, e quais componentes eu devo criar. Também já incluindo as mesmas cores usadas pela empresa em uma pequena paleta já nesse primeiro momento.

### Commit 03 - Create navigation bar first version
  Desenvolver o que foi descrito no wireframe. 

### Commit 04 - Create navigation bar second version
  Depois de pesquisar sobre a empresa, serviços oferecidos, sua página online e tentei reproduzir algo que seja fosse parecido com o layout do site da mesma.
  
### Commit 05 - Complete Navigation Bar
  Esse commit também incluiu a criação dos arquivos que correspodem a cada link da barra de navegação.

### Commit 06 - Complete navigation bar styling
  Estilização da barra de navegação feita com 'Styling Components'

### Commit 07 - Complete login functionality
  Uma fase um pouco mais complicada para mim, algo que ainda não fiz muito em React. Especialmente porque não há um consenso sobre a melhor maneira de implementar essa parte da aplicação. Pelo menos eu não encontrei nenhum material que seguisse a mesma estruturação que outro.

### Commit 08 - Structure components and routes
  Também uma parte em que tive um pouco de dificuldades, as mudanças que eu adotei sobre como deveria ser a jornada do usuário não contribuíram para uma maior eficiência nessa etapa.

### Commit 09 - Create views for each section of the app
  Depois da decisão de usar ''views'' para estruturação do projeto, a visualização dos aplicação ficou bem mais fácil.

### Commit 10 - Start implementation of transactions rendering
  Esse foi o ponto de parada do meu teste. Apesar de eu ter dedicado uma boa parte do meu tempo nessa etapa, eu não descobri uma forma de resolver o problema ''Type Error: Cannot read property 'map' of undefined''. Escrevi e reescrevi o código várias vezes, e apesar passar como props do arquivo de dados para view ''MinhaConta'', eu não consegui renderizá-los por causa desse erro.
  
  Esse é o próximo passo para continuar melhorando a aplicação.

## Testando a aplicação
  ### 1 - LOCAL - Baixando esse repositório na sua máquina e usando os dados contidos no arquivo ''contas.json' para fazer o login.

  ### 2 - ON-LINE - Siga as instruções abaixo:
  #### Passo 1 - Click no link abaixo acessar URL onde a aplicação está hospedada.   
  [http://daxoliveira.github.io/ContaSimplesTest](http://daxoliveira.github.io/ContaSimplesTest)
  
  #### Passo 2 - Click no logo "Conta Simples"

  #### Passo 3 - Faça o login usando as informações da conta abaixo:  
    E-mail: dax.oliveira.br@gmail.com  
    Senha: conta

***This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
