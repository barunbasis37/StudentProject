using System.Web.Http;
using StudentProject.Model;
using StudentProject.Service;

namespace StudentProject.WebApp.Controllers
{
    public class BaseController :ApiController
    {
        protected BusinessDbContext Db;
        
        public BaseController()
        {
            Db =new BusinessDbContext();
        }
    }
}