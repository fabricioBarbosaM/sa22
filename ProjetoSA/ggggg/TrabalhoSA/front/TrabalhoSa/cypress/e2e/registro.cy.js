describe('Função para listar as Epis que foram retiradas pelos funcionarios', () => {
    it('histórico de retirada de Epi por funcionario', () => {
        cy.visit('http://localhost:5173/');
        cy.get('[data-cy=historico-nome]').eq(2).should('contain', 'Joao')
        cy.get('[data-cy=historico-cpf]').eq(2).should('contain', '12345678912')
        cy.get('[data-cy=historico-epi]').eq(2).should('contain', 'Capacete')

    })
})