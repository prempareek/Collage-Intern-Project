const collegeModel = require("../models/collegeModal")
const internModel = require("../models/internModel")

const createColleges = async function(req, res) {
    try {
        let data = req.body;
        if (Object.keys(data).length < 0) {
            return res.status(400).send({ status: false, message: "Please input some data to create" })
        }
       
    
        let savedData = await collegeModel.create(data);
        return res.status(201).send({ status: true, data: savedData })
    } catch (error) {
        return res.status(500).send({ message: "Error", error: error.message })
    }
}

const getDetails = async function(req, res) {
    try{

    const query = req.query
    
    if(Object.keys(query).length===0){
        return res.status(400).send({message:"plz input some Data for getting Details"})
    }

    const collegeName = query.collegeName
    if(Object.values(collegeName).length===0){
        return res.status(400).send({message:"plz input college Name in values"})
    }



    const clgByName = await collegeModel.findOne({ name: collegeName })

    const collegeID = clgByName._id



    const getInternsByCollegeID = await internModel.find({ collegeId: collegeID }).select({ _id: 1, email: 1, name: 1, mobile: 1 })


    let x=getInternsByCollegeID.length

    const { name, fullName, logoLink } = clgByName

    const data = {
        name: name,
        fullName: fullName,
        logoLink: logoLink,
        intrests: getInternsByCollegeID
    }

    res.status(200).send({ status: true,total:x, data: data })

    
} catch (error) {
    res.status(500).send({ status: false, message: error.message })}

}





















module.exports.createColleges = createColleges
module.exports.getDetails = getDetails