using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StudentProject.Model;
using StudentProject.ViewModel;

namespace StudentProject.Repository
{
    public class StudentRepository : BaseRepository
    {
        public StudentRepository(BusinessDbContext db) : base(db)
        {

        }


        public string Add(Student student)
        {
            Student addStudent = null;
            try
            {
                addStudent = DbRepoContext.Students.Add(student);
                DbRepoContext.SaveChanges();
                
            }
            catch (Exception ex)
            {
                addStudent.Id = ex.Message;
            }
            return addStudent.Id;
        }

        public bool Exists(string id)
        {
            return DbRepoContext.Students.Any(s => s.Id == id);
        }
        public bool EmailExists(string email)
        {
            return DbRepoContext.Students.Any(s => s.Email == email);
        }
        public bool ValidCity(string city)
        {
            return DbRepoContext.Cities.Any(c => c.Name.ToLower() == city.ToLower());
        }
        public string Update(Student student)
        {
            DbRepoContext.Entry(student).State=EntityState.Modified;
            DbRepoContext.SaveChanges();
            return student.Id;
        }


        public IQueryable<Student> GetAll()
        {
            return DbRepoContext.Students.AsQueryable();
        }

        public StudentViewModel GetDetail(string id)
        {
            Student student = DbRepoContext.Students.Find(id);
            StudentViewModel viewModel = new StudentViewModel(student);
            return viewModel;
        }

        
    }
}
