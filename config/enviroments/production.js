module.exports = {
    PORT: process.env.PORT,
    DB: {
        username: "postgres",
        password: "mysecretpassword",
        database: "davivienda_prod",
        host: "localhost",
        dialect: "postgres"
    }
};