/**
 * Marketing Cloud REST API
 * Marketing Cloud's REST API is our newest API. It supports multi-channel use cases, is much more lightweight and easy to use than our SOAP API, and is getting more comprehensive with every release.
 *
 * OpenAPI spec version: 1.1.0
 * Contact: mc_sdk@salesforce.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


const ApiClient = require ('../ApiClient');
const SmsDefinitionContent = require ('./SmsDefinitionContent');
const SmsDefinitionSubscriptions = require ('./SmsDefinitionSubscriptions');





const InvalidModelException = require('../Exception/InvalidModelException');

/**
* The SmsDefinition model module.
* @module Model/SmsDefinition
* @version 1.1.0
*/
module.exports = class SmsDefinition{
    /**
    * Constructs a new <code>SmsDefinition</code>.
    * @alias module:Model/SmsDefinition
    * @class
    * @param definitionKey {String} Unique, user-generated key to access the definition object.
    * @param name {String} Name of the definition. Must be unique.
    * @param content {module:Model/SmsDefinitionContent} 
    * @param subscriptions {module:Model/SmsDefinitionSubscriptions} 
    */

    constructor(definitionKey, name, content, subscriptions) {
        
        // verify the required parameter 'definitionKey' is set
        if(definitionKey === undefined || definitionKey === null){
            throw new InvalidModelException('"definitionKey" is a required property for SmsDefinition and cannot be undefined or null');
        }
        this['definitionKey'] = definitionKey;
        
        // verify the required parameter 'name' is set
        if(name === undefined || name === null){
            throw new InvalidModelException('"name" is a required property for SmsDefinition and cannot be undefined or null');
        }
        this['name'] = name;
        
        // verify the required parameter 'content' is set
        if(content === undefined || content === null){
            throw new InvalidModelException('"content" is a required property for SmsDefinition and cannot be undefined or null');
        }
        this['content'] = content;
        
        
        
        
        
        // verify the required parameter 'subscriptions' is set
        if(subscriptions === undefined || subscriptions === null){
            throw new InvalidModelException('"subscriptions" is a required property for SmsDefinition and cannot be undefined or null');
        }
        this['subscriptions'] = subscriptions;
        
        
    }

    /**
    * Constructs a <code>SmsDefinition</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:Model/SmsDefinition} obj Optional instance to populate.
    * @return {module:Model/SmsDefinition} The populated <code>SmsDefinition</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmsDefinition();

            
            
            

            if (data.hasOwnProperty('definitionKey')) {
                obj['definitionKey'] = ApiClient.convertToType(data['definitionKey'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = SmsDefinitionContent.constructFromObject(data['content']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('createdDate')) {
                obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Date');
            }
            if (data.hasOwnProperty('modifiedDate')) {
                obj['modifiedDate'] = ApiClient.convertToType(data['modifiedDate'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('subscriptions')) {
                obj['subscriptions'] = SmsDefinitionSubscriptions.constructFromObject(data['subscriptions']);
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
        }
        return obj;
    }

    /**
    * Unique, user-generated key to access the definition object.
    * @member {String} definitionKey
    */
    definitionKey = undefined;
    /**
    * Name of the definition. Must be unique.
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {module:Model/SmsDefinitionContent} content
    */
    content = undefined;
    /**
    * Operational state of the definition: active, inactive, or deleted. A message sent to an active definition is processed and delivered. A message sent to an inactive definition isn’t processed or delivered. Instead, the message is queued for later processing for up to three days.
    * @member {String} status
    */
    status = undefined;
    /**
    * The date the object was created.
    * @member {Date} createdDate
    */
    createdDate = undefined;
    /**
    * The date the object was modified.
    * @member {Date} modifiedDate
    */
    modifiedDate = undefined;
    /**
    * User-provided description of the SMS definition.
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {module:Model/SmsDefinitionSubscriptions} subscriptions
    */
    subscriptions = undefined;
    /**
    * The ID of the request
    * @member {String} requestId
    */
    requestId = undefined;








}


