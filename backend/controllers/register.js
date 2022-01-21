const Joi = require('joi');

const register = (req, res) => {
    const schema = Joi.object({
        username: Joi
            .string()
            .pattern(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)
            .min(3)
            .max(20)
            .required(),
        email: Joi
            .string()
            .email({ minDomainSegments: 2 }),
        batchInfo: Joi
            .string()
            .required(),
        password: Joi
            .string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        repeat_password: Joi
            .ref('password'),
    })
    const { name: username, email, batchInfo, password, confPassword: repeat_password } = req.body;
    const { error, value } = schema.validate({ username, email, batchInfo, password, repeat_password });
    if(!error){
        
    } else {
        //Handle Error
    }
    res.send({ error, value });
}

module.exports = register;