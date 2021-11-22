using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using SeasonalRNDServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SeasonalRNDServer.Controllers
{
    [EnableCors("AllowCors")]
    [Route("api/[controller]")]
    [ApiController]
    public class SeasonalController : ControllerBase
    {
        private SeasonalDbContext db = null;
        public SeasonalController(SeasonalDbContext _db)
        {
            db = _db;
        }
        // GET: api/<SeasonalController>
        [HttpGet]
        public IActionResult Get()
        {
            try 
            {
                List<Seasonal> data = db.seasonals.ToList<Seasonal>();
                return Ok(data);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // GET api/<SeasonalController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<SeasonalController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<SeasonalController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<SeasonalController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
