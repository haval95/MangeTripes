using Microsoft.AspNetCore.Mvc;
using Trips.Data;
namespace Trips.Controllers
{  
    
    [Route("api/[controller]")]
    public class TripsController: Controller
    {
    
        private ITripService _service;
        public TripsController(ITripService Service)
        {
            this._service=Service;
            
        }

        [HttpGet("getAll")]

        public IActionResult GetAll(){
            var x=_service.GetAllTrips();
           
            return Ok(x);
        }


        [HttpGet("SingleTrip/{id}")]
        public IActionResult GetTripById(int id){
            var trip=_service.GetTripById(id);
            return Ok(trip);
        }

        [HttpPut("UpdateTrip/{id}")]
        public IActionResult UpdateTrip(int id, [FromBody] Trip trip){
            _service.UpdateTrip(id,trip);
            return Ok();
        }
        [HttpDelete("DeleteTrip/{id}")]
        public IActionResult DeleteTrip(int id){
            _service.DeleteTrip(id);
            return Ok();
        }

        [HttpPost("AddTrip")]
        public IActionResult AddTrip([FromBody] Trip trip){
            if(trip !=null ){
                _service.AddTrip(trip);
            }
            return(Ok());
        }
    }
}