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
        const id = parseInt(req.params.id);
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
    const {slot, status, price, car_type, name} = req.body;
    let insertQuery = `insert into customer(slot, status, price, car_type, name) 
                       values('${slot}', '${status}', '${price}','${car_type}','${name}')`

    pool.query(queries.addCustomerQuery, [slot, status, price, car_type, name], (error, result)=>{
        if(!error){
            res.status(200).json(result.rows);
        }
        else{
            console.log(error.message);
            throw error; 
         }
    })
    pool.end;
}

const modifyCustomerEntry = (req, res)=> {
    try{
        const id = parseInt(req.params.id);
        let {slot, status, price, car_type, name}= req.body;
        pool.query(queries.getCustomerById, [id], (error, result)=>{
            const NoCustomerFound =! result.rows.length;
            if(NoCustomerFound){
                res.send("Customer not found in Database");
            }else{
                pool.query(queries.updateCustomerQuery, [slot, status, price, car_type, name, id], (error, result)=>{
                    if(!error){
                        res.status(200).json(result.rows);
                    }
                    else{
                        console.log(error.message);
                        throw error; 
                    }
                })
            }
        })

    pool.end;
    }catch(err){
        console.log(err.message);
    }
    
}

const deleteCustomerEntry = (req, res)=> {
    try{
        const id = parseInt(req.params.id);
        pool.query(queries.getCustomerById,[id], (error, result)=>{
            const NoCustomerFound =! result.rows.length;
            if(NoCustomerFound){
                res.send("Customer not found in Database");
            }
            else{ 
                pool.query(queries.deleteCustomerById,[id], (error, result)=>{
                    if(error){
                        throw error;
                    }
                    else{ 
                        res.status(200).send("Customer Data deleted"); 
                    }
                }) 
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