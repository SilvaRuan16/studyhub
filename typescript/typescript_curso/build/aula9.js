"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var role;
(function (role) {
    role["admin"] = "admin";
    role["company"] = "company";
    role["citizen"] = "citizen";
})(role || (role = {}));
class Users {
    username;
    password;
    role;
    constructor(username, password, role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }
}
let user = new Users('ruanslv', 'ruanslv', role.citizen);
console.log(user);
//# sourceMappingURL=aula9.js.map