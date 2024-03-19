import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage();
describe('All login tests',()=>{
    it('Login Test 1', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.contains('Admin').click()
    })
    
    
    
    it('Login test 2', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.contains('Admin').click()
    })
})
