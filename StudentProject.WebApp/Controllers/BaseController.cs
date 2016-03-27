using System.Web.Http;
using StudentProject.Model;
using StudentProject.Service;

namespace StudentProject.WebApp.Controllers
{
    public class BaseController :ApiController
    {
        protected BusinessDbContext Db;
        protected StudentService Service;
        public BaseController()
        {
            Service = new StudentService(Db);
            Db =new BusinessDbContext();
        }
    }
}