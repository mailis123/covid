const Pasien = require("../model/Pasien");

class ControllerPasien{
    async index(req, res){
        const patient = await Pasien.all();

        if(patient){
            const data = {
                message : "menampilkan seluruh resource",
                data : patient,
        };
        return res.status(200).json(data);
    }else{
        const data = {
            message:"Data is empty",
        };
        return res.status(404).json(data);
        };
    }

    async update(req, res){
        const {id} = req.params;
        const patient = await Pasien.find(id);
        
        if(patient){
            const patient = await Pasien.update(id, req.body);
            const data = {
                message : "Mengupdate data pasien ",
                data : patient,
            };
            return res.status(200).json(data);
        }else{
            const data = {
                message : "data tidak ada",
            };
            return res.status(404).json(data);
        };
    }

    async store (req, res){
        const patient = await Pasien.create(req.body);
        const data = {
            message : "berhasil menambahkan data baru",
            data : patient,
        };
        res.status(201).json(data);
    }

    async show(req, res){
        const {id} = req.params
        const cari = await Pasien.find(id);
        if (cari){
            const data = {
                message : "menampilkan single resource",
                data : cari,
            };
            res.status(200).json(data);
        }else{
            const data = {
                message : "Resource not found",
            };
            res.status(404).json(data);
        }
    }

    async destroy(req, res){
        const{id} = req.params;
        const apus = await Pasien.find(id);
        if(apus){
            await Pasien.delete(id);
            const data = {
                message : "Resource is delete successfully",
            };
            res.status(200).json(data);
        }else{
            const data = {
                message : "Resource not found",
            };
            res.status(404).json(data);
        }
    }
    async positive(req, res){
        // mencari pasien berdasarkan status positif
        const patient = await Pasien.findByStatus("positive");
        if (patient){
            const data = {
                message: "Menampilkan data pasien positif",
                data: patient,
            };
            return res.status(200).json(data);
        }
    }
    async negatif(req, res){
        // mencari pasien berdasarkan status positif
        const patient = await Pasien.findByStatus("negatif");
        if (patient){
            const data = {
                message: "Menampilkan data pasien negatif",
                data: patient,
            };
            return res.status(200).json(data);
        }
    }
}
const object = new ControllerPasien();
module.exports = object;