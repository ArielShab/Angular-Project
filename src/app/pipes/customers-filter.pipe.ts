import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../interfaces/customer';

@Pipe({
  name: 'customersFilter',
})
export class CustomersFilterPipe implements PipeTransform {
  transform(
    value: Required<Customer>[] | null,
    properties: Array<keyof Required<Customer>>,
    terms: string[]
  ): Required<Customer>[] | null {
    if (!value) {
      return null;
    }

    let i = 0;
    terms.filter((term, index) => {
      if (term) {
        i = index;
      }
    });

    return value.filter((customer) =>
      customer[properties[i]]?.toLowerCase().includes(terms[i].toLowerCase())
    );
  }
}
