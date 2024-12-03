describe ('Função deve adicionar funcionario', () => {
    it('deve adicionar um funcionario conforme solicitado', () => {
        cy.visit('http://localhost:5173/CadastrarFuncionario');
        cy.get('[data-cy=nome-funcionario]').type('Joao');
        cy.get('[data-cy=cpf-funcionario]').type('12312312312');
        cy.get('[data-cy=adicionarFuncionario]').click();
    })
})

describe('Função deve editar informações de funcionario', () => {
    it('deve editar informações conforme solicitado', () => {
        cy.visit('http://localhost:5173/CadastrarFuncionario');
        cy.get('[data-cy=btnEditarFuncionario]').first().click();
        cy.get('[data-cy=nomeFuncionario-editar]').clear().type('Gabriel');
        cy.get('[data-cy=cpfFuncionario-editar]').clear().type('45645645665');
        cy.get('[data-cy=botao-editarFuncionario]').click();
    })
})

describe('Função deve excluir funcionario', () => {
    it('deve deletar funcionario conforme solicitado', () => {
        cy.visit('http://localhost:5173/CadastrarFuncionario');
        cy.get('body tr:last [data-cy=btnExcluirFuncionario]').click();
    })
})