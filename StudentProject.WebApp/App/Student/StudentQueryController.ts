// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";

    

    export class StudentQueryController {
        
    students:Student[];
     studentService:StudentService;
     static $inject: string[] = ["StudentService"];

     constructor(studentService: StudentService) {
         this.students = [];
         this.studentService = studentService;
         this.GetAll();
     }
     GetAll() {
         var self = this;
         self.studentService.GetAll().then(success => {
             console.log(success);
         },error => {
             console.log(error);
         });
     }
        
    }

    angular.module("app").controller("StudentQueryController", StudentQueryController);
}