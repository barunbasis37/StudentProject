﻿// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";
    
    export class StudentService  {
        private httpService: angular.IHttpService;
        private qService: angular.IQService;
        private authService: AuthService;

        static $inject: string[] = ["$http", "$q", "AuthService"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, auth: AuthService) {
            this.httpService = $http;
            this.qService = $q;
            this.authService = auth;
        }

        Save(data: Student): angular.IPromise<any> {

            var self = this;
            var deffered = self.qService.defer();
            self.httpService.post("api/student", data).then(success => { return deffered.resolve(success); }, error => { return deffered.reject(error);});
            return deffered.promise;
        }

        GetDetails(id) {
            var self = this;
            var deffered = self.qService.defer();
            self.httpService.get("api/StudentQuery?id=" + id).then(success => { return deffered.resolve(success); }, error => { return deffered.reject(error) });
            return deffered.promise;
        }

        GetAll() {
            var self = this;
            var deffered = self.qService.defer();
            var config;
            self.httpService.get("api/StudentQuery", config).then(success => { return deffered.resolve(success) }, error => { return deffered.reject(error) });
            return deffered.promise;
        }
    }

    angular.module("app").service("StudentService", StudentService);
}