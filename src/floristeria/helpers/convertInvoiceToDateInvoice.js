// import { parse, } from 'date-fns';

import moment from 'moment';


export const convertInvoiceToDateInvoice = ( invoices = [] ) => {

    return invoices.map( invoice => ({
        ...invoice,
        invoiceDate: moment( invoice.invoiceDate ).format('MMM Do YY'),
        dueDate: moment( invoice.dueDate ).format('MMM Do YY '),
    }));
       
}
