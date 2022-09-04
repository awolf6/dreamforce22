/**
 * Created by attilawolf on 04/09/2022.
 */

import {LightningElement} from 'lwc';
import ExpenseSaveSuccessTitle from '@salesforce/label/c.ExpenseSaveSuccessTitle';
import ExpenseSaveSuccessMessage from '@salesforce/label/c.ExpenseSaveSuccessMessage';

export default class AddExpense extends LightningElement {

    successLabels = {
        title: ExpenseSaveSuccessTitle,
        message: ExpenseSaveSuccessMessage
    };
}