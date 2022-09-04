/**
 * Created by attilawolf on 04/09/2022.
 */

import {LightningElement} from 'lwc';
import TripSaveSuccessTitle from '@salesforce/label/c.TripSaveSuccessTitle';
import TripSaveSuccessMessage from '@salesforce/label/c.TripSaveSuccessMessage';
import TripPolicyLabel from '@salesforce/label/c.TripPolicyLabel';

export default class AddTrip extends LightningElement {

    successLabels = {
        title: TripSaveSuccessTitle,
        message: TripSaveSuccessMessage
    };

    labels = {
        TripPolicyLabel
    }
}