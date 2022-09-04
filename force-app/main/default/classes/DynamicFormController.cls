/**
 * Created by attilawolf on 04/09/2022.
 */

public with sharing class DynamicFormController {

    @AuraEnabled
    public static List<String> getFields(String objectName, String fieldSetName) {
        List<String> fieldNames = new List<String>();

        if(Schema.getGlobalDescribe().containsKey(objectName)) {
            Map<String, FieldSet> fieldSets = Schema.getGlobalDescribe().get(objectName).getDescribe().fieldSets.getMap();
            if(fieldSets.containsKey(fieldSetName)) {
                Schema.FieldSet fieldSet = fieldSets.get(fieldSetName);
                for(FieldSetMember fsm: fieldSet.getFields()) {
                    fieldNames.add(fsm.getFieldPath());
                }
                return fieldNames;
            }
            else {
                throw new DynamicFormException('Cannot find field set named ' + fieldSetName);
            }
        }
        else {
            throw new DynamicFormException('Cannot find object named ' + objectName);
        }
    }

    public class DynamicFormException extends Exception {}
}