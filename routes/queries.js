const getAdmins = `SELECT * FROM admin`;
const getAdminById = `SELECT * FROM admin WHERE id=$1`;
const addAdminQuery = `INSERT INTO admin (name, start_time, end_time, time_slots_available, car_type, price, number_of_slots) VALUES ($1,$2,$3,$4,$5,$6,$7)`;
const updateAdminQuery = `UPDATE admin SET name=$1, start_time=$2, end_time=$3, time_slots_available=$4, car_type=$5, price=$6, number_of_slots=$7 WHERE id=$8`;
const deleteAdminById = `DELETE FROM admin WHERE id=$1`;

const getCustomers = `SELECT * FROM customer`;
const getCustomerById = `SELECT * FROM customer where id=$1`;
const addCustomerQuery = `INSERT INTO customer (slot, status, price, car_type, name) VALUES ($1,$2,$3,$4,$5)`;
const updateCustomerQuery = `UPDATE customer SET slot=$1, status=$2, price=$3, car_type=$4, name=$5 WHERE id=$6`;
const deleteCustomerById = `DELETE FROM customer WHERE id=$1`;

module.exports = {
    getAdmins,
    getAdminById,
    addAdminQuery,
    updateAdminQuery,
    deleteAdminById,
    getCustomers,
    getCustomerById,
    addCustomerQuery,
    updateCustomerQuery,
    deleteCustomerById
};