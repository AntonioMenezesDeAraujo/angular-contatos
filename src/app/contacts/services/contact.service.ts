import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly API = '/contatos'

  constructor(private  httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Contact[]>(this.API);
  }

  save(contact: Contact) {
    return this.httpClient.post<Contact>(this.API, contact).pipe(first()); 
  }
}
