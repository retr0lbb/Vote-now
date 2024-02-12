# Vote now 🗳️

- made by retr0lbb
- Server 🔗 [Servidor](https://github.com/retr0lbb/NWA-Polls)
- Version 🌐: 1.0.0
- style 💅: shadcn/ui, NextUi, Tailwind css

[![My Skills](https://skillicons.dev/icons?i=ts,react,vite,js,md,tailwind)](https://skillicons.dev)
  


## o que é: 💭
A vote now é um sistema de votações em enquetes criadas pelos usuarios
o sistema consiste principalmente do usuario que vota e do dono da enquete
que recebe a quantidade de votos de cada opção, as enquetes devem ter de 2 a 99 opções
o usuario pode trocar livremente o voto e o voto antigo é desconsiderado para que haja 
precisão nas opções


![Home-black](https://github.com/retr0lbb/Vote-now/assets/85702153/941600d2-c917-4a12-9dd0-8c8b2ff7371b)

Esta é a pagina principal, ela é bem intuitiva no quesito de navegação
o cabecalho é fixo no topo da tela permitindo voce a trocar de tema e postar uma nova enquete de qualquer lugar da aplicação.

naturalmente oferecemos a opção de trocar entre o tema claro e o tema escuro, não garantimos suporte para extenções de troca de temas. para a melhor experiencia de usuario desative quaisquer extenções desse tipo

![Home-white](https://github.com/retr0lbb/Vote-now/assets/85702153/88b84a05-1a39-431d-94b2-2f7c0ffbba1c)

logo depois de clickar ao botão central o usuario é redirecionado para a pagina principal
onde se encontra todas as opções de enquetes disponiveis. infelizmente o nosso website ainda não consta com um sistema de busca de enquetes por nome, essa adição ainda vira nas atualizações futuras

![Main-black](https://github.com/retr0lbb/Vote-now/assets/85702153/b9803024-26e8-4ad8-812f-efd7d1e193f7)
![Main-white](https://github.com/retr0lbb/Vote-now/assets/85702153/eddaecaf-4f7f-400e-8128-309bb27628ed)

ao clicar no botão vote de alguma enquete o usuario é instantaneamente redirecionado para a pagina daquela enquete onde ele pode escolher dentre as opções da propria enquete

![Poll-black](https://github.com/retr0lbb/Vote-now/assets/85702153/1f462944-4580-4609-81e0-6f04374bbbef)
![Poll-white](https://github.com/retr0lbb/Vote-now/assets/85702153/b70f9c17-7984-4067-9a6c-49fa4e6e1ade)

o sistema de notificação usando o toast do sonner permite que o usuario tenha total ciencia do que esta acontecendo por baixo dos panos

// aqui vai uma imagem do toast pq o henrique ficou com preguiça de ligar o servidor denovo

esta aplicação esta preparada para lidar com eventuais falhas do servidor, criando fundos que informam ao usuario quais ações ele tem de fazer para lidar com o erro encontrado

![image](https://github.com/retr0lbb/Vote-now/assets/85702153/c141e24d-a654-4077-b63f-3101a1a7c5d4)

e também a aplicação esta preparada para lidar com baixo processamento já que ainda falta um pouco de refinamento no que se diz te otimização. o sistema prove um loading de falsos objetos para dar a sensação de que o carregamento é instantaneo
![image](https://github.com/retr0lbb/Vote-now/assets/85702153/cc83daf6-6146-4078-b925-d951581e7395)

note que as imagens tiradas para demonstrar o sistema de gerenciamento de erros foram tiradas tempos depois das primeiras imagens de estilo então alguns elementos podem parecer diferentes


## O que esperar no futuro 🤔
O nosso servidor desenvolvido ultilizando o fastify ja possui suporte a um sistema de conexao por webSocket o que permite interação em tempo real entre o servidor a pagina, em futuras atualizações prometemos entregar um sistema de chat onde você possa ver em tempo real qual opção é votada no momento. 
em momentos futuros também planejamos adicionar o sistema de pesquisa por enquete para que o usuario possa pegar diretamente uma enquete, e, alem disso vamos adicionar um sistema de tags para que na pagina principal só retornem as enquetes com a tag escolhida trazendo assim um sistema eficiente de filtro

