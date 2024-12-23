import Client from "../support/Client-staff";
import Login from "../support/login-staff-class";
import log_locater from "../fixtures/login-staff-page.json"
import Cl_locater from "../fixtures/Client-staff-page.json";

let Cl = new Client()
let log = new Login()

describe('Client Test', () => {

    beforeEach(() => {
        cy.visit("https://staffapp.bildnw.com/")
        cy.xpath(log_locater.CountryCode).select(log.Countrycode)
        cy.xpath(log_locater.PhoneNumber).type(log.PhoneNumber)
        cy.xpath(log_locater.Password).type(log.Password)
        cy.get('button').contains('Login').should('be.visible').click()
    });

    it('Client list Grater than 0', () => {
        cy.get('div').contains('Clients').click()
        cy.wait(10000)
        cy.xpath(Cl_locater.numberofClient)
            .invoke('text')
            .then((text) => {
                let number = parseInt(text);
                expect(number).to.be.greaterThan(0);
            });

    })

    it('Client Search By Company Name ', () => {
        cy.get('div').contains('Clients').click()
        cy.wait(5000)
        cy.get("#search").eq(0).type(Cl.Company_name)
        cy.wait(5000)
        cy.xpath(Cl_locater.Companyname)
            .invoke('text')
            .then((companyname) => {
                expect(companyname).equal(Cl.Company_name)
            })

    })

    it('Client Search By User Name ', () => {
        cy.get('div').contains('Clients').click()
        cy.wait(5000)
        cy.get("#search").eq(0).type(Cl.User_name)
        cy.wait(5000)
        cy.xpath(Cl_locater.Username)
            .invoke('text')
            .then((username) => {
                expect(username).equal(Cl.User_name)
            })

    })

    it('Client Search By CR Number ', () => {
        cy.get('div').contains('Clients').click()
        cy.wait(5000)
        cy.get("#search").eq(0).type(Cl.CR_number)
        cy.wait(5000)
        cy.xpath(Cl_locater.CrNumber)
            .invoke('text')
            .then((crnumber) => {
                expect(crnumber).equal(Cl.CR_number)
            })

    })

    it('Check Client Status ', () => {
        cy.get('div').contains('Clients').click()
        cy.wait(5000)
        let i = Math.floor(Math.random() * 5)
        cy.xpath(Cl_locater.SearchBYStatus).click().type(Cl.Client_Status[i]).type('{downarrow}').type('{enter}')
        cy.wait(10000)
        cy.xpath(Cl_locater.Clientstatus)
            .invoke('text')
            .then((status) => {
                expect(status).equal(Cl.Client_Status[i])
            })

    })

    it('Date Filter', () => {
        cy.get('div').contains('Clients').click()
        cy.get('button').contains("Created Date").click()
        cy.xpath(Cl_locater.Pick_first_Date).click()
        cy.wait(1000)
        cy.xpath(Cl_locater.Pick_last_Date).click()
        cy.wait(1000)
        cy.xpath(Cl_locater.ByDate)
            .invoke('text')
            .then((T_Date) => {
                console.log(`date is= ${T_Date}`)
                const target = new Date(T_Date);
                const start = new Date(Cl.Date_filter[0]);
                const end = new Date(Cl.Date_filter[1]);
                let temp = target >= start && target <= end;
                expect(temp).equal(true)
            })

    });

    it('Pagination test', () => {
        let CompanyName
        cy.get('div').contains('Clients').click()
        cy.wait(5000)
        cy.xpath(Cl_locater.Companyname)
            .invoke('text')
            .then((companyname) => {
                CompanyName = companyname
            })
        cy.xpath(Cl_locater.pagination_page_2).should('be.visible').click()
        cy.wait(5000)
        cy.xpath(Cl_locater.Companyname)
            .invoke('text')
            .then((companyname) => {
                expect(companyname).to.not.equal(CompanyName)
            })

    })


    it('Approved client have approved credit ',()=>{
        cy.get('div').contains('Clients').click()
        cy.wait(5000)
        cy.get("#search").eq(0).type("المهيدب, بن لادن and المغاولة")
        cy.wait(5000)
        cy.xpath(Cl_locater.ApprovedCredit_)
            .invoke('text')
            .then((credit)=>{
                let Cr = parseInt(credit)
                expect(Cr).to.be.greaterThan(0)
            })
        cy.xpath(Cl_locater.ApprovedCredit_).click()
        cy.wait(5000)
        cy.xpath(Cl_locater.select_For_change_Of_Credit).select('true')
        cy.xpath(Cl_locater.Click_on_Continue_button).click()
        cy.get('button').contains('Yes').should('be.visible').click()
    })


})