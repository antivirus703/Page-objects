/// <reference types="cypress" />
/* global Then, When, Given */
//Inserido em global steps pois o GIVEN é identico em todos os cenários//
const AuthenticationPage = require('../../../../pages/authentication.page')

Given('Cliquei para realizar sign-in', () => {
    AuthenticationPage.cliqueAcessarAuthentication()
})