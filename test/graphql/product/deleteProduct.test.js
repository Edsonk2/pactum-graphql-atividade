const { spec } = require('pactum');

describe('Produtos - deleteProduct', () => {

    it('deve excluir um produto pelo ID', async () => {

        await spec()
            .post('http://lojaebac.ebaconline.art.br/graphql')
            .withGraphQLQuery(`
                mutation DeleteProduct($id: ID!) {
                    deleteProduct(id: $id) {
                        name
                        description
                        price
                    }
                }
            `)
            .withGraphQLVariables({
                id: 'ID_DO_PRODUTO'
            })
            .expectStatus(200);

    });

});