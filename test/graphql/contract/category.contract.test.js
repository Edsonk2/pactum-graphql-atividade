const { spec } = require('pactum');
const { like } = require('pactum-matchers');

describe('Contrato - addCategory', () => {

    it('deve respeitar o contrato da mutation addCategory', async () => {

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
                name: 'Contrato QA',
                photo: 'https://exemplo.com/contrato.jpg'
            })
            .expectStatus(200)
            .expectJsonMatch({
                data: {
                    addCategory: {
                        name: like(null),
                        photo: like(null)
                    }
                }
            });

    });

});