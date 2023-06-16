const getAdmins = `SELECT * FROM admin_table`;
const getAdminById = `SELECT * FROM admin_table WHERE id=$1`;
const addAdminQuery = `INSERT INTO admin_table ( admin_name, slot_date, time_slots_available, car_type, price, number_of_slots,cancellation_fee) VALUES ($1,$2,$3,$4,$5,$6,$7)`;
const updateAdminQuery = `UPDATE admin_table SET admin_name=$1, slot_date=$2, time_slots_available=$3, car_type=$4, price=$5, number_of_slots=$6, cancellation_fee=$7 WHERE id=$8`;
const deleteAdminById = `DELETE FROM admin_table WHERE id=$1`;

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