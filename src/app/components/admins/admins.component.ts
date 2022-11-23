import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { AdminsService } from 'src/app/services/admins.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})

export class AdminsComponent implements OnInit {

  admins: Admin[] = [];
  constructor(private adminsService: AdminsService, private router: Router) { }  

  ngOnInit(): void {
    const token: any = localStorage.getItem('authToken');
    let payload: any;
    let bearerId: string;
    
    if(token){
      payload = JSON.parse(window.atob(token.split(".")[1]));
      bearerId = payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];

      this.adminsService.getAdmin(bearerId).subscribe({
        next: (admin) => {
          if(!admin.canManageAdmins){
            this.router.navigate(['./../admin']);
          }
        }
      })
    } else this.router.navigate(['/login']);

    this.adminsService.getAdmins().subscribe({
      next: (admins) => {
        this.admins = admins;
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}