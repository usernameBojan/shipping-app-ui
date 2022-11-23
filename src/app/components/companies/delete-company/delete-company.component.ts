import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.css']
})

export class DeleteCompanyComponent {

  constructor(private companyService: CompanyService, private router: Router, private route: ActivatedRoute) { }

  name: any = '';
  isSuccess: boolean = false;
  isError: boolean = false;
  errMsg: string = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.name = params.get('name');
      }
    })
  }

  goBack = () => this.router.navigate(['./admin/companies']);

  deleteCompany(): void {
    this.companyService.deleteCompany(this.name).subscribe({
      next: () => this.isSuccess = true
    })
  }
}