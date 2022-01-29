const db = require("../config/database");

class Patients{
    static all(){
        return new Promise ((resolve, reject)=>{
            const sql = "SELECT * FROM patients";
            db.query(sql, (err, results)=>{
                resolve(results);
            });
        });
    }
    static find(id){
        //select berdasarkan id
        return new Promise( (resolve, reject) => {
            const sql = "SELECT * FROM patients WHERE id = ?";
            db.query(sql, id, function (err, results) {
                resolve(results[0]);
            });
        });
    }
    static async create(data){
        const id = await new Promise((resolve, reject) =>{
            const sql = "INSERT INTO patients SET ? ";
            db.query(sql, data, function(err, results) {
                if (err) reject(err);
                resolve(results.insertId);
            });
        });

        // lakukan return promise untuk menampilkan id
        return new Promise((resolve, reject)=> {
            const sql = "SELECT * FROM patients WHERE id = ?";
            db.query(sql, id, function(err, results) {
                if(err) reject(err);
                resolve(results);
            });
        });
    }
    static async update(id,data){
        await new Promise((resolve, reject) =>{
            // query update data pasien
            const sql = "UPDATE patients SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, results) => {
                resolve(results);
            });
        });

        // mencari data by find yang baru di update
        const baru = await this.find(id);
        return baru;
    }
    static delete(id){
        return new Promise( (resolve, reject) => {
            // query untuk menghapus data
            const sql = "DELETE FROM patients WHERE id = ?";
            db.query(sql, id,  (err, results) => {
                resolve(results);
            });
        });
    }
    static findByStatus(status){
        return new Promise( (resolve, reject)=> {
            const sql = "SELECT * FROM patients WHERE status = ?";
            db.query(sql, status, (err, results) => {
                err ? reject(err) : resolve(results);
            });
        });
    }
}

module.exports = Patients