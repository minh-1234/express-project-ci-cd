const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})
router.get('/apiv1/users', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api for v1 user ok'
    })
})

module.exports = router;