// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";

    export class AccountInfo {
        UserName: string;
        AccessToken:string;
    }
    
    export class AuthService {
        accountInfo:AccountInfo;

        constructor() {
            this.accountInfo = new AccountInfo();
        }
        
    }

    angular.module("app").service("AuthService", AuthService);
}