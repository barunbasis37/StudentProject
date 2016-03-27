using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentProject.Model
{
    public class Student: Entity
    {
        [Required(ErrorMessage = "Name Field can't be empty")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Email Field can't be empty")]
        [DataType(DataType.EmailAddress, ErrorMessage = "E-mail is not valid")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Phone Field can't be empty")]
        [RegularExpression("^(?!0+$)(\\+\\d{1,3}[- ]?)?(?!0+$)\\d{10,15}$", ErrorMessage = "Please enter valid phone no.")]
        public string Phone { get; set; }
        [Required(ErrorMessage = "City Field can't be empty")]
        public string City { get; set; }
        [Required(ErrorMessage = "Address Field can't be empty")]
        public string Address { get; set; }

    }
}
