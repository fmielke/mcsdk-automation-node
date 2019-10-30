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
* The GetQueueMetricsForSendDefinitionResponse model module.
* @module Model/GetQueueMetricsForSendDefinitionResponse
* @version 1.0.0
*/
module.exports = class GetQueueMetricsForSendDefinitionResponse{
    /**
    * Constructs a new <code>GetQueueMetricsForSendDefinitionResponse</code>.
    * @alias module:Model/GetQueueMetricsForSendDefinitionResponse
    * @class
    */

    constructor() {
        
        
        
        
    }

    /**
    * Constructs a <code>GetQueueMetricsForSendDefinitionResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:Model/GetQueueMetricsForSendDefinitionResponse} obj Optional instance to populate.
    * @return {module:Model/GetQueueMetricsForSendDefinitionResponse} The populated <code>GetQueueMetricsForSendDefinitionResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetQueueMetricsForSendDefinitionResponse();

            
            
            

            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('ageSeconds')) {
                obj['ageSeconds'] = ApiClient.convertToType(data['ageSeconds'], 'Number');
            }
        }
        return obj;
    }

    /**
    * The ID of the request
    * @member {String} requestId
    */
    requestId = undefined;
    /**
    * Number of pages
    * @member {Number} count
    */
    count = undefined;
    /**
    * Number of seconds
    * @member {Number} ageSeconds
    */
    ageSeconds = undefined;








}

