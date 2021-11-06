class Customer {
    constructor(id,customerNumber) {
        this.id = id
        this.customerNumber = customerNumber
    }
}





class IndividualCustomer extends Customer{
    constructor(id,firstName,password,age,phoneNumber,address) {
        super(id,phoneNumber,password );
        this.firstName = firstName
        this.age = age
        this.phoneNumber = phoneNumber
        this.address = address

    }
}


class CorpareteCustomer extends Customer{
    constructor(id,customerNumber,companyNumber,phoneNumber,password) {
        super(id,phoneNumber,password );
        this.customerNumber = customerNumber
        this.companyNumber = companyNumber
    }
}

let customer = new Customer(1,911,"abdul05a")

console.log(customer.id)

let customer2 = new IndividualCustomer(1,"Abdullah","abdul05a",14,5358650560,"İstanbul")

console.log(customer2.firstName)
console.log(customer2.address)

