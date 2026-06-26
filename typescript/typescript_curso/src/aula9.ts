enum role {
    admin = 'admin',
    company = 'company',
    citizen = 'citizen'
}

class Users {
    username: string
    password: string
    role: role

    constructor(username: string, password: string, role: role) {
        this.username = username
        this.password = password
        this.role = role
    }
}

let user = new Users('ruanslv', 'ruanslv', role.citizen)

console.log(user)