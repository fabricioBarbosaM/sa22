describe('Deve permitir o funcionario retirar EPI', () => {
    it('Deve retirar a epi solicitada pelo funcionario liberado com suas credenciais', () => {
        cy.visit('http://localhost:5173/historicoRetirada');
        cy.get('[data-cy=nome-retirada]').type('Joao');
        cy.get('[data-cy=cpf-retirada]').type('12345678912');
        cy.get('[data-cy=epi-retirada]').type('Capacete');
        cy.get('[data-cy=botao-retirada]').click();
    })
})