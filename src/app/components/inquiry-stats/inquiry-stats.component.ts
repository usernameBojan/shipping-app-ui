import { Component, OnInit } from '@angular/core';
import { ParcelInquiryStatistics } from 'src/app/models/statistics';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-inquiry-stats',
  templateUrl: './inquiry-stats.component.html',
  styleUrls: ['./inquiry-stats.component.css']
})

export class InquiryStatsComponent implements OnInit {
  stats: ParcelInquiryStatistics[] = [];
  
  constructor(private statsService: StatisticsService) { }

  ngOnInit(): void {
    this.statsService.getInquiries().subscribe({
      next: (stats) => this.stats = stats,
      error: (response) => console.log(response)
    });
  }
}