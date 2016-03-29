using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using StudentProject.Service;
using StudentProject.ViewModel;

namespace StudentProject.WebApp.Controllers
{
    [Authorize]
    public class StudentQueryController : BaseController
    {
        protected StudentService Service;

        public StudentQueryController()
        {
            Service = new StudentService(Db);
        }
        public IHttpActionResult Get()
        {
            List<StudentViewModel> viewModels=Service.GetAll();
            return Ok(viewModels);
        }
        public IHttpActionResult Get(string id)
        {
            StudentViewModel viewModel = Service.GetDetails(id);
            return Ok(viewModel);
        }
    }
}
