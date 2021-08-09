const { Router } = require('express');
const router = Router();

const fetch = require('node-fetch');

router.get('/', async (req, res) => {
   const response = await fetch('https://api.mercadolibre.com/categories/MLA403656/attributes/conditional');
   const products = await response.json();
   res.json(products);
    res.send('products');
});

module.exports = router;