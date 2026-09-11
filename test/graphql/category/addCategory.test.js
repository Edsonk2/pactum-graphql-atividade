const { spec } = require('pactum');

describe('Categorias - addCategory', () => {

    it('deve adicionar uma nova categoria', async () => {

        await spec()
            .post('http://lojaebac.ebaconline.art.br/graphql')
            .withGraphQLQuery(`
                mutation AddCategory($name: String, $photo: String) {
                    addCategory(name: $name, photo: $photo) {
                        name
                        photo
                    }
                }
            `)
            .withGraphQLVariables({
                name: 'Categoria Teste QA',
                photo: 'https://exemplo.com/categoria.jpg'
            })
            .expectStatus(200);
    });

});