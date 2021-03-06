import { body, query } from 'express-validator';


export class StaffValidators {
    static staff() {
        return [
            body('name', 'Name is required').isString(),
            body('designation', 'Designation is Required').isString(),         
            body('mobile', 'Mobile is required').isString()
        ]
    }
}