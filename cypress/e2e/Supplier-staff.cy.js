import Login from "../support/login-staff-class.js"
import Supplier from "../support/supplier-staff-class.js"
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
    cy.wait(10000)
    cy.xpath(Sup_locater.numberofSupplier)
      .invoke('text')
      .then((text) => {
        let number = parseInt(text);
        expect(number).to.be.greaterThan(0);
      });
  });

  it('Supplier Search By Name ', () => {
    cy.get('div').contains('Supplier').click()
    cy.wait(5000)
    cy.get("#search").eq(0).type(sup.Supplier_name)
    cy.wait(5000)
    cy.xpath(Sup_locater.Suppler_Name_in_Tbody)
      .invoke('text')
      .then((Sup_name) => {
        expect(Sup_name).equal(sup.Supplier_name)
      })

  })


  it('Supplier Search By CR Number ', () => {
    cy.get('div').contains('Supplier').click()
    cy.get("#search").eq(0).type(sup.CR_number)
    cy.wait(5000)
    cy.xpath(Sup_locater.Suppler_CR_Number)
      .invoke('text')
      .then((cr_number) => {
        expect(cr_number).equal(sup.CR_number)
      })
  })

  it('Supplier Search By IBAN Number ', () => {
    cy.get('div').contains('Supplier').click()
    cy.wait(5000)
    cy.get("#search").eq(0).type(sup.IBAN_number)
    cy.url().should('include', `search=${sup.IBAN_number}`)
  })


  it('Supplier Search By multiple product category ', () => {
    cy.get('div').contains('Supplier').click()
    let i = Math.floor(Math.random() * 3)
    cy.xpath(Sup_locater.Product_Category).click().type(sup.Product_Category[i]).type('{downarrow}').type('{enter}')
  })

  it('Supplier Search By Status ', () => {
    cy.get('div').contains('Supplier').click()
    cy.xpath(Sup_locater.Status).click().type(sup.Status).type('{downarrow}').type('{enter}')
    cy.wait(5000)
    cy.xpath(Sup_locater.Suppler_Status_in_Tbody)
      .invoke('text')
      .then((Sup_status) => {
        expect(Sup_status).equal(sup.Status)
      })
  })

  // Error   
  // file are not include
  it('Supplier details ', () => {
    cy.get('div').contains('Supplier').click()
    cy.wait(5000)
    cy.get("#search").eq(0).type(sup.Supplier_Details[0])
    cy.wait(5000)
   // cy.xpath(Sup_locater.Supplier_Expand_Button).click() //"Supplier_Expand_Button":"//tbody//tr[1]//td[1]//button",
    cy.get('button').filter(':has(.tss-jmallx-MUIDataTableSelectCell-icon)').eq(1).click(); 
    // cy.xpath(Sup_locater.Supplier_username)
    //   .invoke('text')
    //   .then((userName) => {
    //     let user = userName.trim()
    //     expect(user).equal(sup.Supplier_Details[1])  //username -> in test envirment have extra '-' at end of username
    //   });
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
    // cy.xpath(Sup_locater.Supplier_Expand_Button).click()  //"Supplier_Expand_Button":"//tbody//tr[1]//td[1]//button",
    cy.get('button').filter(':has(.tss-jmallx-MUIDataTableSelectCell-icon)').eq(1).click();
    cy.get("button").contains("Approve / Reject").should('be.visible').click()
    cy.get("button").contains("Cancel").should('be.visible').click()
  })


  it('Check IBAN Status 1', () => {
    cy.get('div').contains('Supplier').click()
    cy.wait(5000)
    cy.get("#search").eq(0).type(sup.Not_vf_crnumber)
    cy.xpath(Sup_locater.click_Sup_name).click()
    cy.wait(5000)
    cy.xpath(Sup_locater.IBAN_Status_check_div)
      .invoke('text')
      .then((check) => {
        expect(check).to.not.equal('IBAN ownership verified successfully')
      })


  })

  it('Check IBAN Status 2', () => {
    cy.get('div').contains('Supplier').click()
    cy.wait(5000)
    cy.get("#search").eq(0).type(sup.vf_crnumber)
    cy.xpath(Sup_locater.click_Sup_name).click()
    cy.wait(9000)
    cy.xpath(Sup_locater.IBAN_Status_check_div)
      .invoke('text')
      .then((check) => {
        expect(check).equal('IBAN ownership verified successfully')
      })


  })

  it('inreview supplier to approve', () => {
    cy.get('div').contains('Supplier').click()
    cy.get("#search").eq(0).type(sup.vf_crnumber)
    cy.xpath(Sup_locater.click_Sup_name).click()
    cy.wait(5000)
    cy.xpath(Sup_locater.side_panal_expand_btn).eq(0).click()
    cy.xpath(Sup_locater.side_panal_S_name)
      .invoke('text')
      .then((Name) => {
        expect(Name).equal(sup.Supplier_Details_in_detailsPG[1])
      })
    cy.xpath(Sup_locater.side_panal_S_iban)
      .invoke('text')
      .then((iban) => {
        expect(iban).equal(sup.Supplier_Details_in_detailsPG[2])
      })
    cy.xpath(Sup_locater.side_panal_s_PN)
      .invoke('text')
      .then((Pnumber) => {
        expect(Pnumber).equal(sup.Supplier_Details_in_detailsPG[3])
      })
    cy.xpath(Sup_locater.side_panal_s_CRN)
      .invoke('text')
      .then((crnumber) => {
        expect(crnumber).equal(sup.Supplier_Details_in_detailsPG[4])
      })
    cy.xpath(Sup_locater.side_panal_expand_btn).eq(0).click()
    cy.get('button').contains('Approve / Reject').should('be.visible').click()
    cy.xpath(Sup_locater.checkbok_T_C).eq(0).should('be.visible').check()
    cy.get('button').contains('Submit').should('be.visible').click()
    cy.wait(5000)
    cy.xpath(Sup_locater.check_change_status_toApprove)
      .invoke('text')
      .then((status) => {
        expect(status).equal("Approved")
      })
  })

})

