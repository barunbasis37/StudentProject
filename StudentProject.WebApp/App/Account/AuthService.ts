// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";

    export class AccountInfo {
        UserName: string;
        AccessToken:string;
    }
    
    export class AuthService {
        private localStorageService: angular.local.storage.ILocalStorageService;
        accountInfo:AccountInfo;

        static $inject : string[] = ["localStorageService"];
        constructor(localStorageService: angular.local.storage.ILocalStorageService ) {
            this.accountInfo = new AccountInfo();
            this.localStorageService = localStorageService;
        }
        Self(acc:AccountInfo) : void {
            var self = this;
            self.localStorageService.set("AccountInfo", acc);
        }
        
    }

    angular.module("app").service("AuthService", AuthService);
}