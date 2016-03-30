using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using StudentProject.Model;
using StudentProject.Service;

namespace StudentProject.WebApp.Controllers
{
    public class StudentController : BaseController
    {
        private StudentService Service;
        public StudentController()
        {
            Service = new StudentService(Db);
        }
        public IHttpActionResult Post(Student student)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(student.Id))
                {
                    student.Id = Guid.NewGuid().ToString();
                }
                string addedId = Service.Add(student);
                return Ok(new { validated = true, returnMessage = addedId});
                
            }
            catch (ArgumentException e)
            {
                return Ok(new { validated = false, returnMessage = e.Message });
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex.Message);
            }

            
        }

        [HttpGet]
        public IHttpActionResult EmailExists(string email)
        {
            bool emailexists = Service.EmailExists(email);
            return Ok(!emailexists);
        }
        [HttpGet]
        public IHttpActionResult CityExists(string city)
        {
            bool cityexists = Service.CityExists(city);
            return Ok(cityexists);
        }
    }
}
