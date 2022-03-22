const collegeModel = require("../models/collegeModal")

const createColleges = async function(req, res) {
    try {
        let data = req.body;
        if (Object.keys(data).length === 0) {
            return res.status(400).send({ status: false, msg: "Please input some data to create" })
        }
        let savedData = await collegeModel.create(data);
        return res.status(201).send({ status: true, data: savedData })
    } catch (error) {
        return res.status(500).send({ msg: "Error", error: error.message })
    }
}


module.exports.createColleges = createColleges;