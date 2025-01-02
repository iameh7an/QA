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

    // it('Client list Grater than 0', () => {
    //     cy.get('div').contains('Clients').click()
    //     cy.wait(10000)
    //     cy.xpath(Cl_locater.numberofClient)
    //         .invoke('text')
    //         .then((text) => {
    //             let number = parseInt(text);
    //             expect(number).to.be.greaterThan(0);
    //         });

    // })

    // it('Client Search By Company Name ', () => {
    //     cy.get('div').contains('Clients').click()
    //     cy.wait(5000)
    //     cy.get("#search").eq(0).type(Cl.Company_name)
    //     cy.wait(5000)
    //     cy.xpath(Cl_locater.Companyname)
    //         .invoke('text')
    //         .then((companyname) => {
    //             expect(companyname).equal(Cl.Company_name)
    //         })

    // })

    // it('Client Search By User Name ', () => {
    //     cy.get('div').contains('Clients').click()
    //     cy.wait(5000)
    //     cy.get("#search").eq(0).type(Cl.User_name)
    //     cy.wait(5000)
    //     cy.xpath(Cl_locater.Username)
    //         .invoke('text')
    //         .then((username) => {
    //             expect(username).equal(Cl.User_name)
    //         })

    // })

    // it('Client Search By CR Number ', () => {
    //     cy.get('div').contains('Clients').click()
    //     cy.wait(5000)
    //     cy.get("#search").eq(0).type(Cl.CR_number)
    //     cy.wait(5000)
    //     cy.xpath(Cl_locater.CrNumber)
    //         .invoke('text')
    //         .then((crnumber) => {
    //             expect(crnumber).equal(Cl.CR_number)
    //         })

    // })

    // it('Check Client Status ', () => {
    //     cy.get('div').contains('Clients').click()
    //     cy.wait(5000)
    //     let i = Math.floor(Math.random() * 5)
    //     cy.xpath(Cl_locater.SearchBYStatus).click().type(Cl.Client_Status[i]).type('{downarrow}').type('{enter}')
    //     cy.wait(10000)
    //     cy.xpath(Cl_locater.Clientstatus)
    //         .invoke('text')
    //         .then((status) => {
    //             expect(status).equal(Cl.Client_Status[i])
    //         })

    // })

    // it('Date Filter', () => {
    //     cy.get('div').contains('Clients').click()
    //     cy.get('button').contains("Created Date").click()
    //     cy.xpath(Cl_locater.Pick_first_Date).click()
    //     cy.wait(1000)
    //     cy.xpath(Cl_locater.Pick_last_Date).click()
    //     cy.wait(1000)
    //     cy.xpath(Cl_locater.ByDate)
    //         .invoke('text')
    //         .then((T_Date) => {
    //             console.log(`date is= ${T_Date}`)
    //             const target = new Date(T_Date);
    //             const start = new Date(Cl.Date_filter[0]);
    //             const end = new Date(Cl.Date_filter[1]);
    //             let temp = target >= start && target <= end;
    //             expect(temp).equal(true)
    //         })

    // });

    // it('Pagination test', () => {
    //     let CompanyName
    //     cy.get('div').contains('Clients').click()
    //     cy.wait(5000)
    //     cy.xpath(Cl_locater.Companyname)
    //         .invoke('text')
    //         .then((companyname) => {
    //             CompanyName = companyname
    //         })
    //     cy.xpath(Cl_locater.pagination_page_2).should('be.visible').click()
    //     cy.wait(5000)
    //     cy.xpath(Cl_locater.Companyname)
    //         .invoke('text')
    //         .then((companyname) => {
    //             expect(companyname).to.not.equal(CompanyName)
    //         })

    // })


    // it('Approved client have approved credit ',()=>{
    //     cy.get('div').contains('Clients').click()
    //     cy.wait(5000)
    //     cy.get("#search").eq(0).type("المهيدب, بن لادن and المغاولة")
    //     cy.wait(5000)
    //     cy.xpath(Cl_locater.ApprovedCredit_)
    //         .invoke('text')
    //         .then((credit)=>{
    //             let Cr = parseInt(credit)
    //             expect(Cr).to.be.greaterThan(0)
    //         })
    //     cy.xpath(Cl_locater.ApprovedCredit_).click()
    //     cy.wait(5000)
    //     cy.xpath(Cl_locater.select_For_change_Of_Credit).select('true')
    //     cy.xpath(Cl_locater.Click_on_Continue_button).click()
    //     cy.get('button').contains('Yes').should('be.visible').click()
    // })

    // it('client side bar Details', () => {
    //     cy.get('div').contains('Clients').click()
    //     cy.wait(5000)
    //     cy.get('#search').eq(0).type(Cl.Client_side_bar_Details[0])
    //     cy.wait(5000)
    //     cy.xpath(Cl_locater.Companyname).click()
    //     cy.wait(5000)
    //     cy.xpath(Cl_locater.Side_panel_expand_btn).click({ force: true })
    //     cy.wait(1000)
    //     cy.xpath(Cl_locater.Client_SidePanal_PN)
    //         .invoke('text')
    //         .then((PhoneNumber) => {
    //             expect(PhoneNumber).equal(Cl.Client_side_bar_Details[1])
    //         })
    //     cy.xpath(Cl_locater.Client_sp_IDN)
    //         .invoke('text')
    //         .then((ID_Number) => {
    //             expect(ID_Number).equal(Cl.Client_side_bar_Details[2])
    //         })
    //     cy.xpath(Cl_locater.Client_sp_CRN)
    //         .invoke('text')
    //         .then((CrNumber) => {
    //             expect(CrNumber).equal(Cl.Client_side_bar_Details[3])
    //         })
    //     cy.xpath(Cl_locater.Client_sp_CRName)
    //         .invoke('text')
    //         .then((CrName) => {
    //             expect(CrName).equal(Cl.Client_side_bar_Details[0])
    //         })
    //     // cy.wait(5000)
    //     // cy.scrollTo('right');
    //     // cy.get('button').contains('Impersonate user').should('be.visible')

    // })

    // it('preapprove or reject a Client', () => {
    //     cy.get('div').contains('Clients').click()
    //     cy.wait(5000)
    //     cy.xpath(Cl_locater.ApprovedCredit_).click()
    //     cy.wait(5000)
    //     cy.xpath(Cl_locater.select_For_change_Of_Credit).select('true')
    //     cy.xpath(Cl_locater.Click_on_Continue_button).click()
    //     cy.get('button').contains('Yes').should('be.visible').click()
    // })

    // // Pre approval tab Edit 
    // it("edit Client info pre approval", () => {
    //     cy.get('div').contains('Clients').click()
    //     cy.wait(5000)
    //     cy.get("#search").eq(0).type(Cl.client_preapprove_tab[0])
    //     cy.wait(5000)
    //     cy.xpath(Cl_locater.ApprovedCredit_).click()
    //     cy.wait(5000)
    //     cy.get('div').contains('Edit').click()
    //     cy.xpath(Cl_locater.Select_input_search).eq(0).click()
    //     cy.xpath(Cl_locater.input_search).type(Cl.client_preapprove_tab[1]).type('{downarrow}').type('{enter}')
    //     cy.xpath(Cl_locater.Credit_Input).clear().type(Cl.client_preapprove_tab[2])
    //     cy.xpath(Cl_locater.Revenue_input).clear().type(Cl.client_preapprove_tab[3])
    //     cy.xpath(Cl_locater.Select_month).click()
    //     cy.xpath(Cl_locater.Profit_loss_per).clear().type(Cl.client_preapprove_tab[4])
    //     cy.xpath(Cl_locater.Outstanding_loan_input).clear().type(Cl.client_preapprove_tab[5])
    //     cy.xpath(Cl_locater.Select_Company_Establish_year_input).eq(0).click()
    //     cy.xpath(Cl_locater.Select_year).click()
    //     cy.xpath(Cl_locater.Select_Company_Establish_year_input).eq(0).click()
    //     cy.xpath(Cl_locater.audited_financials_years).click().type('{downarrow}').type('{enter}')
    //     cy.get('button').contains('Continue').eq(0).should('be.visible').click()
    // })

    // // Compeny info tab Edit 

    // it('Edit Company info Edit_first_section_Financials ', () => {
    //     let filePath='../fixtures/pdf-sample.pdf'
    //     cy.get('div').contains('Clients').click()
    //     cy.wait(5000)
    //     cy.get("#search").eq(0).type(Cl.client_Company_tab_Financials[0])
    //     cy.wait(5000)
    //     cy.xpath(Cl_locater.ApprovedCredit_).click()
    //     cy.wait(5000)
    //     cy.get('button').contains('Company Info').click()
    //     cy.get('button').contains('Edit').eq(0).click()
    //     cy.xpath(Cl_locater.Input_credit_line).eq(0).type(Cl.client_Company_tab_Financials[1])
    //     cy.get('input[type="radio"][value="false"]').eq(0).check({force: true});
    //     cy.get('input[type="radio"][value="false"]').eq(1).check({force: true});
    //     cy.get('input[type="file"]').eq(0).attachFile(filePath)
    //     cy.get('input[type="file"]').eq(1).attachFile(filePath)
    //     cy.xpath(Cl_locater.vat_number_input).eq(7).type(Cl.client_Company_tab_Financials[2])
    //     cy.get('input[type="file"]').eq(2).attachFile(filePath)
    //     cy.get('button').contains('Save and Continue').should('be.visible').click()

    // })


    // it('Edit Company info Edit_2nd_section_Projects', () => {
    //     let filePath = '../fixtures/pdf-sample.pdf'
    //     cy.get('div').contains('Clients').click()
    //     cy.wait(5000)
    //     cy.get("#search").eq(0).type(Cl.client_Company_tab_Projects[0])
    //     cy.wait(5000)
    //     cy.xpath(Cl_locater.ApprovedCredit_).click()
    //     cy.wait(5000)
    //     cy.get('button').contains('Company Info').click()
    //     cy.xpath(Cl_locater.Click_Edit_button).eq(1).click()
    //     cy.xpath(Cl_locater.input_search).eq(5).click({ force: true }).type('{downarrow}', { force: true }).type('{enter}', { force: true })
    //     cy.xpath(Cl_locater.input_search).eq(5).click({ force: true })
    //     cy.xpath(Cl_locater.Text_input).eq(1).click().type(Cl.client_Company_tab_Projects[1])
    //     // cy.get('input[type="range"]').eq(0)   Becaue this Range input not working in test envirment
    //     // .invoke('val', 33)
    //     // .trigger('input', { force: true })
    //     cy.get('input[type="range"]').eq(1)
    //         .invoke('val', 33)
    //         .trigger('input', { force: true })
    //     cy.xpath(Cl_locater.CheckBox_Project_edit).eq(2).check()
    //     cy.xpath(Cl_locater.CheckBox_Project_edit).eq(3).check()
    //     cy.xpath(Cl_locater.input_search).eq(6).click({ force: true }).type('{downarrow}', { force: true }).type('{enter}', { force: true })
    //     cy.xpath(Cl_locater.Text_input).eq(2).click().type(Cl.client_Company_tab_Projects[2])
    //     cy.xpath(Cl_locater.Input_file).eq(0).attachFile(filePath)
    //     cy.xpath(Cl_locater.Input_file).eq(1).attachFile(filePath)
    //     cy.xpath(Cl_locater.Saveandcontinue).eq(6).scrollIntoView().click()
    // })

    // it('Edit Company info Edit_3rd_section_Other', () => {
    //     let filePath = '../fixtures/pdf-sample.pdf'
    //     cy.get('div').contains('Clients').click()
    //     cy.wait(5000)
    //     cy.get("#search").eq(0).type(Cl.client_Company_tab_Projects[0])
    //     cy.wait(5000)
    //     cy.xpath(Cl_locater.ApprovedCredit_).click()
    //     cy.wait(5000)
    //     cy.get('button').contains('Company Info').click()
    //     cy.xpath(Cl_locater.Click_Edit_button).eq(2).click()
    //     cy.wait(5000)
    //     cy.xpath(Cl_locater.File_input).eq(0).attachFile(filePath)
    //     cy.xpath(Cl_locater.Expire_date).eq(1).click()
    //     cy.xpath(Cl_locater.Select_calender_date).click()
    //     cy.xpath(Cl_locater.Expire_date).eq(1).click()
    //     cy.xpath(Cl_locater.File_input).eq(1).attachFile(filePath)
    //     cy.xpath(Cl_locater.Expire_date).eq(2).click()
    //     cy.xpath(Cl_locater.Select_calender_date).click()
    //     cy.xpath(Cl_locater.Expire_date).eq(2).click()
    //     cy.xpath(Cl_locater.Text_input).eq(1).type("2")
    //     cy.xpath(Cl_locater.File_input).eq(2).attachFile(filePath)
    //     cy.xpath(Cl_locater.File_input).eq(3).attachFile(filePath)
    //     cy.xpath(Cl_locater.File_input).eq(4).attachFile(filePath)
    //     cy.xpath(Cl_locater.Saveandcontinue).eq(6).scrollIntoView().click()

    // })


    // // edit File Tab

    // it('Edit File tab', () => {
    //     let filePath = '../fixtures/pdf-sample.pdf'
    //     cy.get('div').contains('Clients').click()
    //     cy.wait(5000)
    //     cy.get("#search").eq(0).type(Cl.client_Files_tab[0])
    //     cy.wait(5000)
    //     cy.xpath(Cl_locater.ApprovedCredit_).click()
    //     cy.wait(5000)
    //     cy.get('button').contains('Files').click()
    //     cy.wait(5000)
    //     cy.get('button').contains('Upload a new file').click()
    //     cy.xpath(Cl_locater.Input_file).attachFile(filePath)
    //     cy.xpath(Cl_locater.Text_input).eq(0).click({ force: true }).type('{downarrow}', { force: true }).type('{enter}', { force: true })
    //     cy.xpath(Cl_locater.Text_input).eq(1).type(Cl.client_Files_tab[1])
    //     cy.xpath(Cl_locater.Text_input).eq(2).type(Cl.client_Files_tab[1])
    //     cy.xpath(Cl_locater.Saveandcontinue).eq(7).click()
    // })

    // Assesment Tab Test case
    it("Assesment Tab Add fixed file", () => {
        let filePath = '../fixtures/Financial_Asssessment_file_fixed.xlsx'
        cy.get('div').contains('Clients').click()
        cy.wait(5000)
        cy.get("#search").eq(0).type(Cl.client_Assesment_tab[0])
        cy.wait(5000)
        cy.xpath(Cl_locater.ApprovedCredit_).click()
        cy.wait(5000)
        cy.xpath(Cl_locater.Input_radio_assessment).eq(0).click()
        cy.wait(5000)
        cy.xpath(Cl_locater.Input_file).eq(0).attachFile(filePath)
        cy.intercept('PATCH', Cl.File_API).as('checkFileresponse');
        cy.get('button').contains('Submit Assessment').should('be.visible').click()
        cy.wait('@checkFileresponse').then((interception) => {
            expect(interception.response.statusCode).to.equal(200);
        })
    })

    it("Assesment Tab Add ERROR file", () => {
        let filePath = '../fixtures/Financials_Sample_Data.xlsx'
        cy.get('div').contains('Clients').click()
        cy.wait(5000)
        cy.get("#search").eq(0).type(Cl.client_Assesment_tab[0])
        cy.wait(5000)
        cy.xpath(Cl_locater.ApprovedCredit_).click()
        cy.wait(5000)
        cy.xpath(Cl_locater.Input_radio_assessment).eq(0).click()
        cy.wait(5000)
        cy.xpath(Cl_locater.Input_file).eq(0).attachFile(filePath)
        cy.intercept('PATCH', Cl.File_API).as('checkFileresponse');
        cy.get('button').contains('Submit Assessment').should('be.visible').click()
        cy.wait('@checkFileresponse').then((interception) => {
            expect(interception.response.statusCode).to.equal(400);
        })
        cy.xpath(Cl_locater.error_tost).should('be.visible')
    })

    //Assesment Tab Technical Tab
    it("Assesment Tab Technical Tab", () => {
        cy.get('div').contains('Clients').click()
        cy.wait(5000)
        cy.get("#search").eq(0).type(Cl.client_Assesment_RandP[0])
        cy.wait(5000)
        cy.xpath(Cl_locater.ApprovedCredit_).click()
        cy.wait(5000)
        cy.xpath(Cl_locater.Input_radio_assessment).eq(0).click()
        cy.wait(5000)
        cy.get('button').contains('Technical').click()
        cy.xpath(Cl_locater.input_search).eq(0).click({ force: true }).type('{downarrow}', { force: true }).type('{enter}', { force: true })
        cy.xpath(Cl_locater.input_search).eq(0).click({ force: true })
        cy.xpath(Cl_locater.Input_radio).eq(4).click({ force: true })
        cy.xpath(Cl_locater.input_search).eq(1).click({ force: true }).type('{downarrow}', { force: true }).type('{enter}', { force: true })
        cy.xpath(Cl_locater.input_search).eq(1).click({ force: true })
        cy.xpath(Cl_locater.input_search).eq(2).click({ force: true }).type('{downarrow}', { force: true }).type('{enter}', { force: true })
        cy.xpath(Cl_locater.input_search).eq(2).click({ force: true })
        cy.xpath(Cl_locater.Input_radio).eq(9).click({ force: true })
        cy.xpath(Cl_locater.Input_radio).eq(13).click({ force: true })
        cy.xpath(Cl_locater.Input_radio).eq(16).click({ force: true })
        cy.xpath(Cl_locater.Input_radio).eq(20).click({ force: true })
        cy.xpath(Cl_locater.input_search).eq(3).click({ force: true }).type('{downarrow}', { force: true }).type('{enter}', { force: true })
        cy.xpath(Cl_locater.input_search).eq(3).click({ force: true })
        cy.get('button').contains('Save Assessment').should('be.visible').click({force:true})
    })


    // Assesment Tab Reject and approve
    it("Assesment Tab Reject and approve", () => {
        cy.get('div').contains('Clients').click()
        cy.wait(5000)
        cy.get("#search").eq(0).type(Cl.client_Assesment_RandP[0])
        cy.wait(5000)
        cy.xpath(Cl_locater.ApprovedCredit_).click()
        cy.wait(5000)
        cy.xpath(Cl_locater.Input_radio_assessment).eq(0).click()
        cy.wait(5000)
        cy.get('button').contains('Approve / Reject').should('be.visible').click()
        cy.xpath(Cl_locater.InP_radio_Reject).eq(6).click()
        // cy.wait(5000)
        cy.xpath(Cl_locater.input_search).eq(5).click({ force: true }).type('{downarrow}', { force: true }).type('{enter}', { force: true })
        cy.xpath(Cl_locater.input_search).eq(5).click({ force: true })
        cy.xpath(Cl_locater.Submit).eq(6).click();
        cy.get('div').contains('Client has been Rejected for Credit.').should('be.visible')
        cy.get('button').contains('Approve / Reject').should('be.visible').click()
        cy.xpath(Cl_locater.InP_radio_Approve).eq(6).click()
        cy.xpath(Cl_locater.Text_input).eq(1).type(Cl.client_Assesment_RandP[1])
        cy.xpath(Cl_locater.input_defult).eq(0).type(Cl.client_Assesment_RandP[2])
        cy.xpath(Cl_locater.input_hidden).eq(5).then(($input) => {
            $input[0].value = '3';
        })
        cy.xpath(Cl_locater.input_hidden).eq(6).then(($input) => {
            $input[0].value = '5';
        })
        cy.xpath(Cl_locater.input_search).eq(5).click({ force: true }).type('{downarrow}', { force: true }).type('{enter}', { force: true })
        cy.xpath(Cl_locater.input_search).eq(5).click({ force: true })
        cy.xpath(Cl_locater.input_search).eq(6).click({ force: true }).type('{downarrow}', { force: true }).type('{enter}', { force: true })
        cy.xpath(Cl_locater.input_search).eq(6).click({ force: true })
        cy.xpath(Cl_locater.input_search).eq(7).click({ force: true }).type('{downarrow}', { force: true }).type('{enter}', { force: true })
        cy.xpath(Cl_locater.input_search).eq(7).click({ force: true })
        cy.xpath(Cl_locater.Submit).eq(6).click();



    })

})