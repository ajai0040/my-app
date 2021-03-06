import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import{ RentalService} from"../shared/rental.service";
import{Rental}from"../shared/rental.model";
@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {
idE:string;
rental:Rental;
  constructor(private routes: ActivatedRoute, private rentalService:RentalService) { }

  ngOnInit() {
    this.routes.params.subscribe(
      (params)=> {
      this.getRental(params["retalId"]);
      })
    
  }
getRental(rentalId:string){
  this.rentalService.getRentalByid(rentalId).subscribe(
    (rental:Rental)=>{
    this.rental=rental;
    }
  );
}
}
