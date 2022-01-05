/// <reference types="cypress" />
/* global Then, When, Given */
const AuthenticationPage = require('../../../../pages/authentication.page')

Then('o sistema realiza meu login com sucesso me autenticando na pagina', () => {
    AuthenticationPage.verificaUsuarioAutenticado()
})

Then('o sistema notifica o usuario que houve um problema com a autenticaçao', () => {
    AuthenticationPage.verificaTratamentoErro('Authentication failed.')
})

And('clico para realizar login', () => {
    AuthenticationPage.clicaRealizarLogin()
})