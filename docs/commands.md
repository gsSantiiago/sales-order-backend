# Guia de Comandos - Curso SAP CAP

## 1. Configuração do Ambiente Node.js

### Instalação do NVM (Node Version Manager)
https://github.com/nvm-sh/nvm

### Instalar Versão LTS do Node.js
$ nvm install --lts

## 2. Instalar SQLite3
$ sudo apt install sqlite3

## 3. Instalar CLI do CAP
$ npm i -g @sap/cds-dk

## 4. Criar Novo Projeto CAP

### Criar projeto no diretório atual
$ cds init

### Criar projeto em um novo diretório
$ cds init sales-order-backend

## 5. Instalar Dependências do Projeto
$ yarn

## 6. Iniciar Servidor de Desenvolvimento
$ yarn dev

## 7. Adicionar SAP Cloud SDK
$ yarn add @sap-cloud-sdk/http-client

## 8. Configurar TypeScript
$ yarn add -D tsx @cap-js/cds-typer typescript @types/node

## 9. Configurar Padrão de Mensagens de Commit
$ yarn add -D git-commit-msg-linter

## 10. Gerar Dados de Teste
$ cds add data --records 10 --out test/data

## 11. Configurar TypeScript (tsconfig.json)
$ yarn tsc --init

## 12. Compilar TypeScript
$ yarn tsc

## 13. Gerar Tipos com CDS Typer
$ npx @cap-js/cds-typer srv