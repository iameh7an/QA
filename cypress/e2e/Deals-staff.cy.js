import Login from "../support/login-staff-class"
import deal from "../support/Deals-staff-class";
let log = new Login()
let de = new deal()

describe('Deals Test', () => {
  beforeEach(() => {
    cy.visit("https://staffapp.bildnw.com/")
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

  // it('Date Filter', () => {
  //   cy.get('div').contains('Deals').click()
  //   cy.navigateTo("https://staffapp.bildnw.com/?page=1", '&created_at_after=2023-12-01&created_at_before=2024-12-01');
  //   // cy.get('#mantine-m9sot37lg-target').type('01/12/2023 – 01/12/2024')
  // })

  it('Clicking on client name', () => {
    cy.get('div').contains('Deals').click()
    cy.get('#search').type(de.name_1)
    cy.xpath("//tr[@data-testid='MUIDataTableBodyRow-0']//td[3]").click()
    cy.xpath("//div[contains(@class,'mz_top_title_bar')]").contains(de.name_1)

  })

  it('Deals details ', () => {
    cy.get('div').contains('Deals').click()
    cy.wait(5000)
    cy.get('#search').type(de.Deal_details[0])
    cy.wait(5000)
    cy.xpath("//tr[@data-testid='MUIDataTableBodyRow-0']//button[@type='button']").click()
    cy.xpath("//div[contains(@class, '_finance_value_adm3e_38 ')]/p[2]").contains(de.Deal_details[1])
      .invoke('text')
      .then((status) => {
        let user = status.trim()
        expect(user).equal(de.Deal_details[1])
      });
    cy.xpath("//div[contains(@class, '_finance_value_adm3e_38 ')]/p[3]").contains(de.Deal_details[2])
      .invoke('text')
      .then((stage) => {
        let user = stage.trim()
        expect(user).equal(de.Deal_details[2])
      });
    cy.xpath("//div[contains(@class, '_finance_value_adm3e_38 ')]/p[2]").contains(de.Deal_details[3])
      .invoke('text')
      .then((Receiver) => {
        let user = Receiver.trim()
        expect(user).equal(de.Deal_details[3])
      });
    cy.xpath("//div[contains(@class, '_finance_value_adm3e_38 ')]/p[4]").contains(de.Deal_details[4])
      .invoke('text')
      .then((phone) => {
        let user = phone.trim()
        expect(user).equal(de.Deal_details[4])
      });
  })

  it('Click on view details ', () => {
    cy.get('div').contains('Deals').click()
    cy.xpath("//tr[@data-testid='MUIDataTableBodyRow-0']//button[@type='button']").click()
    cy.get("a").contains("View details").click()
    cy.wait(5000)

  })


})