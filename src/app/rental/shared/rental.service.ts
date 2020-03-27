import{ Injectable } from "@angular/core";
import { Observable} from "rxjs";
import { Rental }from "./rental.model";
@Injectable()
export class RentalService{
    
private rentals: Rental[]=[{
    id:"1",
    title:" central appartment",
    city: "cherthala",
    street:"vettackal",
    category:"appartment",
    image: "http://via.placeholder.com/350x250",
    bedroom:3,
    description:"very nice appartment",
    dailyrate: 250,
    shared:false },
    {
      id:"2",
      title:" Fancy appartment",
      city: "Ernakulam",
      street:"edapally",
      category:"appartment",
      image: "http://via.placeholder.com/350x250",
      bedroom:2,
      description:"very good appartment",
      dailyrate: 150,
      shared:false },
      {
        id:"3",
        title:" central spine",
        city: "alappuzha",
        street:"central square",
        category:"resort",
        image: "http://via.placeholder.com/350x250",
        bedroom: 1,
        description:"very spacious",
        dailyrate: 300,
        shared:true }];
    
    public getRentalByid(rentalId: string) :Observable<Rental>{
         return new Observable<Rental>((observer)=>{

               setTimeout(() => {
                   const foundRental = this.rentals.find((rental) => {
                        return rental.id==rentalId;
                   });
                   observer.next(foundRental);
               }, 500);
           }); 

        }
public getRentals(): Observable<Rental[]>{
    const rentalObservable : Observable<Rental[]>=new Observable((observer)=>{
     setTimeout(()=>{ observer.next(this.rentals); },1000),
     setTimeout(()=>{ observer.error("i am error"); },2000),
     setTimeout(()=>{ observer.complete(); },3000) });

    return rentalObservable;
}

      }