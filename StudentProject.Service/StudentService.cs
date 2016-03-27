using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StudentProject.Model;
using StudentProject.Repository;

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
            bool studentIdExist = repository.Exists(student.Id);
            if (studentIdExist)
            {
                return repository.Update(student);
            }
            return repository.Add(student);
        }
    }
}
