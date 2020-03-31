const Rental= require('./rental');

 class FakeDB{
     constructor(){
         this.rentals=[
            {
                
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
                    
                    title:" central spine",
                    city: "alappuzha",
                    street:"central square",
                    category:"resort",
                    image: "http://via.placeholder.com/350x250",
                    bedroom: 1,
                    description:"very spacious",
                    dailyrate: 300,
                    shared:true }

         ]
     }
    pushRentalToDB(){
        this.rentals.forEach((rental) => {
         const newRental=new Rental(rental);

         newRental.save();
        });

    }
   async cleanDB(){
      await Rental.remove({ });
    }

    seedDB(){
        this.cleanDB();
        this.pushRentalToDB();
    }
 }

 module.exports=FakeDB;