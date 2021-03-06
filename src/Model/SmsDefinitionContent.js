/**
 * Marketing Cloud REST API
 * Marketing Cloud's REST API is our newest API. It supports multi-channel use cases, is much more lightweight and easy to use than our SOAP API, and is getting more comprehensive with every release.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: mc_sdk@salesforce.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


const ApiClient = require ('../ApiClient');





const InvalidModelException = require('../Exception/InvalidModelException');

/**
* The SmsDefinitionContent model module.
* @module Model/SmsDefinitionContent
* @version 1.0.0
*/
module.exports = class SmsDefinitionContent{
    /**
    * Constructs a new <code>SmsDefinitionContent</code>.
    * @alias module:Model/SmsDefinitionContent
    * @class
    * @param message {String} The message content that you want sent with each message. Use substitution strings and AMPscript to personalize the message.
    */

    constructor(message) {
        
        // verify the required parameter 'message' is set
        if(message === undefined || message === null){
            throw new InvalidModelException('"message" is a required property for SmsDefinitionContent and cannot be undefined or null');
        }
        this['message'] = message;
        
    }

    /**
    * Constructs a <code>SmsDefinitionContent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:Model/SmsDefinitionContent} obj Optional instance to populate.
    * @return {module:Model/SmsDefinitionContent} The populated <code>SmsDefinitionContent</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmsDefinitionContent();

            
            
            

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
    * The message content that you want sent with each message. Use substitution strings and AMPscript to personalize the message.
    * @member {String} message
    */
    message = undefined;








}


