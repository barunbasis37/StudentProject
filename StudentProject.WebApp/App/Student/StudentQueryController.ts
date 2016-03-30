// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";

    export class StudentQueryController {
        
    Students:Student[];
     private studentService:StudentService;
     static $inject = ["StudentService"];

     constructor(studentService: StudentService) {
         this.Students = [];
         this.studentService = studentService;
         this.GetAll();
     }
     GetAll() {
         var self = this;
         var success = result => {
             self.Students = result.data as Student[];
         }
         var error=error=> {
             console.log(error);
         }
         self.studentService.GetAll().then(success,error);
     }
        
    }

    angular.module('app').controller('StudentQueryController', StudentQueryController);
}