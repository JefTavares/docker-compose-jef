Na string de conexão você pode incluir a opção "allowPublicKeyRetrieval=true", exemplo:

jdbc:mysql://localhost:3306/db?allowPublicKeyRetrieval=true&useSSL=false

Para usuários do DBeaver:
Clique com o botão direito na sua conexão, escolha "Editar Conexão"
Na tela "Configurações de conexão" (tela principal), clique em "Editar configurações do driver"
Clique em "Propriedades da conexão"
Clique com o botão direito na área "propriedades do usuário" e escolha "Adicionar nova propriedade"
Adicione duas propriedades: "useSSL" e "allowPublicKeyRetrieval"
Defina seus valores como "false" e "true" clicando duas vezes na coluna "value"

O usuario hoje é
root
bato010407
