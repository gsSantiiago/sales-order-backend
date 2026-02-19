# Guia de Comandos - Curso SAP CAP

## 1. Configuração do Ambiente Node.js

### Instalação do NVM (Node Version Manager)
https://github.com/nvm-sh/nvm

### Instalar Versão LTS do Node.js
$ nvm install --lts

## 2. Instalar CLI do CAP
$ npm i -g @sap/cds-dk

## 3. Criar Novo Projeto CAP

### Criar projeto no diretório atual
$ cds init

### Criar projeto em um novo diretório
$ cds init sales-order-backend

## 4. Instalar Dependências do Projeto
$ yarn

## 5. Iniciar Servidor de Desenvolvimento
$ yarn dev

## 6. Adicionar SAP Cloud SDK
$ yarn add @sap-cloud-sdk/http-client

## 7. Configurar Padrão de Mensagens de Commit
$ yarn add -D git-commit-msg-linter