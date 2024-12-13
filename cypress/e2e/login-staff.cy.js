import Login from "../support/login-staff-class"
let log = new Login()

describe('Faild Login Tests ', () => {
  it('Login  incorrect credentials ', () => {
    cy.visit(log.baseUrl)
    cy.xpath("//select[@name='countryCode']").select(log.ICCountrycode)
    cy.xpath("//input[@name='phoneNumber']").type(log.ICPhoneNumber)
    cy.xpath("//input[@name='password']").type(log.ICPassword)
    cy.intercept('POST', 'https://dev.bildnw.quest/v1/core/auth/jwt/create/').as('loginRequest');
    cy.get('button').contains('Login').should('be.visible').click()
    cy.wait('@loginRequest').then((interception) => {
      expect(interception.response.statusCode).to.equal(401);})
    
  })

  it('Login with Incomplete credentials 1 ', () => {
    cy.visit(log.baseUrl)
    cy.xpath("//input[@name='phoneNumber']").type(log.ICPhoneNumberPattren)
    cy.get('button').contains('Login').should('not.be.disabled')
  })

  it('Login with Incomplete credentials 2 ', () => {
    cy.visit(log.baseUrl)
    cy.xpath("//select[@name='countryCode']").select(log.ICCountrycode)
    cy.xpath("//input[@name='phoneNumber']").type(log.ICPhoneNumber)
    cy.get('button').contains('Login').should('not.be.disabled')
  })

  it('Login Success ', () => {
    cy.visit(log.baseUrl)
    cy.xpath("//select[@name='countryCode']").select(log.Countrycode)
    cy.xpath("//input[@name='phoneNumber']").type(log.PhoneNumber)
    cy.xpath("//input[@name='password']").type(log.Password)
    cy.get('button').contains('Login').click()
    cy.intercept('POST', 'https://dev.bildnw.quest/v1/core/auth/jwt/create/').as('loginRequest');
    cy.get('button').contains('Login').should('be.visible').click()
    cy.wait('@loginRequest').then((interception) => {
      expect(interception.response.statusCode).to.equal(200);})
    cy.get('div').contains('Dashboard')
  })
})