const AuthenticationElements = require('../elements/authentication.elements')

export default class AuthenticationPage {

    static cliqueAcessarAuthentication() {
    return cy.visit('').then(()=> {
        AuthenticationElements.btnSignIn()
        .click().url().should('include','controller=authentication&back=my-account')
    })
    }
    static digitaEmailLogin() {
       return AuthenticationElements.inputEmailLogin().type(global.usuario.email,{force:true})
    }

    static digitaSenhaLogin(options) {
        let senha = global.usuario.senha
        if (options) {
            if(options.enter) {
                senha = `${senha}{enter}`
            }
        }
        return AuthenticationElements.inputSenhaLogin().type(senha,{force:true})
    }

    static preencheDadosLogin(options) {
       return this.digitaEmailLogin().then(()=> {
            this.digitaSenhaLogin(options)
        })
    }

    static clicaRealizarLogin() {
        return AuthenticationElements.btnLogin().click()
    }

    static verificaUsuarioAutenticado() {
        return AuthenticationElements.labelUsuarioAutenticado()
            .should('be.visible')
            .should('have.text', global.usuario.nome)
    }

    static existePainelErro(){
        return AuthenticationElements.painelNotificacaoErro()
                .should('be.visible')
    }

    static verificaTratamentoErro(mensagemValidacao){
        this.existePainelErro().then(()=>{
            return AuthenticationElements.mensagensPainelNotificacaoErro().each((mensagem) => {
                    expect(mensagem.text()).to.equal(mensagemValidacao)
            })
        })
    }


}