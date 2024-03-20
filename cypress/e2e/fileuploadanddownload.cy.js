/// <refrence types="cypress"/>
/// <refrence types="cypress-dwonloadfle"/>

it.skip('File Upload Test',()=>{
    cy.visit('https://trytestingthis.netlify.app/');

    cy.get('#myfile').attachFile('lc_2023.png');

})

it('File download Test',()=>{

    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
})