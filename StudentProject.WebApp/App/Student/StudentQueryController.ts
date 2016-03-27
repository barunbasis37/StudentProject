// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";

    

    class StudentQueryController {
        title: string = "StudentQueryController";

        static $inject: string[] = ["$location"];

        constructor(private $location: ng.ILocationService) {
            
        }

        
    }

    angular.module("app").controller("StudentQueryController", StudentQueryController);
}