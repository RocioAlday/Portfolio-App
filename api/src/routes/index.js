const { Router } = require('express');

const { sendEmail }= require('../controller/email-nodemailer');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/contact', sendEmail)

module.exports = router;