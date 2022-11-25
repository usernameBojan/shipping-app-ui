import { Component } from '@angular/core';
import { Inquiry } from 'src/app/models/inquiry';
import { InquiryRequest } from 'src/app/models/inquryReq';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-calculate-price',
  templateUrl: './calculate-price.component.html',
  styleUrls: ['./calculate-price.component.css']
})

export class CalculatePriceComponent {
  inqury: Inquiry = new Inquiry();
  inquiryReq: InquiryRequest = new InquiryRequest();
  isSuccess: boolean = false;
  isError: boolean = false;
  price: any = '';
  errMsg: string = '';

  constructor (private inquryService: OrderService) {}

  calculatePrice(): void{
    this.inquryService.priceInquiry(this.inquiryReq).subscribe({
      next: (response) => {
        this.isSuccess = true;
        this.inqury = response;
      },
      error: (response) => {
        console.log(response)
        this.isError = true;
        if(!response.error.errors){
          this.errMsg = response.error
        } else this.errMsg = 'Invalid inputs. Please try again.';

      }
    })
  }

  reload(): void {
    this.isSuccess = false;
    this.isError = false;
    this.inquiryReq = new InquiryRequest();
  }
}