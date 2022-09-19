/**
 * Created by attilawolf on 04/09/2022.
 */

import {LightningElement, api} from 'lwc';
import getFields from '@salesforce/apex/DynamicFormController.getFields';
import {showErrorToast, showToast} from 'c/utils';

export default class DynamicForm extends LightningElement {

    @api objectName;
    @api fieldSetName;

    @api successToastLabels = {
        title: "Success!",
        message: "Save Successful"
    };

    fields;
    showSpinner = false;

    async connectedCallback() {
        this.showSpinner = true;
        try {
            this.fields = await getFields({objectName: this.objectName, fieldSetName: this.fieldSetName});
        }
        catch (error) {
            showErrorToast(error, this);
        }
        this.showSpinner = false;
    }

    handleSuccess() {
        showToast(this.successToastLabels.title, this.successToastLabels.message, "success", this);
    }
}