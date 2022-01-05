/// <reference types="cypress" />
/* testesdonorton@teste.com */

/* global Then, When, Given */
const AuthenticationPage = require('../../../../pages/authentication.page')

When('preencho os dados de login sem informar senha', () => {
    global.usuario.email = 'testesdonorton@teste.com'
    let backupsenha = global.usuario.senha
    global.usuario.senha = ' '
    AuthenticationPage.preencheDadosLogin().then(() => { global.usuario.senha = backupsenha})
})
Then('o sistema notifica que e necessario informar uma senha', () => {
    AuthenticationPage.verificaTratamentoErro('Password is required.')
})