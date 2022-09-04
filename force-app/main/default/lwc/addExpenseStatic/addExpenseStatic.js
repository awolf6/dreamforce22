/**
 * Created by attilawolf on 04/09/2022.
 */

import {LightningElement, api} from 'lwc';
import {ShowToastEvent} from "lightning/platformShowToastEvent";

export default class AddExpenseStatic extends LightningElement {

    @api recordId

    handleSuccess() {
        this.dispatchEvent(
            new ShowToastEvent({
                title: "Success!",
                message: "Expense saved Successfully!",
                variant: "success"
            })
        );
    }

}