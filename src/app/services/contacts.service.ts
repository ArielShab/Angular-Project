import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contacts: Contact[] = [
    {
      id: '5eccd84b63798ecee4f530f7',
      name: 'Guadalupe Stuart',
      email: 'guadalupestuart@ontagene.com',
      birthday: new Date('2020-02-25T06:36:12'),
      phones: ['+1 (855) 417-3827'],
    },
    {
      id: '5eccd84bb074b3d8c2b1ed05',
      name: 'Burke Dillon',
      email: 'burkedillon@ontagene.com',
      birthday: new Date('2016-04-19T01:42:16'),
      phones: ['+1 (931) 490-2325', '+1 (835) 560-3711'],
    },
    {
      id: '5eccd84b1d85b009d7649afd',
      name: 'Lucinda Keith',
      email: 'lucindakeith@ontagene.com',
      birthday: new Date('2017-09-22T08:13:04'),
      phones: ['+1 (982) 463-2539'],
    },
  ];

  getContacts(): Contact[] {
    return this.contacts;
  }

  constructor() {}
}
