module App {
    export class StudentController {
        Student: Student;
        private studentService: StudentService;
        private stateParamService: angular.ui.IStateParamsService;

        static $inject = ["StudentService", "$stateParams"];

        constructor(studentService: StudentService, stateParams: angular.ui.IStateParamsService) {
            this.Student = new Student();
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
        Save() {
            var self = this;

            self.studentService.Save(self.Student).then(success => { console.log(success); }, error => { console.log(error); });
        }
    }

    angular.module('app').controller('StudentController', StudentController);
}