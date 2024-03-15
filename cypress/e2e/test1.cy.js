///<refrence types = "cypress"/>
it('Goole Search',()=>{

  cy.visit('https://google.com/')
  cy.get('#APjFqb',{timeout:7000}).type('Automation step by step{Enter}')
//   cy.contains('Google Search').click()
  cy.contains('Videos').click()
})