const { spec } = require('pactum');

describe('Categorias - editCategory', () => {

    it('deve editar uma categoria existente', async () => {

        await spec()
            .post('http://lojaebac.ebaconline.art.br/graphql')
            .withGraphQLQuery(`
                mutation EditCategory(
                    $id: ID!,
                    $name: String,
                    $photo: String
                ) {
                    editCategory(
                        id: $id,
                        name: $name,
                        photo: $photo
                    ) {
                        name
                        photo
                    }
                }
            `)
            .withGraphQLVariables({
                id: 'ID_DA_CATEGORIA',
                name: 'Categoria Editada QA',
                photo: 'https://exemplo.com/categoria-editada.jpg'
            })
            .expectStatus(200);

    });

});