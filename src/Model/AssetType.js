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
* The AssetType model module.
* @module Model/AssetType
* @version 1.0.0
*/
module.exports = class AssetType{
    /**
    * Constructs a new <code>AssetType</code>.
    * The asset type
    * @alias module:Model/AssetType
    * @class
    * @param id {Number} The id of the asset type
    * @param name {String} The name of the asset type
    */

    constructor(id, name) {
        
        // verify the required parameter 'id' is set
        if(id === undefined || id === null){
            throw new InvalidModelException('"id" is a required property for AssetType and cannot be undefined or null');
        }
        this['id'] = id;
        
        // verify the required parameter 'name' is set
        if(name === undefined || name === null){
            throw new InvalidModelException('"name" is a required property for AssetType and cannot be undefined or null');
        }
        this['name'] = name;
        
        
    }

    /**
    * Constructs a <code>AssetType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:Model/AssetType} obj Optional instance to populate.
    * @return {module:Model/AssetType} The populated <code>AssetType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssetType();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
        }
        return obj;
    }

    /**
    * The id of the asset type
    * @member {Number} id
    */
    id = undefined;
    /**
    * The name of the asset type
    * @member {String} name
    */
    name = undefined;
    /**
    * The description of the asset type
    * @member {String} displayName
    */
    displayName = undefined;








}

