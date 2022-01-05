/// <reference types="cypress" />

/* testesdonorton@teste.com */

/* global Then, When, Given */
const AuthenticationPage = require('../../../../pages/authentication.page')

When('preencho os dados de login sem informar email', () => {
    global.usuario.email = ' '
    global.usuario.senha = '123456'
    AuthenticationPage.preencheDadosLogin()
})

Then('o sistema notifica que e necessario informar um email', () => {
    AuthenticationPage.verificaTratamentoErro('An email address required.')
})
