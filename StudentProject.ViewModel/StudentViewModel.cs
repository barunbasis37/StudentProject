using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StudentProject.Model;

namespace StudentProject.ViewModel
{
    public class StudentViewModel
    {
        public StudentViewModel(Student student)
        {
            this.Id = student.Id;
            this.Name = student.Name;
            this.Email = student.Email;
            this.Phone = student.Phone;
            this.Address = student.Address;
            this.City = student.City;

        }
        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
    }
}
