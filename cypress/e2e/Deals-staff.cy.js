import Login from "../support/login-staff-class"
import deal from "../support/Deals-staff-class";
let log = new Login()
let de = new deal()

describe('Deals Test', () => {
  beforeEach(() => {
    cy.visit('https://staffapp.bildnw.com/')
    cy.xpath("//select[@name='countryCode']").select(log.Countrycode)
    cy.xpath("//input[@name='phoneNumber']").type(log.PhoneNumber)
    cy.xpath("//input[@name='password']").type(log.Password)
    cy.get('button').contains('Login').click()
  });

  it('Deals Search By Name 1', () => {
    cy.get('div').contains('Deals').click()
    cy.get('#search').type(de.name)
    cy.wait(5000)
    cy.xpath("//tr[@data-testid='MUIDataTableBodyRow-0']//td[3]")
      .invoke('text')
      .then((Name) => {
        expect(Name).equal(de.name)
      });
  })

  it('Deals Search By Name 2 ', () => {
    cy.get('div').contains('Deals').click()
    cy.get('#search').type(de.name_1)
    cy.wait(5000)
    cy.xpath("//tr[@data-testid='MUIDataTableBodyRow-0']//td[3]")
      .invoke('text')
      .then((Name) => {
        expect(Name).equal(de.name_1)
      });
  })

  it('Deal stage ', () => {
    cy.get('div').contains('Deals').click()
    cy.xpath('//input[@placeholder="Deal Stage"]').type(de.getDealStage())
  })

  it('Payment stage', () => {
    cy.get('div').contains('Deals').click()
    cy.xpath('//input[@placeholder="Payment Status"]').type(de.getPaymentStatus())
    cy.wait(10000)
    cy.xpath("//tr[@data-testid='MUIDataTableBodyRow-0']//td[8]")
      .invoke('text')
      .then((stage) => {
        expect(stage).equal(de.getPaymentStatus())
      });
  })


  it('Clicking on client name', () => {
    cy.get('div').contains('Deals').click()
    cy.get('#search').type(de.name_1)
    cy.xpath("//tr[@data-testid='MUIDataTableBodyRow-0']//td[3]").click()
    cy.xpath("//div[contains(@class,'mz_top_title_bar')]").contains(de.name_1)

  })

  it('Deals details ', () => {
    cy.get('div').contains('Deals').click()
    cy.wait(5000)
    cy.get('#search').type(de.Deal_Quotation)
    cy.wait(5000)
    cy.xpath("//tr[@data-testid='MUIDataTableBodyRow-0']//button[@type='button']").click()
    cy.xpath("//div[contains(@class, '_finance_value_adm3e_38 ')]/p[2]").contains('In Review')
      .invoke('text')
      .then((status) => {
        let user = status.trim()
        expect(user).equal('In Review')
      });
    cy.xpath("//div[contains(@class, '_finance_value_adm3e_38 ')]/p[3]").contains('Quotation received')
      .invoke('text')
      .then((stage) => {
        let user = stage.trim()
        expect(user).equal('Quotation received')
      });
    cy.xpath("//div[contains(@class, '_finance_value_adm3e_38 ')]/p[2]").contains('ABC')
      .invoke('text')
      .then((Receiver) => {
        let user = Receiver.trim()
        expect(user).equal('ABC')
      });
    cy.xpath("//div[contains(@class, '_finance_value_adm3e_38 ')]/p[4]").contains('+966574845121')
      .invoke('text')
      .then((stage) => {
        let user = stage.trim()
        expect(user).equal('+966574845121')
      });
  })

  it('Click on view details ', () => {
    cy.get('div').contains('Deals').click()
    cy.xpath("//tr[@data-testid='MUIDataTableBodyRow-0']//button[@type='button']").click()
    cy.get("a").contains("View details").click()
    cy.wait(5000)

  })


})