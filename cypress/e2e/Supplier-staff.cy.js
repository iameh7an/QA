import Login from "../support/login-staff-class"
import Supplier from "../support/supplier-staff-class"
let log = new Login()
let sup = new Supplier()

describe('Supplier Test', () => {
  beforeEach(() => {
    cy.visit(log.baseUrl)
    cy.xpath("//select[@name='countryCode']").select(log.Countrycode)
    cy.xpath("//input[@name='phoneNumber']").type(log.PhoneNumber)
    cy.xpath("//input[@name='password']").type(log.Password)
    cy.get('button').contains('Login').click()
  });

  it('Checks if the Supplier number is greater than 0', () => {
    cy.get('div').contains('Supplier').click()
    cy.wait(5000)
    cy.xpath("//div[contains(@class, 'mz_list_data_count')]/div[2]")
      .invoke('text')
      .then((text) => {
        let number = parseInt(text);
        expect(number).to.be.greaterThan(0);
      });
  });

  it('Supplier Search By Name ', () => {
    cy.get('div').contains('Supplier').click()
    cy.get('#search').type(sup.Supplier_name)

  })


  it('Supplier Search By CR Number ', () => {
    cy.get('div').contains('Supplier').click()
    cy.get('#search').type(sup.CN_number)
  })

  it('Supplier Search By IBAN Number ', () => {
    cy.get('div').contains('Supplier').click()
    cy.get('#search').type(sup.IBAN_number)
    cy.url().should('include', `search=${sup.IBAN_number}`)
  })


  it('Supplier Search By multiple product category ', () => {
    cy.get('div').contains('Supplier').click()
    let i = Math.floor(Math.random() * 3)
    cy.xpath('//input[@placeholder="Product Category"]').type(sup.Product_Category[i])
  })

  it('Supplier Search By Status ', () => {
    cy.get('div').contains('Supplier').click()
    cy.xpath("//input[@placeholder='Status']").type(sup.Status)
  })


  it('Supplier details ', () => {
    cy.get('div').contains('Supplier').click()
    cy.wait(5000)
    cy.get('#search').type(sup.Supplier_name)
    cy.wait(5000)
    cy.xpath("//tr[@data-testid='MUIDataTableBodyRow-0']//button[@type='button']").click()
    // cy.xpath("//div[contains(@class, 'mz_client_quickview_values')]/p[1]")
    // .invoke('text')
    // .then((userName) => {
    //         let user=userName.trim()
    //         expect(user).equal(sup.Supplier_userName)
    //       });
    // cy.xpath("//div[contains(@class, 'mz_client_quickview_values')]/p[3]")
    //  .invoke('text')
    //  .then((dob) => {
    //       expect(dob.trim()).equal(sup.Supplier_dob)
    //       });
    cy.xpath("//div[contains(@class, 'mz_client_quickview_questions _questions_adm3e_28')]/div[1]/p[1]")
      .invoke('text')
      .then((Vat) => {
        expect(Vat).equal(' Vat Registration')
      });
    cy.xpath("//div[contains(@class, 'mz_client_quickview_questions _questions_adm3e_28')]/div[2]/p[1]")
      .invoke('text')
      .then((Company) => {
        expect(Company).equal('Company Profile')
      });
    cy.xpath("//div[contains(@class, 'mz_client_quickview_questions _questions_adm3e_28')]/div[3]/p[1]")
      .invoke('text')
      .then((Company) => {
        expect(Company).equal('List of Customers')
      });

  })

  it('Supplier details  Approve/Reject ', () => {
    cy.get('div').contains('Supplier').click()
    cy.wait(5000)
    cy.xpath("//tr[@data-testid='MUIDataTableBodyRow-7']//button[@type='button']").click()
    cy.get("button").contains("Approve / Reject").click()
    cy.get("button").contains("Cancel").click()
  })

})