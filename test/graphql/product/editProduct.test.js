const { spec } = require('pactum');

describe('Produtos - editProduct', () => {

    it('deve editar um produto existente', async () => {

        await spec()
            .post('http://lojaebac.ebaconline.art.br/graphql')
            .withGraphQLQuery(`
                mutation EditProduct(
                    $id: ID!,
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
                    editProduct(
                        id: $id,
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
                id: 'ID_DO_PRODUTO',
                name: 'Produto Editado QA',
                description: 'Produto atualizado para atividade PactumJS',
                price: 109.90,
                specialPrice: 99.90,
                photos: ['https://exemplo.com/produto-editado.jpg'],
                popular: true,
                quantity: 20,
                visible: true,
                location: 'Loja QA',
                additionalDetails: ['Produto atualizado']
            })
            .expectStatus(200);

    });

});