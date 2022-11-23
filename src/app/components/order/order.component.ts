import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateOrder } from 'src/app/models/create-order';
import { OrderService } from 'src/app/services/order.service';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {
  order: CreateOrder = new CreateOrder();
  isSuccess: boolean = false;
  isError: boolean = false;

  constructor (private orderService: OrderService, private statsService: StatisticsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.statsService.getInquiry(id).subscribe({
            next: (response) => {
              console.log(id);
              this.order.weight = response.weight,
              this.order.width = response.width,
              this.order.height = response.height,
              this.order.length = response.length,
              this.order.price = response.price
            },
            error: (response) => console.log(response)
          })
        }
      }
    })
  }

  createOrder(): void{
    this.orderService.createOrder(this.order).subscribe({
      next: () => this.isSuccess = true,
      error: (response) => {
        console.log(response)
        this.isError = true
      }
    })
  }
}
