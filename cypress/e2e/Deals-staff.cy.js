import Login from "../support/login-staff-class"
import deal from "../support/Deals-staff-class";
import log_locater from "../fixtures/login-staff-page.json"
import de_locater from "../fixtures/Deals-staff-page.json"
let log = new Login()
let de = new deal()

describe('Deals Test', () => {
  beforeEach(() => {
    cy.visit("https://staffapp.bildnw.com/")
    cy.xpath(log_locater.CountryCode).select(log.Countrycode)
    cy.xpath(log_locater.PhoneNumber).type(log.PhoneNumber)
    cy.xpath(log_locater.Password).type(log.Password)
    cy.get('button').contains('Login').should('be.visible').click()
  });

  it('Deals Search By Name 1', () => {
    cy.get('div').contains('Deals').click()
    cy.wait(5000)
    cy.get('#search').type(de.name)
    cy.wait(5000)
    cy.xpath(de_locater.ClientName_tr_td3)
      .invoke('text')
      .then((Name) => {
        expect(Name).equal(de.name)
      });
  });

  it('Deals Search By Name 2 ', () => {
    cy.get('div').contains('Deals').click()
    cy.wait(5000)
    cy.get('#search').type(de.name_1)
    cy.wait(5000)
    cy.xpath(de_locater.ClientName_tr_td3)
      .invoke('text')
      .then((Name) => {
        expect(Name).equal(de.name_1)
      });
  });

  it('Deal stage ', () => {
    cy.get('div').contains('Deals').click()
    cy.xpath(de_locater.deal_stage).type(de.getDealStage())
  });

  it('Payment stage', () => {
    cy.get('div').contains('Deals').click()
    cy.xpath(de_locater.Payment_Status).type(de.getPaymentStatus())
    cy.wait(10000)
    cy.xpath("//tbody//tr[1]//td[8]")
      .invoke('text')
      .then((stage) => {
        expect(stage).equal(de.getPaymentStatus())
      });
  });

  it('Date Filter', () => {
    cy.get('div').contains('Deals').click()
    cy.get('button').contains("Created Date").click()
    cy.xpath(de_locater.Pick_first_Date).click()
    cy.wait(1000)
    for(let i=1;i<=12;i++){
      cy.xpath(de_locater.Move_Calender_Previus_Date).click()
    }
    cy.xpath(de_locater.Pick_last_Date).click()
  });

  it('Clicking on client name', () => {
    cy.get('div').contains('Deals').click()
    cy.wait(5000)
    cy.get('#search').type(de.name_1)
    cy.wait(5000)
    cy.xpath(de_locater.Client_name_click).click()
    cy.xpath(de_locater.Client_name_titalbar).contains(de.name_1)

  });

  it('Deals details ', () => {
    cy.get('div').contains('Deals').click()
    cy.wait(5000)
    cy.get('#search').type(de.Deal_details[0])
    cy.wait(5000)
    cy.xpath(de_locater.Deal_Expand_Button).click()
    cy.xpath(de_locater.Current_Status).eq(0) 
      .invoke('text')
      .then((status) => {
        let user = status.trim()
        expect(user).equal(de.Deal_details[1])
      });
    cy.xpath(de_locater.Detail_Deal_Stage).eq(0)
      .invoke('text')
      .then((stage) => {
        let user = stage.trim()
        expect(user).equal(de.Deal_details[2])
      });
    cy.xpath(de_locater.Delivery_Deal_Receiver).eq(1)
      .invoke('text')
      .then((Receiver) => {
        let user = Receiver.trim()
        expect(user).equal(de.Deal_details[3])
      });
    cy.xpath(de_locater.Delivery_Deal_Phone).eq(0) 
      .invoke('text')
      .then((phone) => {
        let user = phone.trim()
        expect(user).equal(de.Deal_details[4])
      });
  })

  // //Error
  // it('Click on view details', () => {
  //   cy.get('div').contains('Deals').should('be.visible').click();
  //   cy.xpath(de_locater.Deal_Expand_Button).click();  
  //   cy.xpath("//a").contains("View details").click();//Error when move to new page
  // });

  it(' Change Deal Status inReview to Approved', () => {
    cy.get('div').contains('Deals').click()
    cy.xpath(de_locater.deal_status).type(de.Deal_status_INREV)
    cy.wait(5000)
    cy.xpath(de_locater.click_on_QuotationNO).click();
    cy.get('button').contains("Approve / Reject").should('be.visible').click()
    cy.xpath(de_locater.CheckBox_for_T_C).eq(1).check()
    cy.get('button').contains('Submit').should('be.visible').click()
    cy.xpath(de_locater.dealStatus_tital_page)
      .invoke('text')
      .then((status)=>{
        expect(status).equal("Approved")
      })

  });

  it(' Change Deal Status Reject to Approved', () => {
    cy.get('div').contains('Deals').click()
    cy.xpath(de_locater.deal_status).type(de.Deal_status_REJ)
    cy.wait(5000)
    cy.xpath(de_locater.click_on_QuotationNO).click();
    cy.get('button').contains("Approve / Reject").should('be.visible').click()
    cy.xpath(de_locater.CheckBox_for_T_C).eq(1).check()
    cy.get('button').contains('Submit').should('be.visible').click()
    cy.xpath(de_locater.dealStatus_tital_page)
      .invoke('text')
      .then((status)=>{
        expect(status).equal("Approved")
      })
  });


  it('Deals Sidebar Client Details', () => {
    cy.get('div').contains('Deals').click()
    cy.wait(5000)
    cy.xpath("//input[@name='search']").should("be.visible").type(de.Client_details[0])
    cy.wait(5000)
    cy.xpath(de_locater.click_on_QuotationNO).click()
    cy.xpath("//div[contains(@class,'mz_right_panel_wrapper')]//span").eq(0).click()
    cy.wait(5000)
    cy.xpath("//div[contains(@class,'mantine-Tabs-root')]//div[2]//div[3]//div[3]//div[2]")
      .invoke('text')
      .then((PhoneNumber) => {
        expect(PhoneNumber).equal(de.Client_details[2])
      })
    cy.xpath("//div[contains(@class,'mantine-Tabs-root')]//div[2]//div[3]//div[7]//div[2]")
      .invoke('text')
      .then((CrNumber) => {
        expect(CrNumber).equal(de.Client_details[3])
      })
    cy.xpath("//div[contains(@class,'mantine-Tabs-root')]//div[2]//div[3]//div[9]//div[2]")
      .invoke('text')
      .then((CrName) => {
        expect(CrName).equal(de.Client_details[1])
      })
  });

  


})