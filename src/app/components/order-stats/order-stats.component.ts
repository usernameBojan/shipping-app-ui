import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-order-stats',
  templateUrl: './order-stats.component.html',
  styleUrls: ['./order-stats.component.css']
})

export class OrderStatsComponent implements OnInit {
  stats: Order[] = [];
  
  constructor(private statsService: StatisticsService) { }

  ngOnInit(): void {
    this.statsService.getOrders().subscribe({
      next: (stats) => this.stats = stats,
      error: (response) => console.log(response)
    });
  }
}