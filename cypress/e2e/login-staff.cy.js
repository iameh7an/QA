import Login from "../support/login-staff-class"
import locater from"../fixtures/login-staff-page.json"
let log = new Login()

describe('Faild Login Tests ', () => {
  it('Login  incorrect credentials ', () => {
    cy.visit(log.baseUrl)
    cy.xpath(locater.CountryCode).select(log.ICCountrycode)
    cy.xpath(locater.PhoneNumber).type(log.ICPhoneNumber)
    cy.xpath(locater.Password).type(log.ICPassword)
    cy.intercept('POST', 'https://dev.bildnw.quest/v1/core/auth/jwt/create/').as('loginRequest');
    cy.get('button').contains('Login').should('be.visible').click()
    cy.wait('@loginRequest').then((interception) => {
      expect(interception.response.statusCode).to.equal(401);})
    
  })

  it('Login with Incomplete credentials 1 ', () => {
    cy.visit(log.baseUrl)
    cy.xpath(locater.PhoneNumber).type(log.ICPhoneNumberPattren)
    cy.get('button').contains('Login').should('not.be.disabled')
  })

  it('Login with Incomplete credentials 2 ', () => {
    cy.visit(log.baseUrl)
    cy.xpath(locater.CountryCode).select(log.ICCountrycode)
    cy.xpath(locater.PhoneNumber).type(log.ICPhoneNumber)
    cy.get('button').contains('Login').should('not.be.disabled')
  })

  it('Login Success ', () => {
    cy.visit(log.baseUrl)
    cy.xpath(locater.CountryCode).select(log.Countrycode)
    cy.xpath(locater.PhoneNumber).type(log.PhoneNumber)
    cy.xpath(locater.Password).type(log.Password)
    cy.get('button').contains('Login').click()
    cy.intercept('POST', 'https://dev.bildnw.quest/v1/core/auth/jwt/create/').as('loginRequest');
    cy.get('button').contains('Login').should('be.visible').click()
    cy.wait('@loginRequest').then((interception) => {
      expect(interception.response.statusCode).to.equal(200);})
    cy.get('div').contains('Dashboard')
  })

})

