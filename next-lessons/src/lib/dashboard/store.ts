import {customers, invoices, revenue, users} from "./dashboard-data";
import {formatCurrency} from "../utils";


export async function fetchRevenue(){
    console.log("fake fetch revenue");
    return revenue
}

export async function fetchLatestInvoices(){
    console.log("fake fetch ..........");
    return invoices
}

export async function fetchCardData(){
    console.log("fake fetch ..........");

    const numberOfInvoices = Number(11 ?? '0');
    const numberOfCustomers = Number(23 ?? '0');
    const totalPaidInvoices = formatCurrency(10.0 ?? '0');
    const totalPendingInvoices = formatCurrency(10.00 ?? '0');

    return {
        numberOfCustomers,
        numberOfInvoices,
        totalPaidInvoices,
        totalPendingInvoices,
    };
}


export async function searchInvoices(){
    return invoices
}

export async function invoiceTotalPages(){
    return 10
}

export async function fetchInvoiceById(id:string){
    invoices.map((invoice)=>{
        if(invoice.customer_id===id) return invoice
    })
    return invoices[0]
}

export async function fetchCustomers(){
    return customers
}

export async function fetchFilteredCustomers(query:string){
    customers.map((customer)=>{
        if(customer.id===query){
            return customer
        }
    })
}

export async function getUser(email: string) {
    return users[0]
}