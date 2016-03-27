module App {
    export class StudentController {
        student: Student;
        private studentService: StudentService;
        private stateParamService: angular.ui.IStateParamsService;

        static $inject = ["StudentService", "$stateParams"];

        constructor(studentService: StudentService, stateParams: angular.ui.IStateParamsService) {
            this.student = new Student();
            this.studentService = studentService;
            this.stateParamService = stateParams;

            var id = this.stateParamService["id"];
            this.studentService.GetDetails(id).then((success: any): void => {
                this.student = success.data;
            }, error => {
                console.log(error);
            });

        }
        Save() {
            var self = this;

            self.studentService.Save(self.student).then(success => { console.log(success); }, error => { console.log(error); });
        }
    }

    angular.module("app").controller("StudentController", StudentController);
}