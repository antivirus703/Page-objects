

export default class AuthenticationElements {
static btnSignIn() {
    return cy.get('.login')
}
static inputEmailLogin() {
    return cy.get('#email')
}
static inputSenhaLogin() {
    return cy.get('#passwd')
}

static btnLogin() {
    return cy.get('#SubmitLogin')
}

static labelUsuarioAutenticado() {
    return cy.get('.account > span')
}

static painelNotificacaoErro() {
    return cy.get('div.alert.alert-danger')
}

static mensagensPainelNotificacaoErro() {
    return this.painelNotificacaoErro().find('ol > li')
}

}
