using System;
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
           
        
           try{
                return Ok(_service.GetAllTrips());
           }catch(Exception e){
               return BadRequest(e.Message);
           }
        }


        [HttpGet("SingleTrip/{id}")]
        public IActionResult GetTripById(int id){
            var trip=_service.GetTripById(id);
          
             try{
                  return Ok(trip);
           }catch(Exception e){
               return BadRequest(e.Message);
           }
        }

        [HttpPut("UpdateTrip/{id}")]
        public IActionResult UpdateTrip(int id, [FromBody] Trip trip){
            _service.UpdateTrip(id,trip);
            try{
                return Ok();
           }catch(Exception e){
               return BadRequest(e.Message);
           }
        }
        [HttpDelete("DeleteTrip/{id}")]
        public IActionResult DeleteTrip(int id){
            _service.DeleteTrip(id);
            try{
                return Ok();
           }catch(Exception e){
               return BadRequest(e.Message);
           }
        }

        [HttpPost("AddTrip")]
        public IActionResult AddTrip([FromBody] Trip trip){
            if(trip !=null ){
                _service.AddTrip(trip);
            }
            try{
                  return Ok();
           }catch(Exception e){
               return BadRequest(e.Message);
           }
        }
    }
}