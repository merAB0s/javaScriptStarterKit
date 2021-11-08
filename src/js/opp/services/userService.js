export default class UserService{
// export = dışardan import edilebilir
// default = "UserService" import edildiğinde default olarak bunu import et
    constructor(loggerService) {
        this.users = []
        this.loggerService = loggerService
    }




    add(user){
        this.users.push(user)
            this.loggerService.log(user)
    }

    list(){
        return this.users
    }

    getById(id) {
        return this.users.find(u => u.id === id)
    }




}