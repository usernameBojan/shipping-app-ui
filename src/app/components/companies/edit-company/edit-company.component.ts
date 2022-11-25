import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/company';
import { VolumeRange } from 'src/app/models/volume-range';
import { WeightRange } from 'src/app/models/weight-range';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})

export class EditCompanyComponent implements OnInit{
  companyDetails: Company = new Company();
  volumeRangePairs: number = 0;
  weightRangePairs: number = 0;
  errMsg: string = '';
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
            next: (response) => {
              console.log(response)
              this.companyDetails = response
            console.log(this.companyDetails)}
          })
        }
      }
    })
  }

  handleVolumeRangePairsNumberInput(): void{
    if(this.companyDetails.parcelVolumeRange.length !== 0) {
      this.companyDetails.parcelVolumeRange = [];
    }

    for(let i=0; i<this.volumeRangePairs; i++){
      this.companyDetails.parcelVolumeRange.push(new VolumeRange());
    }
  }

  handleWeightRangePairsNumberInput(): void {
    if(this.companyDetails.parcelWeightRange.length !== 0) {
      this.companyDetails.parcelWeightRange = [];
    }

    for(let i=0; i<this.weightRangePairs; i++){
      this.companyDetails.parcelWeightRange.push(new WeightRange());
    }
  }
  
  editCompany(): void {
    this.companyService.editCompany(this.companyDetails, this.name).subscribe({
      next: () => this.isSuccess = true,
      error: (response) => {
        this.isError = true
        if(!response.error.errors){
          console.log(response)
          this.errMsg = response.error
        } else this.errMsg = 'Invalid inputs. Please try again.';
      }
    })
  }
}