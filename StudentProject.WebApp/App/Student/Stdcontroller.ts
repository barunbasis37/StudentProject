// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";

    interface IStdcontroller {
        title: string;
        activate: () => void;
    }

    class Stdcontroller implements IStdcontroller {
        title: string = "Stdcontroller";

        static $inject: string[] = ["$location"];

        constructor(private $location: ng.ILocationService) {
            this.activate();
        }

        activate() {

        }
    }

    angular.module("app").controller("Stdcontroller", Stdcontroller);
}