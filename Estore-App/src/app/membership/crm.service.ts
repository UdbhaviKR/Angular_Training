import { Injectable } from '@angular/core';
import { Customer } from './models/customer';

@Injectable({ providedIn: 'root'})
export class CRMService {

  constructor() {  }

  //CREATE
  addCustomer(customer: Customer): void {  }

  //READ (All)
  getAllCustomers(): Customer[] {
    return [];
  }

  //READ (Single)
  getCustomerByEmail(email: string): Customer | undefined {
    return undefined;
  }

  //UPDATE
  updateCustomer(updatedCustomer: Customer): void {
    
  }

  //DELETE
  deleteCustomer(email: string): void {
   
  }

  //Utility
  private saveToStorage(customers: Customer[]): void {
    
  }

  //Clear All
  clearAll(): void {
   
  }
}