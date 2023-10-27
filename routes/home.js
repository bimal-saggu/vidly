const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('VIDLY APPLICATION');
});

module.exports = router;