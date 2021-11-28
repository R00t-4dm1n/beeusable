import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        phoneNumber: '987654321',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },

    {
        name: 'John Doe',
        email: 'john@example.com',
        phoneNumber: '987654322',
        password: bcrypt.hashSync('123456', 10),
       
    },

    {
        name: 'Jane Doe',
        email: 'jane@example.com',
        phoneNumber: '987654323',
        password: bcrypt.hashSync('123456', 10),        
    },
]

export default users