import { Component, OnInit } from '@angular/core';
import { RentalService} from "../shared/rental.service";
import { subscribeOn } from 'rxjs/operator/subscribeOn';
import{Rental} from"../shared/rental.model";
@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {
  rentals: Rental[]=[];
  constructor(private rentalservice: RentalService) { }

  ngOnInit() {
    const rentalObservable=this.rentalservice.getRentals();

    rentalObservable.subscribe(
      (rentals)=>{  this.rentals=rentals; },
      (err)=>{   },
      ()=>{}

    );
  }

}
