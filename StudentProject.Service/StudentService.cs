using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StudentProject.Model;
using StudentProject.Repository;
using StudentProject.ViewModel;

namespace StudentProject.Service
{
    public class StudentService : BaseService
    {
        StudentRepository repository;
        public StudentService(BusinessDbContext dbServiceContext) : base(dbServiceContext)
        {
            repository = new StudentRepository(DbServiceContext);
        }

        
        public string Add(Student student)
        {
            if (!repository.ValidCity(student.City))
                throw new ArgumentException("" + student.City + " is not a valid City");
            bool studentIdExist = repository.Exists(student.Id);
            if (studentIdExist)
            {
                return repository.Update(student);
            }
            return repository.Add(student);
        }

        public List<StudentViewModel> GetAll()
        {
            IQueryable<Student> queryables= repository.GetAll();
            var viewmodels = queryables.ToList().Select(x => new StudentViewModel(x)).ToList();
            return viewmodels;
        }

        public StudentViewModel GetDetails(string id)
        {
            return repository.GetDetail(id);
        }

        public bool EmailExists(string email)
        {
            return repository.EmailExists(email);
        }
        public bool CityExists(string city)
        {
            return repository.ValidCity(city);
        }
    }
}
