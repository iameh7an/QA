import Login from "../support/login-staff-class"
import Supplier from "../support/supplier-staff-class"
import Sup_locater from "../fixtures/suppler-staff-page.json"
import log_locater from "../fixtures/login-staff-page.json"
let log = new Login()
let sup = new Supplier()

describe('Supplier Test', () => {
  beforeEach(() => {
    cy.visit("https://staffapp.bildnw.com/")
    cy.xpath(log_locater.CountryCode).select(log.Countrycode)
    cy.xpath(log_locater.PhoneNumber).type(log.PhoneNumber)
    cy.xpath(log_locater.Password).type(log.Password)
    cy.get('button').contains('Login').should('be.visible').click()
  });

  it('Checks if the Supplier number is greater than 0', () => {
    cy.get('div').contains('Supplier').click()
    cy.wait(5000)
    cy.xpath(Sup_locater.numberofSupplier)
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
    cy.xpath(Sup_locater.Suppler_CN_Number)
      .invoke('text')
      .then((cn_number)=>{
        expect(cn_number).equal(sup.CN_number)
      })
  })

  it('Supplier Search By IBAN Number ', () => {
    cy.get('div').contains('Supplier').click()
    cy.get('#search').type(sup.IBAN_number)
    cy.url().should('include', `search=${sup.IBAN_number}`)
  })


  it('Supplier Search By multiple product category ', () => {
    cy.get('div').contains('Supplier').click()
    let i = Math.floor(Math.random() * 3)
    cy.xpath(Sup_locater.Product_Category).type(sup.Product_Category[i])
  })

  it('Supplier Search By Status ', () => {
    cy.get('div').contains('Supplier').click()
    cy.xpath(Sup_locater.Status).type(sup.Status)
  })


  it('Supplier details ', () => {
    cy.get('div').contains('Supplier').click()
    cy.wait(5000)
    cy.get('#search').type(sup.Supplier_Details[0])
    cy.wait(5000)
    cy.xpath(Sup_locater.Supplier_Expand_Button).click()
    cy.xpath(Sup_locater.Supplier_username)
    .invoke('text')
    .then((userName) => {
            let user=userName.trim()
            expect(user).equal(sup.Supplier_Details[1])
          });
    cy.xpath(Sup_locater.Supplier_dob)
     .invoke('text')
     .then((dob) => {
          expect(dob.trim()).equal(sup.Supplier_Details[2])
          });
    cy.xpath(Sup_locater.Supplier_Docoment_file_1)
      .invoke('text')
      .then((Vat) => {
        expect(Vat).equal(sup.Supplier_Details[3])
      });
    cy.xpath(Sup_locater.Supplier_Docoment_file_2)
      .invoke('text')
      .then((Company) => {
        expect(Company).equal(sup.Supplier_Details[4])
      });
    cy.xpath(Sup_locater.Supplier_Docoment_file_3)
      .invoke('text')
      .then((Company) => {
        expect(Company).equal(sup.Supplier_Details[5])
      });

  })

  it('Supplier details  Approve/Reject Button ', () => {
    cy.get('div').contains('Supplier').click()
    cy.wait(5000)
    cy.xpath(Sup_locater.ApproveReject_button).click()
    cy.get("button").contains("Approve / Reject").click()
    cy.get("button").contains("Cancel").click()
  })

})

