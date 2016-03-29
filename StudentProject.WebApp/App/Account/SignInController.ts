// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";

    export class SigninRequest {
        Username: string;
        Password: string;
        grant_type:string="password";
    }

    export class SignInController {
        title: string = "SignInController";
        User: SigninRequest;
        private httpService: angular.IHttpService;
        private qService: angular.IQService;
        private authService: AuthService;
        static $inject: string[] = ["$location", "$http", "$q","AuthService"];

        constructor(private $location: ng.ILocationService, private http: angular.IHttpService, private q: angular.IQService, auth: AuthService) {
            
            this.httpService = http;
            this.qService = q;
            this.authService = auth;
        }

        
        Signin(): void {
            console.log('i m going to post the values');
            console.log(this.User);
            var self = this;

            var config: angular.IRequestShortcutConfig = { headers: { 'Content-Type': "application/x-www-form-urlencoded" } };
            var success = function(result) {
                var token = result.data.access_token;
                console.log(token);
                self.authService.accountInfo.UserName = result.data.userName;
                self.authService.accountInfo.AccessToken = token;
            }
            var error = function (error) {
                console.log(error);
            }
            var req = "username=" + self.User.Username + "&password=" + self.User.Password + "&grant_type=password";
            self.httpService.post('/token', req, config).then(success,error);
        }
    }

    angular.module("app").controller("SignInController", SignInController);
}