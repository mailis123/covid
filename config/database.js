// mengambil dan menghubungnkan ke file .env dan ke mysql atau ke database
const sql = require("mysql");

require("dotenv").config();

const db = sql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
});

db.connect((err)=>{
    if(err){
        console.log(`koneksi error : ${err}`);
        return;
    }else{
        console.log("connection succesfull");
        return;
    }
});

module.exports = db;