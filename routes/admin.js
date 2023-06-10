const pool = require('../connection');
const queries= require('./queries');

const getAllAdminDetails =  (req, res)=>{
    try{
        pool.query(queries.getAdmins, (error, result)=>{
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

const getAdminDetails = (req, res)=>{
    try {
        const id = parseInt(req.params.id);
        pool.query(queries.getAdminById, [id], (error, result) => {
            if (!error) {
                res.status(200).json(result.rows);
            } else {
                console.log(error.message);
                throw error;
            }
        });
        pool.end;
    }catch(err){
        console.log(err.message);
    }
}

const addAdminEntry = (req, res)=> {
    try{
        const {name, start_time, end_time, time_slots_available, car_type, price, number_of_slots} = req.body;
        pool.query(queries.addAdminQuery, [name, start_time, end_time, time_slots_available, car_type, price, number_of_slots], (error, result) => {
            if (!error) {
                res.status(200).json(result.rows);
            }
            else {
                console.log(error.message);
                throw error;
            }
        })
        pool.end;
    }catch(err){
        console.log(err.message);
    }
}

const modifyAdminEntry = (req, res)=> {
    try{
        const id = parseInt(req.params.id);
        const {name, start_time, end_time, time_slots_available, car_type, price, number_of_slots} = req.body;
        pool.query(queries.getAdminById, [id], (error, result)=>{
            const NoAdminFound =! result.rows.length;
            if(NoAdminFound){
                res.send("Admin not found in Database");
            }else{
                pool.query(queries.updateAdminQuery, [name, start_time, end_time, time_slots_available, car_type, price, number_of_slots, id], (error, result)=>{
                    if(!error){
                        res.status(200).json(result.rows);
                    }
                    else{ console.log(error.message);
                        throw error;  }
                })
            }
        })
    pool.end;
    }catch(err){
        console.log(err.message);
    }
}

const deleteAdminEntry = (req, res)=> {
    try{
        const id = parseInt(req.params.id);
        pool.query(queries.getAdminById, [id], (error, result)=>{
            const NoAdminFound =! result.rows.length;
            if(NoAdminFound){
                res.send("Admin not found in Database");
            } else{
                pool.query(queries.deleteAdminById, [id], (error, result)=>{
                    if(error){
                        throw error;
                    }
                    else{ 
                        res.status(200).send("Admin Data deleted"); 
                    }
                })
            }
        })
        pool.end;
    }catch(err){
        console.log(err.message);
    } 
}

//console.log(error.message) 

module.exports = {
    getAllAdminDetails,
    getAdminDetails,
    addAdminEntry,
    modifyAdminEntry,
    deleteAdminEntry
}