describe('Função de adicionar EPI', () => {
  
    it('Deve adicionar a EPI solicitada', () => {
        cy.visit('http://localhost:5173/CadastrarEpi');
        cy.get('[data-cy=nome-epi]').type('capacete');
        cy.get('[data-cy=quantidade-epi]').type('10');
        cy.get('[data-cy=adicionar-epi]').click();
      });
    });


describe('Função de editar EPI', () => {
    it('Deve editar a EPI solicitada', () => {
        cy.visit('http://localhost:5173/CadastrarEpi');
        cy.get('[data-cy=editar-epi]').first().click();
        cy.get('[data-cy=nome-editar]').clear().type('Oculos');
        cy.get('[data-cy=quantidade-editar]').clear().type('7');
        cy.get('[data-cy=botaoEditar2]').click();
    })
})

describe('Função de deletar EPI', () => {
    it('Deve deletar a EPI selecionada', () => {
        cy.visit('http://localhost:5173/CadastrarEpi');
        cy.get('body tr:last [data-cy=excluir-epi]').click();
    })
})
  