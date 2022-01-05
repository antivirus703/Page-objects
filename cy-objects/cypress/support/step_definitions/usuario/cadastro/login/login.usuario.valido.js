/// <reference types="cypress" />
/* testesdonorton@teste.com */

/* global Then, When, Given */
const AuthenticationPage = require('../../../../pages/authentication.page')

When('preencho os dados de login com um usuario valido', () => {
    global.usuario.email = 'testesdonorton@teste.com'
    global.usuario.nome = 'Norton Berbert'

    AuthenticationPage.preencheDadosLogin()
})