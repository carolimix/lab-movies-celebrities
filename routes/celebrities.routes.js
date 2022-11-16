const Celebrity = require("../models/Celebrity.model");

const router = require("express").Router();

router.get("/celebrities/create", (req, res) => res.render("celebrities/new-celebrity"));

router.post("/celebrities/create", (req, res) => {
    const {name, occupation, catchPhrase} = req.body;
    
Celebrity.create({name, occupation, catchPhrase})
.then(() => res.redirect("/celebrities"))
.catch((error) => res.redirect("celebrities/new-celebrity"));
});

//Get celebrities
router.get("/celebrities", (req, res, next) => {
    return Celebrity.find()
      .then((allTheCelebsFromDB) => {
        res.render("celebrities/celebrities", { celebrities: allTheCelebsFromDB });
      })
      .catch((error) => {
        console.log("Error while getting the celebs from the DB: ", error);
            next(error);
      });
  });

  //Get celebrities details
//here req.params.id

//Delete celebrities here

//Edit celebrities here






module.exports = router;