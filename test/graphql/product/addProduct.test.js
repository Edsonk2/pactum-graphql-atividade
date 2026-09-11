const { spec } = require('pactum');

describe('Produtos - addProduct', () => {

    it('deve adicionar um novo produto', async () => {

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
                        categories {
                            name
                            photo
                        }
                    }
                }
            `)
            .withGraphQLVariables({
                name: 'Produto Teste QA',
                description: 'Produto criado para atividade PactumJS',
                price: 99.90,
                specialPrice: 89.90,
                photos: ['https://exemplo.com/produto.jpg'],
                popular: false,
                quantity: 10,
                visible: true,
                location: 'Loja QA',
                additionalDetails: ['Teste PactumJS']
            })
            .expectStatus(200);

    });

});