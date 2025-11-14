import { Injectable } from '@angular/core';
import { Customer } from './models/customer';

@Injectable({ providedIn: 'root'})
export class CRMService {

  private storageKey = 'customers';

  constructor() {
    // Initialize localStorage if empty
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify([]));
    }
  }

  //CREATE
  addCustomer(customer: Customer): void {
    const customers = this.getAllCustomers();
    customers.push(customer);
    this.saveToStorage(customers);
  }

  //READ (All)
  getAllCustomers(): Customer[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  //READ (Single)
  getCustomerByEmail(email: string): Customer | undefined {
    const customers = this.getAllCustomers();
    return customers.find(c => c.email === email);
  }

  //UPDATE
  updateCustomer(updatedCustomer: Customer): void {
    const customers = this.getAllCustomers();
    const index = customers.findIndex(c => c.email === updatedCustomer.email);
    if (index !== -1) {
      customers[index] = updatedCustomer;
      this.saveToStorage(customers);
    }
  }

  //DELETE
  deleteCustomer(email: string): void {
    let customers = this.getAllCustomers();
    customers = customers.filter(c => c.email !== email);
    this.saveToStorage(customers);
  }

  //Utility
  private saveToStorage(customers: Customer[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(customers));
  }

  //Clear All
  clearAll(): void {
    localStorage.removeItem(this.storageKey);
    localStorage.setItem(this.storageKey, JSON.stringify([]));
  }
}