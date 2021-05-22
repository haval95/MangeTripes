using System;
namespace Trips.Data
{
    public class Trip{
        
        public int Id { get; set; }
        public String Name {  get; set; }
        public String Description { get; set; }    
        public  DateTime DateStarted { get; set; }   
        public DateTime? DateCompleted { get; set; } 
    
    
    }
    
}