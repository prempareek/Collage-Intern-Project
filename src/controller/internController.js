const internModel = require("../models/internModel")
const collegemodel = require("../models/collegeModal")
const validator = require("email-validator")

const createInterns = async function(req, res) {
    try {
        let intern = req.body
        if (Object.entries(intern).length === 0) {
            res.status(400).send({ status: false, msg: "please input some data" })
        } else {
            let name = req.body.name
            if (!name)
                return res.status(400).send({ status: false, msg: "Please enter your name" })

            let email = req.body.email
            if (!email)
                return res.status(400).send({ status: false, msg: "Enter an  Email" })

            let check = validator.validate(email);
            if (!check) {
                return res.status(401).send({ status: false, msg: "Enter a valid email id" })
            }

            let mail = await internModel.findOne({ email })
            if (mail) {
                return res.status(401).send({ status: false, msg: "Email  already used." })
            }

            let mobile = req.body.mobile
            if (!mobile)
                return res.status(401).send({ status: false, msg: "Enter a  Valid Number" })

            let collegeId = req.body.collegeId
            let college = await collegemodel.findById(collegeId)
            if (!college) {
                res.status(400).send({ status: false, msg: "No Such college is Present,Please check collegeId" })
            }

            let internCreated = await internModel.create(intern)
            res.status(201).send({ status: true, data: internCreated })
        }
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }

};













module.exports.createInterns = createInterns