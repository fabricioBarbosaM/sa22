import { Sequelize } from 'sequelize'

const conexao = new Sequelize('postgresql://fabricio:v42UFiIg61Y1ZjQ2iKCM_Q@banco-do-fabas-2808.j77.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full')

try {
    await conexao.authenticate()
    console.log('teste')
} catch (error) {
    console.error('erro:', error)
}

export default conexao