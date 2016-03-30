module App {
    export class StudentController {
        Student: Student;
        EmailExistValidation: boolean;
        PhoneRegEx: string;
        CityValid: boolean;
        Submitted: boolean;
        private studentService: StudentService;
        private stateParamService: angular.ui.IStateParamsService;

        static $inject = ["StudentService", "$stateParams"];

        constructor(studentService: StudentService, stateParams: angular.ui.IStateParamsService) {
            this.Student = new Student();
            this.EmailExistValidation = true;
            this.PhoneRegEx = "^[0-9]{11}$";
            this.CityValid = true;
            this.studentService = studentService;
            this.stateParamService = stateParams;

            if (this.stateParamService["id"] != null) {
                var id = this.stateParamService["id"];
                this.studentService.GetDetails(id).then((success: any): void => {
                    this.Student = success.data;
                }, error => {
                    console.log(error);
                });
            }
        }

        //IsValidPhoneNo(data: number): boolean {
        //    var sp: string = data + "";
        //    if (sp.length === 10) {
        //        return true;
        //    }
        //    else
        //        return false;
        //}

        SaveIfValidated() {
            var self = this;
            self.studentService.EmailExists(self.Student.Email).then(emailsuccess => {
                self.EmailExistValidation = emailsuccess.data;
                if (self.EmailExistValidation) {
                    self.studentService.CityExists(self.Student.City).then(citysuccess => {
                        self.Submitted = true;
                        self.CityValid = citysuccess.data;
                        if (self.CityValid) {
                            self.Save();
                        }
                        
                    });
                    
                } 
            }, emailerror => { console.log(emailerror); });
        }



        Save() {
            var self = this;
            self.studentService.Save(self.Student).then(success => { console.log(success); }, error => { console.log(error); });
        }
    }

    angular.module('app').controller('StudentController', StudentController);
}