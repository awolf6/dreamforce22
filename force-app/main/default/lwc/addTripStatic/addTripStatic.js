/**
 * Created by attilawolf on 04/09/2022.
 */

import {api, LightningElement} from 'lwc';
import {ShowToastEvent} from "lightning/platformShowToastEvent";

export default class AddTripStatic extends LightningElement {

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