import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { ParcelLimitations } from 'src/app/models/limitations';
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
  companyName: string = '';
  company: Company = new Company();
  limitations: ParcelLimitations = new ParcelLimitations();
  volumeRanges: VolumeRange[] = [];
  weightRanges: WeightRange[] = [];
  parcelLimitationsAdded: boolean = false;
  volumeRangesAdded: boolean = false;
  weightRangesAdded: boolean = false;
  isSuccess: boolean = false;
  isError: boolean = false;
  errMsg: string = '';

  constructor(private companyService: CompanyService, private router: Router ) { }

  handleCompanyNameInput = () => this.company.name = this.companyName;

  handleVolumeRangePairsNumberInput(): void{
    if(this.volumeRanges.length !== 0) {
      this.volumeRanges = [];
    }

    for(let i=0; i<this.volumeRangePairs; i++){
      this.volumeRanges.push(new VolumeRange());
    }
  }

  handleWeightRangePairsNumberInput(): void {
    if(this.weightRanges.length !== 0) {
      this.weightRanges = [];
    }

    for(let i=0; i<this.weightRangePairs; i++){
      this.weightRanges.push(new WeightRange());
    }
  }

  handleParcelLimitations(): void {
    this.company.parcelLimitations = this.limitations;
    this.parcelLimitationsAdded = true;
  }

  handleAddVolumeRange = () => this.company.parcelVolumeRange = this.volumeRanges;

  handleAddWeightRange = () =>this.company.parcelWeightRange = this.weightRanges;

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