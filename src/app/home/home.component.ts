import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any = { "success": true, "message": "Success", "data": { "update_date_time": "2020-03-22 17:50  :50", "local_new_cases": 0, "local_total_cases": 0, "local_total_number_of_individuals_in_hospitals": 0, "local_deaths": 0, "local_new_deaths": 0, "local_recovered": 0, "global_new_cases": 0, "global_total_cases": 0, "global_deaths": 0, "global_new_deaths": 0, "global_recovered": 0 } };

  constructor(
    private spinner: NgxSpinnerService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.dataService.getData().subscribe((data: any[]) => {
      console.log(data);
      this.data = data;
      this.spinner.hide();
    });
  }

}
