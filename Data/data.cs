
using System.Collections.Generic;
namespace Trips.Data
{
    public static class Data {
        public static List<Trip> Trips => allTrips;

        static List <Trip> allTrips = new List<Trip> (){
          
            new Trip {
                Id=1, 
                Name="erbil",
                Description="some description",
                DateStarted= new System.DateTime(2020/01/20),
                DateCompleted= null
            },

                new Trip {
                Id=2, 
                Name="suli",
                Description="some description",
                DateStarted= new System.DateTime(3/02/2022),
                DateCompleted= null
            },

                new Trip {
                Id=3, 
                Name="dhok",
                Description="some description",
                DateStarted= new System.DateTime(2020/02/02),
                DateCompleted= null
            },
       };

    }
}