import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminsService } from 'src/app/services/admins.service';

@Component({
  selector: 'app-delete-admin',
  templateUrl: './delete-admin.component.html',
  styleUrls: ['./delete-admin.component.css']
})

export class DeleteAdminComponent {

  constructor(private adminService: AdminsService, private router: Router, private route: ActivatedRoute) { }

  id: any = '';
  isSuccess: boolean = false;
  isError: boolean = false;
  errMsg: string = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
      }
    })
  }

  goBack = () => this.router.navigate(['./admin/admins']);

  deleteAdmin() {
    this.adminService.deleteAdmin(this.id).subscribe({
      next: () => this.isSuccess = true,
      error: (response) => {
        this.isError = true;
        this.errMsg = response.error;
      }
    })
  }
}