import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { AdminsService } from 'src/app/services/admins.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})

export class CreateAdminComponent{
  createAdmin: Admin = new Admin();
  isSuccess: boolean = false;
  isError: boolean = false;
  errMsg: string = '';

  constructor(private adminsSerivce: AdminsService, private router: Router ) { }
  
  createAdminRequest() {
    this.adminsSerivce.createAdmin(this.createAdmin).subscribe({
      next: () => this.isSuccess = true,
      error: (response) => {
        this.isError = true;

        if(!response.error.errors){
          this.errMsg = response.error;
        }

        if(!response.error.errors.Username && !response.error.errors.FullName){
          this.errMsg = response.error.errors.Password[0];
        } else {
          this.errMsg = 'You must fill all fields.'
        }
        console.log(response);
      }
    })
  }
}