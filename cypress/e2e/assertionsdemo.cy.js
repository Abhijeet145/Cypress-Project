it('Assertions Demo', () => {

    cy.visit('https://example.cypress.io')
    // cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)').click()
    cy.contains('get').click()
    cy.get('#query-btn')
        .should('contain','Button')
        .and('have.class','query-btn')
        .and('be.visible')
        .and('be.enabled')

    expect(true).to.be.true
    // let name = 'abhijeet';
    // expect(name).to.be.equal('abhijeet')

    // assert.equal(4,5,'NOT EQUAL')
    assert.equal(4,'4','NOT EQUAL')
    //  assert.strictEqual(4,'4','NOT EQUAL')

    
    
})