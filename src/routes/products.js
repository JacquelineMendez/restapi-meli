const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const products = require('../sample.json');
console.log(products);

router.get('/',(req, res) => {
    res.json(products);
});

router.post('/',(req, res) => {
     const { id, producto, atributos, imagen }= req.body;
     if (id && producto && atributos && imagen) {
         const id = products.length + 1;
         const newProduct = {...req.body, id};
         products.push(newProduct);
         res.json(products);
        res.json('saved');
     }else {
        res.json({error:'Wrong petition'});
     }
   
});
 
router.put('/:id', (req, res) =>  {
    const {id} = req.params;
    const { producto, atributos, imagen }= req.body;
    if (producto && atributos && imagen) {
        _.each(products,(product, i) => {
            if (product.id === id){
                product.producto = producto;
                product.atributos = atributos;
                product.imagen  = imagen;
            }
        });
        res.json(products);
    } else {
        res.status(500).json({error: 'There was an error'});
    }
});

router.delete('/:id', (req, res) =>  {
    const { id } = req.params;
   _.each(products,(product,i) => {
       if (product.id == id){
           products.splice(i,1);
       }
   })
    res.send('products');
});
module.exports = router;