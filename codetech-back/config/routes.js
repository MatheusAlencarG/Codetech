const express = require('express');
const routes = express.Router();
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');

// {
//     id: 1,
//     name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
//     rating: 4.6,
//     oldPrice: 600.00,
//     price: 500.00,
//     image: '/static/media/laptop-image-one.f580d5f3d384ca253beb.png',
//     container: 'ShelfEmphasis' ou 'ShelfSimilar' ou 'News' ou 'FirstNews'
// }
let db = [
    {
        id: 1,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 4.6,
        oldPrice: 1000.00,
        price: 800.00,
        image: '/static/media/laptop-image-one.f580d5f3d384ca253beb.png',
        container: 'ShelfEmphasis'
    },
    {
        id: 2,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 5,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-two.70f097224df6c48323b8.png',
        container: 'ShelfEmphasis'
    },
    {
        id: 3,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 3.5,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-one.f580d5f3d384ca253beb.png',
        container: 'ShelfEmphasis'
    },
    {
        id: 4,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 4.6,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-two.70f097224df6c48323b8.png',
        container: 'ShelfEmphasis'
    },
    {
        id: 5,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 4,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-one.f580d5f3d384ca253beb.png',
        container: 'ShelfEmphasis'
    },
    {
        id: 6,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 4.6,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-two.70f097224df6c48323b8.png',
        container: 'ShelfEmphasis'
    },
    {
        id: 7,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 2,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-one.f580d5f3d384ca253beb.png',
        container: 'ShelfEmphasis'
    },
    {
        id: 8,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 0,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-two.70f097224df6c48323b8.png',
        container: 'ShelfEmphasis'
    },
    {
        id: 9,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 1.5,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-one.f580d5f3d384ca253beb.png',
        container: 'ShelfSimilar'
    },
    {
        id: 10,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 4.6,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-two.70f097224df6c48323b8.png',
        container: 'ShelfSimilar'
    },
    {
        id: 11,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 4.6,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-one.f580d5f3d384ca253beb.png',
        container: 'ShelfSimilar'
    },
    {
        id: 12,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 5,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-two.70f097224df6c48323b8.png',
        container: 'ShelfSimilar'
    },
    {
        id: 13,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 4.6,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-one.f580d5f3d384ca253beb.png',
        container: 'ShelfSimilar'
    },
    {
        id: 14,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 3,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-two.70f097224df6c48323b8.png',
        container: 'ShelfSimilar'
    },
    {
        id: 15,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 4.6,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-one.f580d5f3d384ca253beb.png',
        container: 'ShelfSimilar'
    },
    {
        id: 16,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 4,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-two.70f097224df6c48323b8.png',
        container: 'ShelfSimilar'
    },
    {
        id: 17,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 4.6,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-news.8efa5df7d5a2ca65afa1.png',
        container: 'FirstNews'
    },
    {
        id: 18,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 2,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-one.f580d5f3d384ca253beb.png',
        container: 'News'
    },
    {
        id: 19,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 4.6,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-two.70f097224df6c48323b8.png',
        container: 'News'
    },
    {
        id: 20,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 4,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-one.f580d5f3d384ca253beb.png',
        container: 'News'
    },
    {
        id: 21,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 4.6,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-two.70f097224df6c48323b8.png',
        container: 'News'
    },
    {
        id: 22,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 5,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-one.f580d5f3d384ca253beb.png',
        container: 'News'
    },
    {
        id: 23,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 0,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-two.70f097224df6c48323b8.png',
        container: 'News'
    },
    {
        id: 24,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 4.6,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-one.f580d5f3d384ca253beb.png',
        container: 'News'
    },
    {
        id: 25,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 2,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-two.70f097224df6c48323b8.png',
        container: 'News'
    },
    {
        id: 26,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 4.6,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-one.f580d5f3d384ca253beb.png',
        container: 'News'
    },
    {
        id: 27,
        name: 'Notebook VAIO® FE15 Intel® Core™ i7 Windows 11 Home 8GB 512GB SSD Full HD - Prata',
        rating: 1,
        oldPrice: 600.00,
        price: 500.00,
        image: '/static/media/laptop-image-two.70f097224df6c48323b8.png',
        container: 'News'
    }
];

routes.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

routes.get('/', (_, res) => {
    return res.json(db);
});

routes.get('/emphasis', (_, res) => {
    let emphasis = db.filter((product) => product.container === 'ShelfEmphasis');

    if (!emphasis.length) return res.status(404).send('No products found with Container ShelfEmphasis');

    return res.status(200).json(emphasis);
});

routes.get('/similars', (_, res) => {
    const similars = db.filter((product) => product.container === 'ShelfSimilar');

    if (!similars.length) return res.status(404).send('No products found with Container ShelfSimilar');

    return res.status(200).json(similars);
});

routes.get('/news', (_, res) => {
    const news = db.filter((product) => product.container === 'News' || product.container === 'FirstNews');

    if (!news.length) return res.status(404).send('No products found with Container News');

    return res.status(200).json(news);
});

routes.get('/getByListId', (req, res) => {
    if (!req.query.listId) return res.status(400).send('listId must be declare on query');

    const listId = req.query.listId.split(';');
    const listProduct = [];

    listId.forEach(id => {
        const product = db.filter((product) => product.id == id);
        listProduct.push(product);
    });

    return res.status(200).json(listProduct.flat());
})


module.exports = routes;