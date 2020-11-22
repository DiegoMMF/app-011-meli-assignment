/**
 * @fileoverview receives a product_id as param in url
 * @returns json containing product description. * 
 */
const axios = require('axios').default;

const transform = inputObject => {
    const outputObject = {
        author: {
            name: "Diego M.",
            lastname: "Maldini Freyre"
        },
        item: {
            id: inputObject.id,
            title: inputObject.title,
            price: {
                currency: inputObject.currency_id,
                amount: Math.floor(inputObject.price),
                decimals: Math.floor((inputObject.price - Math.floor(inputObject.price)) * 100)
            },
            picture: inputObject.thumbnail,
            condition: inputObject.condition,
            free_shipping: inputObject.shipping.free_shipping,
            sold_quantity: inputObject.sold_quantity,
            description: ""
        }
    }
    return outputObject;
}

const getDescriptionString = (object) => {
    const itemDescriptionURL = `https://api.mercadolibre.com/items/${object.item.id}/description`;
    axios.get(itemDescriptionURL)
        .then(response => {
            object.item.description = response.data.plain_text;
            return object
        })
        .catch(error => console.log(error))

};

const getProductDescription = (req, res) => {
    const itemURL = `https://api.mercadolibre.com/items/${req.params.id}`
    axios.get(itemURL)
        .then(response => transform(response.data))
        .then(object => object.item.description = getDescriptionString(object))
        .catch(error => console.log(error))
    res.json("Hola");
};

module.exports = getProductDescription;