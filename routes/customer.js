const pool = require('../connection');
const queries= require('./queries');

const getAllCustomerDetails =  (req, res)=>{
    try{
        pool.query(queries.getCustomers, (error, result)=>{
            if(!error){
                res.status(200).json(result.rows);
            } else{
                console.log(error.message);
                throw error;
            }
        });
        pool.end;
    }catch(err){
        console.log(err.message);
    }
}

const getCustomerDetails = (req, res)=>{
    try{
        const id = req.params.id;
        pool.query(queries.getCustomerById,[id], (error, result)=>{
            if(!error){
                res.status(200).json(result.rows);
            }else{
                console.log(error.message);
                throw error;
            }
        });
        pool.end;
    }catch(err){
        console.log(err.message);
    }
}

const addCustomerEntry = (req, res)=> {
    try{
        const {customer_name, slot_date, time_slot, car_type, slot_status, admin_id} = req.body;
        console.log(req.body);
        pool.query(queries.addCustomerQuery, [customer_name, slot_date, time_slot, car_type, slot_status, admin_id], (error, result)=>{
            console.log(result);
            if(!error){
                pool.query(queries.updateAdminQueryAfterCustAdded, [admin_id], (err, resu)=>{
                    if(!err){
                        res.status(200).json(resu.rows);
                    }else{
                        console.log(error.message);
                        throw error;
                    }
                })
            }
            else{
                console.log(error.message);
                throw error; 
             }
        })
        pool.end;
    }catch(err){
        console.log(err.message);
    }

}

const modifyCustomerEntry = (req, res)=> {
    try{
        const id = req.params.id;
        const {customer_name, slot_date, time_slot, car_type, slot_status, admin_id}= req.body;
        pool.query(queries.updateCustomerQuery, [customer_name, slot_date, time_slot, car_type, slot_status, admin_id, id], (error, result)=>{
            if(!error){
                res.status(200).json(result.rows);
            }
            else{
                console.log(error.message);
                throw error; 
            }
        })
        pool.end;
    }catch(err){
        console.log(err.message);
    }
    
}

const deleteCustomerEntry = (req, res)=> {
    try{
        const id = req.params.id;
        pool.query(queries.deleteCustomerById,[id], (error, result)=>{
            if(error){
                throw error;
            }
            else{ 
                res.status(200).send(result.rows); 
            }
        })
        pool.end;
    }catch(err){
        console.log(err.message);
    }
}

module.exports = {
    getAllCustomerDetails,
    getCustomerDetails,
    addCustomerEntry,
    modifyCustomerEntry,
    deleteCustomerEntry
}