const internModel = require("../models/internModel")
const collegemodel = require("../models/collegeModal")
const validator = require("email-validator")

const isValid = function (value) {
    if (typeof value == undefined || value == null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true
}

const createInterns = async function(req, res) {
    try {
        let { email, mobile } = req.body;

        let intern = req.body
        if (Object.entries(intern).length === 0) {
            res.status(400).send({ status: false, message: "please input some data" })
        } else {
            let name = req.body.name
            if (!name)
                return res.status(400).send({ status: false, message: "Please enter your name" })

            let email = req.body.email
            if (!email)
                return res.status(400).send({ status: false, message: "Enter an  Email" })

            let check = validator.validate(email);
            if (!check) {
                return res.status(401).send({ status: false, message: "Enter a valid email id" })
            }

            let mail = await internModel.findOne({ email })
            if (mail) {
                return res.status(401).send({ status: false, message: "Email  already used." })
            }

            // let mobile = req.body.mobile
            // if (!mobile)
            //     return res.status(400).send({ status: false, msg: "Enter a  Valid Number" })
            
            if (!isValid(mobile)) {
               return res.status(400).send({ status: false, message: "Please inter a moblie number" })
            }
    
            if (!(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(mobile))) {
                res.status(400).send({ status: false, message: "Please eneter valid mobile number" })
                return
            }
    


            let collegeId = req.body.collegeId
            let college = await collegemodel.findById(collegeId)
            if (!college) {
                res.status(400).send({ status: false, message: "No Such college is Present,Please check collegeId" })
            }

            let internCreated = await internModel.create(intern)
            res.status(201).send({ status: true, data: internCreated })
        }
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }

};













module.exports.createInterns = createInterns