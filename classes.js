//You are working on a web application for a car rental company. They want to keep track
//of their car inventory and rental information. Your task is to create a JavaScript class or
//function constructor for representing cars in their inventory and another one for
//representing rental information
//Requirements:
//1) Create a Car class or function constructor that has the following properties:
//a. make (string): The make of the car, e.g., "Toyota".
//b. model (string): The model of the car, e.g., "Camry".
//c. year (number): The year the car was manufactured, e.g., 2020.
//d. isAvailable (boolean): Indicates if the car is currently available for rent.
//The Car class or function constructor should also have a method called
//toggleAvailability that changes the isAvailable property to its opposite value (true to false, false to true)

class Car{
    constructor(make,model,year, isAvailable){
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable;
    }
    toggleAvailability(){
        this.isAvailable =!this.isAvailable
        console.log(this.isAvailable)
    }

}
let car = new Car(`Benz`, `2012mm`, `2020`,`True`)
car.toggleAvailability()

//2) Create a Rental class or function constructor that has the following properties:
//● car (Car object): The car that has been rented.
//● renterName (string): The name of the person who rented the car.
//● rentalStartDate (Date object): The start date of the rental period.
//● rentalEndDate (Date object): The end date of the rental period.
//The Rental class or function constructor should also have a method called
//calculateRentalDuration that returns the rental duration in days.

class Rental extends Car{
    constructor(make,model,year, isAvailable,renterName,rentalStartDate,rentalEndDate){
        super(make,model,year, isAvailable)
        this.renterName = renterName;
        this.rentalStartDate = rentalStartDate;
        this.rentalEndDate = rentalEndDate;
    }
    calculateRentalDuration(){
        let duration= Math.round(Math.abs(this.rentalEndDate - this.rentalStartDate))/(1000*3600*24);
        console.log(duration)
    }

}
let renting = new Rental(`Volvo`, `2019ssx`, 2017, `True`,`Tobais`, new Date(`12/2/2022`),new Date(`12/2/2023`) )
renting.calculateRentalDuration()



//3) Create an instance of the Car class or function constructor for a car in the
//inventory. Then, create an instance of the Rental class or function constructor for
//a rental involving the car you created. Finally, calculate the rental duration using
//the calculateRentalDuration method


