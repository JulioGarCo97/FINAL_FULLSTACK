const express = require('express');
const app = express();
const router = express.Router();


// Path: src/routes/customers.js
/**
 * @swagger
 * /customers:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/customers', async (req, res) => {
        const customers = await Customer.find();
        res.json(customers);
    }
);

// Path: src/routes/customers.js

/**
 * @swagger
 * /customers:
 * post:
 * description: Use to request all customers
 * responses:
 * '200':
 * description: A successful response
 * '400':
 * description: Bad request
 * '500':
 * description: Internal server error
 * parameters:
 * - name: name
 * description: Name of the customer
 * in: formData
 * required: true
 * type: string
 * - name: surname
 * description: Surname of the customer
 * in: formData
 * required: true
 * type: string
 * - name: age
 * description: Age of the customer
 * in: formData
 * required: true
 *  type: integer
 */
router.post('/customers', async (req, res) => {
        const { name, surname, age } = req.body;
        const customer = new Customer({ name, surname, age });
        await customer.save();
        res.json({status: 'Customer saved'});
    }
);

// Path: src/routes/customers.js

/**
 * @swagger
 * /customers/{id}:
 * get:
 * description: Use to request all customers
 * responses:
 * '200':
 * description: A successful response
 * '400':
 * description: Bad request
 * '500':
 * description: Internal server error
 * parameters:
 * - name: id
 * description: Id of the customer
 * in: path
 * required: true
 * type: string
 */
router.get('/customers/:id', async (req, res) => {
        const customer = await Customer.findById(req.params.id);
        res.json(customer);
    }
);

// Path: src/routes/customers.js

/**
 * @swagger
 * /customers/{id}:
 * put:
 * description: Use to request all customers
 * responses:
 * '200':
 * description: A successful response
 * '400':
 * description: Bad request
 * '500':
 * description: Internal server error
 * parameters:
 * - name: id
 * description: Id of the customer
 * in: path
 * required: true
 * type: string
 * - name: name
 * description: Name of the customer
 * in: formData
 * required: true
 * type: string
 * - name: surname
 * description: Surname of the customer
 * in: formData
 * required: true
 * type: string
 * - name: age
 * description: Age of the customer
 * in: formData
 * required: true
 * type: integer
 */

     
module.exports = router;        
        