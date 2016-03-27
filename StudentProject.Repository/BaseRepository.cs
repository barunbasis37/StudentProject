using StudentProject.Model;

namespace StudentProject.Repository
{
    public abstract class BaseRepository
    {
        protected BusinessDbContext DbRepoContext { get; set; }
        public BaseRepository(BusinessDbContext db)
        {
            this.DbRepoContext = db;
        }

        
    }
}