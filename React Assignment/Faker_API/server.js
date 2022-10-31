const { faker } = require('@faker-js/faker');
const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello from the server side!')
})

const port = 3000
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})


// remember to use import and NOT require
// we can create a function to return a random / fake "Product"
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};
    
const newFakeProduct = createProduct();
console.log(newFakeProduct);


class User{
    constructor(){

        this.userId = faker.random.numeric(), 
        this.firstName = faker.name.firstName(),
        this.lastName = faker.name.lastName(),
        this.email = faker.internet.email(),
        this.phoneNumber = faker.phone.number(),
        this.password = faker.internet.password()
    }
}

const newUser = new User()
console.log(newUser);

class Company{
    constructor(){
        this.companyId = faker.random.numeric(),
        this.name = faker.company.name(),
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            Country: faker.address.country(),
        }
    }
}
const newCompany = new Company()
console.log(newCompany);

app.get('/api/users/new', (req, res) => {
    let newUser = new User()
    res.json({results:newUser})
})
app.get('/api/companies/new', (req, res) => {
    let newCompany = new Company()
    res.json({results:newCompany})
})
app.get('/api/user/company', (req, res) => {
    let newCompany = new Company()
    let newUser = new User()
    res.json({newUser, newCompany})
})

