const Form = require("../models/formModel");

module.exports.newForm = async (req, res) => {

    try {
        const { youHave, youAre, typeOfProject, budget } = req.body.form;
        console.log(youHave, youAre, typeOfProject, budget);

        const newForm = await Form.create({
            youHave: youHave.value,
            youAre: youAre.value,
            typeOfProject: typeOfProject.value,
            budget: budget.value
        });

        if (newForm) {
            res.status(200).json({ message: "Form Submitted Successfully" });
        }
        else {
            res.status(400).json({ message: "Form Submission Failed" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }

}