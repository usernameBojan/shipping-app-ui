import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})

export class EditCompanyComponent implements OnInit{

  companyDetails: Company = new Company();
  isSuccess: boolean = false;
  isError: boolean = false;
  name: any = '';

  constructor(private route: ActivatedRoute, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.name = params.get('name');
        if (this.name) {
          this.companyService.getCompany(this.name).subscribe({
            next: (response) => this.companyDetails = response
          })
        }
      }
    })
  }

  editCompany(): void {
    this.companyService.editCompany(this.companyDetails, this.name).subscribe({
      next: () => this.isSuccess = true,
      error: (response) => this.isError = true
    })
  }
}