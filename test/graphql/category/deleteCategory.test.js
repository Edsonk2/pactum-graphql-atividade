const { spec } = require('pactum');

describe('Categorias - deleteCategory', () => {

    it('deve excluir uma categoria pelo ID', async () => {

        await spec()
            .post('http://lojaebac.ebaconline.art.br/graphql')
            .withGraphQLQuery(`
                mutation DeleteCategory($id: ID!) {
                    deleteCategory(id: $id) {
                        name
                        photo
                    }
                }
            `)
            .withGraphQLVariables({
                id: 'ID_DA_CATEGORIA'
            })
            .expectStatus(200);

    });

});