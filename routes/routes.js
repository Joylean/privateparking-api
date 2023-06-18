const {Router} = require('express');
const admin = require('./admin');
const customer = require('./customer');

const router = Router();

router.get('/',(req,res)=>{
    res.send("API route connected");
})

//admin
router.get('/admin', admin.getAllAdminDetails );
router.get('/admin/:id', admin.getAdminDetails);
router.post('/admin', admin.addAdminEntry);
router.put('/admin/:id', admin.modifyAdminEntry);
router.delete('/admin/:id', admin.deleteAdminEntry);

//customer
router.get('/customer', customer.getAllCustomerDetails );
router.get('/customer/:id', customer.getCustomerDetails );
router.post('/customer', customer.addCustomerEntry );
router.put('/customer/:id', customer.modifyCustomerEntry );
router.delete('/customer/:id', customer.deleteCustomerEntry );

module.exports = router;