using System;
using System.Collections.Generic;
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
       
        public IHttpActionResult Post(Student student)
        {
            StudentService Service = new StudentService(Db);
            if (string.IsNullOrWhiteSpace(student.Id))
            {
                student.Id = Guid.NewGuid().ToString();
            }
            string addedId=Service.Add(student);
            return Ok(addedId);
        }
    }
}
