import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, take } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.scss'],
})
export class CustomersEditComponent implements OnInit {
  form: Required<Customer> = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  };

  constructor(
    private customersService: CustomersService,
    private routerService: Router,
    private activateRoute: ActivatedRoute
  ) {}

  async onSubmit({ valid }: NgForm) {
    if (valid) {
      await this.customersService.update(this.form);
      this.routerService.navigate(['..'], {
        relativeTo: this.activateRoute,
      });
    }
  }

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap((param) =>
          this.customersService.getById(param['id']).pipe(take(1))
        )
      )
      .subscribe((customer) => (this.form = customer));
  }
}
