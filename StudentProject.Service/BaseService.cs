using StudentProject.Model;

namespace StudentProject.Service
{
    public class BaseService
    {
        protected BusinessDbContext DbServiceContext;

        public BaseService(BusinessDbContext dbServiceContext)
        {
            DbServiceContext = dbServiceContext;
        }
    }
}