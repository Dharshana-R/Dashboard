import { Component, OnInit } from '@angular/core';
import { FeesService } from '../service/fees.service';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css'],
})
export class FeesComponent implements OnInit {
  title = 'fees';
  fees: any;

  constructor(private fee: FeesService) {}

  ngOnInit(): void {
    this.fee.getFees().subscribe((data: any) => {
      console.log(data);
      this.fees = data;
    });
  }
}
