const getAdmins = `SELECT * FROM public.admin_table`;
const getAdminById = `SELECT * FROM public.admin_table WHERE id=$1`;
const addAdminQuery = `INSERT INTO public.admin_table ( admin_name, slot_date, time_slots_available, car_type, price, number_of_slots,cancellation_fee) VALUES ($1,$2,$3,$4,$5,$6,$7)`;
const updateAdminQuery = `UPDATE public.admin_table SET admin_name=$1, slot_date=$2, time_slots_available=$3, car_type=$4, price=$5, number_of_slots=$6, cancellation_fee=$7 WHERE id=$8`;
const updateAdminQueryAfterCustAdded = `UPDATE public.admin_table SET number_of_slots=number_of_slots-1 WHERE id=$1 RETURNING *`;
const deleteAdminById = `DELETE FROM public.admin_table WHERE id=$1`;

const getCustomers = `SELECT * FROM public.customer_table`;
const getCustomerById = `SELECT a.id,a.customer_name,a.slot_date,a.time_slot,a.car_type,a.slot_status,b.price,b.cancellation_fee FROM customer_table a INNER JOIN public.admin_table b WHERE $1=b.id`;
const addCustomerQuery = `INSERT INTO public.customer_table (customer_name, slot_date, time_slot, car_type, slot_status, admin_id) VALUES ($1,$2,$3,$4,$5,$6)`;
const updateCustomerQuery = `UPDATE public.customer_table SET customer_name=$1, slot_date=$2, time_slot=$3, car_type=$4, slot_status=$5, admin_id=$6 WHERE id=$7`;
const deleteCustomerById = `DELETE FROM public.customer_table WHERE id=$1`;

module.exports = {
    getAdmins,
    getAdminById,
    addAdminQuery,
    updateAdminQuery,
    updateAdminQueryAfterCustAdded,
    deleteAdminById,
    getCustomers,
    getCustomerById,
    addCustomerQuery,
    updateCustomerQuery,
    deleteCustomerById
};