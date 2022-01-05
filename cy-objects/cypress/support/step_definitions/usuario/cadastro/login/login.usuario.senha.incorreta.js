/// <reference types="cypress" />
/* global Then, When, Given */
const AuthenticationPage = require('../../../../pages/authentication.page')

When('preencho os dados de login com um usuario valido e senha incorreta', () => {
    global.usuario.email = 'testesdonorton@teste.com'
    let backupSenha = global.usuario.senha
    global.usuario.senha = 'senha invalida'

    AuthenticationPage.preencheDadosLogin()
})
