// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";
    
    export class StudentService  {
        private httpService: angular.IHttpService;
        private qService: angular.IQService;
        private authService: AuthService;

        static $inject: string[] = ["$http", "$q","AuthService"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService,auth:AuthService) {
            this.httpService = $http;
            this.qService = $q;
            this.authService = auth;
        }

        Save(data: Student): angular.IPromise<any> {

            var self = this;
            var deffered = self.qService.defer();
            self.httpService.post("api/Student", data).then(success => { return deffered.resolve(success); }, error => { return deffered.reject(error);});
            return deffered.promise;
        }

        GetDetails(id) {
            var self = this;
            var deffered = self.qService.defer();
            var config: angular.IRequestShortcutConfig = { headers: { 'Authorization': "Bearer " + self.authService.accountInfo.AccessToken } };
            self.httpService.get("api/StudentQuery?id=" + id,config).then(success => { return deffered.resolve(success); }, error => { return deffered.reject(error) });
            return deffered.promise;
        }

        GetAll() {
            var self = this;
            var deffered = self.qService.defer();
            var config: angular.IRequestShortcutConfig = { headers: { 'Authorization': "Bearer "+ self.authService.accountInfo.AccessToken } };
            self.httpService.get("api/StudentQuery", config).then(success => { return deffered.resolve(success) }, error => { return deffered.reject(error) });
            return deffered.promise;
        }

        EmailExists(email: string): angular.IPromise<any> {
            var self = this;
            var deffered = self.qService.defer();
            self.httpService.get("api/student?email=" + email).then(success => { return deffered.resolve(success) }, error => { return deffered.reject(error) });
            return deffered.promise;
        }

        CityExists(city: string): angular.IPromise<any> {
            var self = this;
            var deffered = self.qService.defer();
            self.httpService.get("api/student?city=" + city).then(success => { return deffered.resolve(success) }, error => { return deffered.reject(error) });
            return deffered.promise;
        }
    }

    angular.module("app").service("StudentService", StudentService);
}