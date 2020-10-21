<p  align="center">
<img  alt="GitHub language count"  src="https://img.shields.io/github/languages/count/somosprte/certificate-generator-email">
<img  alt="Repository size"  src="https://img.shields.io/github/repo-size/somosprte/certificate-generator-email">
<a  href="https://www.twitter.com/somosprte/">
<img  alt="Siga no Twitter"  src="https://img.shields.io/twitter/url?url=https://github.com/somosprte/certificate-generator-email">
</a>
<a  href="https://github.com/tgmarinho/README-ecoleta/commits/master">
<img  alt="GitHub last commit"  src="https://img.shields.io/github/last-commit/somosprte/certificate-generator-email">
</a>
<img  alt="License"  src="https://img.shields.io/badge/license-MIT-brightgreen">
<a  href="https://github.com/somosprte/certificate-generator-email/stargazers">
<img  alt="Stargazers"  src="https://img.shields.io/github/stars/somosprte/certificate-generator-email?style=social">
</a>
</p>
<!--ts-->

*  [🇧🇷🇵🇹 Português](#-português)

*  [🌎 English](#-english)

<!--te-->

# 🇧🇷🇵🇹 Português

<h3  align="center">

Faz leitura de arquivos csv, gera certificados no formato pdf com uma imagem jpg de fundo e os envia por email.

</h3>


Tabela de conteúdos

=================

<!--ts-->

*  [Funcionalidades](#-funcionalidades)

*  [Como executar o projeto](#-como-executar-o-projeto)

*  [Pré-requisitos](#pré-requisitos)

*  [Como contribuir no projeto](#-como-contribuir-no-projeto)

*  [Licença](#-licença)

<!--te-->
  
  

## ⚙️ Funcionalidades

  
* Faz a leitura de arquivos csv.
* Gera certificado no formato PDF usando imagem JPG de fundo.
* Envia email com o arquivo do certificado anexo.

---


## 🚀 Como executar o projeto

  
  
### Pré-requisitos

 

Desde que você tenha instalado no seu computador o [VSCode](https://code.visualstudio.com/download) e a extensão [Remote-Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers), não tem pré-requisito algum, é só rodar o projeto! 😲

> Se você quiser ler um pouco mais sobre esse assunto, acesse ["Em busca da independência para o ambiente de desenvolvimento"](https://medium.com/@pedrorenan/em-busca-da-independ%C3%AAncia-para-o-ambiente-de-desenvolvimento-2adc22f6f250).

  

Instruções:

  
```bash
# Clone este repositório
$ git clone https://github.com/somosprte/certificate-generator-email.git

# Acesse a pasta do projeto no terminal/cmd
$ cd certificate-generator-email

# Abra o projeto com o VSCode
$ code .
```

Quando o [VSCode](https://code.visualstudio.com/download) abrir você verá uma mensagem informando que foram detectadas as configurações necessárias para que a extensão [Remote-Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) faça a mágica acontecer.



<p  align="center">

<img  alt="Remote Containers Dialog"  title="Remote Containers Dialog"  src="./resources/assets/python-diagrams-remote-containers-dialog.png"  width="400px">

</p>

  

Clique em "Reopen in Container". O [VSCode](https://code.visualstudio.com/download) vai reiniciar e é só aguardar o ambiente ficar pronto para você. Pode demorar um pouco na primeira vez se você nunca tiver feito o download dos containers necessários 🕐. Mas vale a pena!
  


Quando finalizar, você terá um terminal dentro do [VSCode](https://code.visualstudio.com/download) que já está dentro do container. Tudo integrado! Tipo [Inception](https://www.imdb.com/title/tt1375666/) mesmo 🍿.

  

💡 Tudo que você executar nesse terminal será executado dentro do container apenas!


  
Então vamos ao útlimo passo:

  

```bash
# Inicie a aplicação
$ yarn start
```

Usando o [Insomnia](https://insomnia.rest/download/), ou outro cliente para APIs, faça uma requisição do tipo POST para https://localhost:3333/generate com os seguintes parâmetros:


```JSON
{
	"csv": "example.csv", 
	"jpg": "example.jpg",
	"event": "Evento Teste",
	"email": true
}
```


| parâmetro | tipo    | descrição                                      |
| --------- | ------- | ------------------------------------------------ |
| `csv`     | text  | nome do arquivo csv que você utilizará e que deve estar na pasta raiz do projeto        |
| `jpg`  | text | nome do arquivo jpg que você utilizará como fundo do certificado e que deve estar dentro da pasta resources/assets         |                        |
| `email`  | boolean | enviar email para o participante dono do certificado |


> Existem exemplos de como devem ser os arquivos csv e jpg nesse repositório.


Para o envio de email será preciso alterar as seguintes variáveis de ambiente:


```bash
SMTP_HOST = smtp.host.com
SMTP_PORT = 587
MAIL_USERNAME = your@mail.com
MAIL_PASSWORD = yourpassword
```

> Os certificados serão gerados no formato PDF na pasta tmp
  
  

## 💪 Como contribuir no projeto

1. Faça um **fork** do projeto.

2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`

3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`

4. Envie as suas alterações: `git push origin my-feature`

> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

  

## 📝 Licença

 
Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por PRTE - Tecnologia e Soluções 👋🏽 [Entre em contato!](https://www.linkedin.com/company/somosprte/)


---

# 🌎 English

<h3  align="center">

Reads csv files, generates certificates in pdf format with a jpg background image and sends them by email.

</h3>


Tabela de conteúdos

=================

<!--ts-->

*  [Features](#-features)

*  [How it works](#-how-it-works)

*  [Prerequisites](#prerequisites)

*  [How to contribute](#-how-to-contribute)

*  [License](#-license)

<!--te-->
  
  

## ⚙️ Features

  
* Reads csv files.
* Generates certificate in PDF format using JPG background image.
* Sends email with the attached certificate file

---


## 🚀 How it works

  
  
### Pré-requisitos

 

If you have [VSCode](https://code.visualstudio.com/download) and the [Remote-Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension installed on your computer, there is no other prerequisite. Just run the project! 😲

> If you want to read a little more about it, just go to ["Em busca da independência para o ambiente de desenvolvimento"](https://medium.com/@pedrorenan/em-busca-da-independ%C3%AAncia-para-o-ambiente-de-desenvolvimento-2adc22f6f250).

  

Steps:

  
```bash
# Clone this repository
$ git clone https://github.com/somosprte/certificate-generator-email.git

# Open the project folder in the terminal
$ cd certificate-generator-email

# Open the project with VSCode
$ code .
```

When [VSCode](https://code.visualstudio.com/download)  opens, you will see a message stating that the necessary settings have been detected for the [Remote-Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension to make the magic happen.



<p  align="center">

<img  alt="Remote Containers Dialog"  title="Remote Containers Dialog"  src="./resources/assets/python-diagrams-remote-containers-dialog.png"  width="400px">

</p>

  

Click on “Reopen in Container”. The [VSCode](https://code.visualstudio.com/download)  will restart. Just wait for the environment to get ready for you. It may take a while during the first time, specially if you have never downloaded the necessary containers 🕐. But it's worth it!
  
  

Once done, you will have a terminal inside the [VSCode](https://code.visualstudio.com/download)  that is already inside the container. Everything integrated! Like [Inception](https://www.imdb.com/title/tt1375666/)  🍿.


  
💡 Everything you do in this terminal will be done only inside the container!

  

```bash
# Start the application
$ yarn start
```

Using [Insomnia](https://insomnia.rest/download/), or another API client, make a POST request o https://localhost:3333/generate with the payload:


```JSON
{
	"csv": "example.csv", 
	"jpg": "example.jpg",
	"event": "Evento Teste",
	"email": true
}
```


| parameter | type    | description                                      |
| --------- | ------- | ------------------------------------------------ |
| `csv`     | text  | csv filename in project root        |
| `jpg`  | text | jpg filename to background certificate in resources/assets path       |                        |
| `email`  | boolean | send mail to certificate owner |


> There are examples of what the csv and jpg files should look like in this repository.


To send e-mail, you need to change the following environment variables:


```bash
SMTP_HOST = smtp.host.com
SMTP_PORT = 587
MAIL_USERNAME = your@mail.com
MAIL_PASSWORD = yourpassword
```

> Certificates PDF files will be generated in the folder tmp in project root
  
  

## 💪 How to contribute
  
1. Fork the project.
2. Create a new branch with your changes: `git checkout -b my-feature`
3. Save your changes and create a commit message telling you what you did: `git commit -m" feature: My new feature "`
4. Submit your changes: `git push origin my-feature`
> If you have any questions check this [guide on how to contribute](./CONTRIBUTING.md)
  
---

  

## 📝 License

 
This project is under the license [MIT](./LICENSE).

Made with ❤️ by PRTE - Tecnologia e Soluções 👋🏽 [Get in Touch!](https://www.linkedin.com/company/somosprte/)


---
