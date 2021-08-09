const { Router } = require('express');
const router = Router();

router.get ('/test',(req, res) => {
    const data = {
        "name":"MELI APP",
        "website":"Meli.com"
    }
    res.json(data);

});

module.exports = router;