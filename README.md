# desafio-docker-nginx-node
Desafio docker  - Nginx com Node e Mysql - full cycle

## Ajustes realizados incluindo o arquivo de script wait-for-it.sh e reajustados outros arquivos

- node/wait-for-it.sh

### Após ajustes
Agora, quando você iniciar os containers com docker-compose up, o serviço node esperará até que o MySQL esteja 
totalmente disponível antes de iniciar o aplicativo Node.js. Isso garantirá que o aplicativo não encontre erros 
de conexão ao banco de dados durante a inicialização.
