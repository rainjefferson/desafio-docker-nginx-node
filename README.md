# desafio-docker-nginx-node
Desafio docker  - Nginx com Node e Mysql - full cycle

## Ajustes realizados incluindo o arquivo de script wait-for-it.sh e reajustados outros arquivos

- node/Dockerfile

### Ap�s ajustes
Agora, quando voc� iniciar os containers com docker-compose up, o servi�o node esperar� at� que o MySQL esteja 
totalmente dispon�vel antes de iniciar o aplicativo Node.js. Isso garantir� que o aplicativo n�o encontre erros 
de conex�o ao banco de dados durante a inicializa��o.