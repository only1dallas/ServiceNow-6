//Script for adding random names to SN
var target = new GlideRecord('x_24754_marketing_attendee'); //Select correct table
var amount =  "10" //Set amount of random users
var Firstnames = ["Erik","Jan","Peter","Bennie","Joep","Frits","Jo"]
var Lastnames = ["Jansen","Maasen","Bos","Klomp","Adda","Spits","Wal"]

function getRandom(input) { //get Random names
return(input[Math.floor(Math.random()*input.length)]);
}

for(i=0;i<amount;i++){
var FirstName = getRandom(Firstnames); //Create random firstname
var LastName = getRandom(Lastnames); //Create random lastname
gs.print(FirstName+" " + LastName); //Print names
var Email = FirstName+LastName+"@apg.nl";
target.initialize();
target.user_name = FirstName+LastName
target.first_name = FirstName;
target.last_name = LastName;
target.email = Email;
target.insert();
}
