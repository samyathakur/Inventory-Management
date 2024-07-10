import {body, validationResult} from 'express-validator';

const validateRequest = async (req, res, next) => {

    // 1. Set rules for validation
    const rules = [
      body('name').notEmpty().withMessage("Name is required"),
      body('price').isFloat({gt:0}).withMessage("Price should be positive value"),
      body('imageUrl').isURL().withMessage("Invalid URL")
    ];
    

    // 2. Run those rules
    /*
    -> running the rules can be async or i/o operation so we use PROMISES.
    -> we will use Promise.all, it takes array of promises and while it works we wait for them
    -> which all promises it is executing? - for every rule we are going to run the rule
    -> "rule =>" this rule is of type validation chain which is coming from express validator, 
       and this rule has a function run() and run takes request object (req)
    -> for this request(req) the defined rule will be executed and the error message will be returned
    -> to get error that have been raised after running rules - for this we have a seperate object 
       inside express validator i.e "validationResult"
    -> 
    */
    await Promise.all(rules.map( rule => rule.run(req)))


    // 3. Check if there are any errors after running the rules

    // this validationResult returns all the error messages that has been raised for given request
    let validationErrors = validationResult(req);
    
    // 4. If there are error then return the error message
    if (!validationErrors.isEmpty()) {
       return res.render('new-product', {
         errorMessage: validationErrors.array()[0].msg,
       });
     }
}

export default validateRequest