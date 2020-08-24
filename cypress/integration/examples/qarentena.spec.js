context('qarentena', () => {

    const base_url = 'http://www.lourencodemonaco.com.br/qarentena';
  
    it('Check homepage', () => {
        cy.visit(base_url)
        cy.percySnapshot();
    })
  
    it('Check blog page', () => {
        cy.visit(base_url+'/blog-2')
        cy.percySnapshot();
    })
  
    it('Check about page', () => {
        cy.visit(base_url+'/about')
        cy.percySnapshot();
    })

    it('Check contact page', () => {
        cy.visit(base_url+'/contact')
        cy.percySnapshot();
    })

    it('Check register page', () => {
        cy.visit(base_url+'/cadastro')
        cy.percySnapshot();
    })

    it('Check search page', () => {
        cy.visit(base_url+'/pesquisa')
        cy.percySnapshot();
    })

  })
  