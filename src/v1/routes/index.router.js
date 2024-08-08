const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})
router.get('/api/users', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api for user ok'
    })
})

module.exports = router;