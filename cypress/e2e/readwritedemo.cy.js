///<refrence types = "cypress"/>

before(function(){
    cy.fixture('example.json').as('test_data')
})
it('Read files using Fixure',function(){
    cy.fixture('example.json').then((data)=>{
        cy.log(data.name)
        cy.log(data.email)
    })
    cy.log(this.test_data.name)
    cy.log(this.test_data.email)
})



it('Read file using readFile()',()=>{
    cy.readFile('./cypress/fixtures/example.json').then((data)=>{
        cy.log(data.name)
    })
})

it('Write file demo using writeFile()',()=>{
    cy.writeFile('sample.txt','Hello, I am testing some write file demo using writefile function\n')
    cy.writeFile('sample.txt','Now trying to add multiple lines in same file',{flag:'a+'})
})