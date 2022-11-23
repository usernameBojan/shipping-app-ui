import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { AdminsService } from 'src/app/services/admins.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})

export class EditAdminComponent implements OnInit {
  adminDetails: Admin = new Admin();
  isSuccess: boolean = false;
  isError: boolean = false;
  errMsg: string = '';
  
  constructor(private route: ActivatedRoute, private adminService: AdminsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.adminService.getAdmin(id).subscribe({
            next: (response) => this.adminDetails = response
          })
        }
      }
    })
  }

  editAdmin() {
    this.adminService.editAdmin(this.adminDetails, this.adminDetails.id.toString()).subscribe({
      next: () => this.isSuccess = true,
      error: (response) => {
        this.isError = true;

        if (!response.error.errors) {
          this.errMsg = response.error;
        }

        if (!response.error.errors.Username && !response.error.errors.FullName) {
          this.errMsg = response.error.errors.Password[0];
        } else {
          this.errMsg = 'You must fill all fields.'
        }
        console.log(response);
      }
    })
  }
}