import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { VolumeRange } from 'src/app/models/volume-range';
import { WeightRange } from 'src/app/models/weight-range';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})

export class AddCompanyComponent {
  volumeRangePairs: number = 0;
  weightRangePairs: number = 0;
  company: Company = new Company();
  volumeRanges: VolumeRange[] = [];
  weightRanges: WeightRange[] = [];
  isSuccess: boolean = false;
  isError: boolean = false;
  errMsg: string = '';

  constructor(private companyService: CompanyService, private router: Router ) { }

  handleVolumeRangePairsNumberInput(): void{
    for(let i=0; i<this.volumeRangePairs; i++){
      this.volumeRanges.push(new VolumeRange());
    }
  }

  handleWeightRangePairsNumberInput(): void {
    for(let i=0; i<this.weightRangePairs; i++){
      this.weightRanges.push(new WeightRange());
    }
  }

  handleAddVolumeRange(): void {
    this.company.parcelVolumeRange = this.volumeRanges;
  }

  handleAddWeightRange(){
    this.company.parcelWeightRange = this.weightRanges;
  }

  addCompany(): void {
    this.companyService.createCompany(this.company).subscribe({
      next: () => this.isSuccess = true,
      error: (response) => {
        console.log(response)
        this.isError = true;
        if(!response.error.errors){
          this.errMsg = response.error
        } else this.errMsg = 'Invalid inputs. Please try again.';
      }
    })
  }
}