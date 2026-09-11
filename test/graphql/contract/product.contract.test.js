const { spec } = require('pactum');
const { like } = require('pactum-matchers');

describe('Contrato - addProduct', () => {

    it('deve respeitar o contrato da mutation addProduct', async () => {

        await spec()
            .post('http://lojaebac.ebaconline.art.br/graphql')
            .withGraphQLQuery(`
                mutation AddProduct(
                    $name: String,
                    $description: String,
                    $price: Float,
                    $specialPrice: Float,
                    $photos: [String],
                    $popular: Boolean,
                    $quantity: Float,
                    $visible: Boolean,
                    $location: String,
                    $additionalDetails: [String]
                ) {
                    addProduct(
                        name: $name,
                        description: $description,
                        price: $price,
                        specialPrice: $specialPrice,
                        photos: $photos,
                        popular: $popular,
                        quantity: $quantity,
                        visible: $visible,
                        location: $location,
                        additionalDetails: $additionalDetails
                    ) {
                        name
                        description
                        price
                        specialPrice
                        photos
                        popular
                        quantity
                        visible
                        location
                        additionalDetails
                    }
                }
            `)
            .withGraphQLVariables({
                name: 'Contrato Produto QA',
                description: 'Produto para contrato',
                price: 99.90,
                specialPrice: 89.90,
                photos: ['https://exemplo.com/produto.jpg'],
                popular: false,
                quantity: 10,
                visible: true,
                location: 'Loja QA',
                additionalDetails: ['Teste contrato']
            })
            .expectStatus(200)
            .expectJsonMatch({
                data: {
                    addProduct: {
                        name: like(null),
                        description: like(null),
                        price: like(null),
                        specialPrice: like(null),
                        photos: like(null),
                        popular: like(null),
                        quantity: like(null),
                        visible: like(null),
                        location: like(null),
                        additionalDetails: like(null)
                    }
                }
            });

    });

});
