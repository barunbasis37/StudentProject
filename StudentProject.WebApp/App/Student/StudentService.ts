// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";
    
    export class StudentService  {
        private httpService: angular.IHttpService;
        private qService: angular.IQService;

        static $inject: string[] = ["$http","$q"];

        constructor(private $http: ng.IHttpService,private $q: ng.IQService) {
            this.httpService = $http;
            this.qService = $q;
        }




        
    }

    angular.module("app").service("StudentService", StudentService);
}