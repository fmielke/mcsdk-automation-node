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
const AssetType = require ('./AssetType');
const SharingProperties = require ('./SharingProperties');





const InvalidModelException = require('../Exception/InvalidModelException');

/**
* The Asset model module.
* @module Model/Asset
* @version 1.1.0
*/
module.exports = class Asset{
    /**
    * Constructs a new <code>Asset</code>.
    * @alias module:Model/Asset
    * @class
    * @param customerKey {String} Reference to customer's private ID/name for the asset
    * @param assetType {module:Model/AssetType} 
    * @param name {String} Name of the asset, set by the client
    * @param description {String} Description of the asset, set by the client
    */

    constructor(customerKey, assetType, name, description) {
        
        
        // verify the required parameter 'customerKey' is set
        if(customerKey === undefined || customerKey === null){
            throw new InvalidModelException('"customerKey" is a required property for Asset and cannot be undefined or null');
        }
        this['customerKey'] = customerKey;
        
        
        
        // verify the required parameter 'assetType' is set
        if(assetType === undefined || assetType === null){
            throw new InvalidModelException('"assetType" is a required property for Asset and cannot be undefined or null');
        }
        this['assetType'] = assetType;
        
        
        
        
        // verify the required parameter 'name' is set
        if(name === undefined || name === null){
            throw new InvalidModelException('"name" is a required property for Asset and cannot be undefined or null');
        }
        this['name'] = name;
        
        // verify the required parameter 'description' is set
        if(description === undefined || description === null){
            throw new InvalidModelException('"description" is a required property for Asset and cannot be undefined or null');
        }
        this['description'] = description;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    }

    /**
    * Constructs a <code>Asset</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:Model/Asset} obj Optional instance to populate.
    * @return {module:Model/Asset} The populated <code>Asset</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Asset();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('customerKey')) {
                obj['customerKey'] = ApiClient.convertToType(data['customerKey'], 'String');
            }
            if (data.hasOwnProperty('contentType')) {
                obj['contentType'] = ApiClient.convertToType(data['contentType'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
            if (data.hasOwnProperty('assetType')) {
                obj['assetType'] = AssetType.constructFromObject(data['assetType']);
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
            }
            if (data.hasOwnProperty('fileProperties')) {
                obj['fileProperties'] = ApiClient.convertToType(data['fileProperties'], Object);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], Object);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('design')) {
                obj['design'] = ApiClient.convertToType(data['design'], 'String');
            }
            if (data.hasOwnProperty('superContent')) {
                obj['superContent'] = ApiClient.convertToType(data['superContent'], 'String');
            }
            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], Object);
            }
            if (data.hasOwnProperty('views')) {
                obj['views'] = ApiClient.convertToType(data['views'], Object);
            }
            if (data.hasOwnProperty('blocks')) {
                obj['blocks'] = ApiClient.convertToType(data['blocks'], Object);
            }
            if (data.hasOwnProperty('minBlocks')) {
                obj['minBlocks'] = ApiClient.convertToType(data['minBlocks'], 'Number');
            }
            if (data.hasOwnProperty('maxBlocks')) {
                obj['maxBlocks'] = ApiClient.convertToType(data['maxBlocks'], 'Number');
            }
            if (data.hasOwnProperty('channels')) {
                obj['channels'] = ApiClient.convertToType(data['channels'], Object);
            }
            if (data.hasOwnProperty('allowedBlocks')) {
                obj['allowedBlocks'] = ApiClient.convertToType(data['allowedBlocks'], ['String']);
            }
            if (data.hasOwnProperty('slots')) {
                obj['slots'] = ApiClient.convertToType(data['slots'], Object);
            }
            if (data.hasOwnProperty('businessUnitAvailability')) {
                obj['businessUnitAvailability'] = ApiClient.convertToType(data['businessUnitAvailability'], Object);
            }
            if (data.hasOwnProperty('sharingProperties')) {
                obj['sharingProperties'] = SharingProperties.constructFromObject(data['sharingProperties']);
            }
            if (data.hasOwnProperty('template')) {
                obj['template'] = ApiClient.convertToType(data['template'], Object);
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], 'String');
            }
            if (data.hasOwnProperty('generateFrom')) {
                obj['generateFrom'] = ApiClient.convertToType(data['generateFrom'], 'String');
            }
        }
        return obj;
    }

    /**
    * The id of the asset
    * @member {Number} id
    */
    id = undefined;
    /**
    * Reference to customer's private ID/name for the asset
    * @member {String} customerKey
    */
    customerKey = undefined;
    /**
    * The type that the content attribute will be in
    * @member {String} contentType
    */
    contentType = undefined;
    /**
    * Property bag containing the asset data
    * @member {Object} data
    */
    data = undefined;
    /**
    * @member {module:Model/AssetType} assetType
    */
    assetType = undefined;
    /**
    * The version of the asset
    * @member {Number} version
    */
    version = undefined;
    /**
    * Specifies if the asset can be modified or not
    * @member {Boolean} locked
    */
    locked = undefined;
    /**
    * Stores the different properties that this asset refers to if it is a file type
    * @member {Object} fileProperties
    */
    fileProperties = undefined;
    /**
    * Name of the asset, set by the client
    * @member {String} name
    */
    name = undefined;
    /**
    * Description of the asset, set by the client
    * @member {String} description
    */
    description = undefined;
    /**
    * ID of the category the asset belongs to
    * @member {Object} category
    */
    category = undefined;
    /**
    * List of tags associated with the asset
    * @member {Array.<String>} tags
    */
    tags = undefined;
    /**
    * The actual content of the asset
    * @member {String} content
    */
    content = undefined;
    /**
    * Fallback for display when neither content nor supercontent are provided
    * @member {String} design
    */
    design = undefined;
    /**
    * Content that supersedes content in terms of display
    * @member {String} superContent
    */
    superContent = undefined;
    /**
    * Custom fields within an asset
    * @member {Object} customFields
    */
    customFields = undefined;
    /**
    * Views within an asset
    * @member {Object} views
    */
    views = undefined;
    /**
    * Blocks within the asset
    * @member {Object} blocks
    */
    blocks = undefined;
    /**
    * Minimum number of blocks within an asset
    * @member {Number} minBlocks
    */
    minBlocks = undefined;
    /**
    * Maximum number of blocks within an asset
    * @member {Number} maxBlocks
    */
    maxBlocks = undefined;
    /**
    * List of channels that are allowed to use this asset
    * @member {Object} channels
    */
    channels = undefined;
    /**
    * List of blocks that are allowed in the asset
    * @member {Array.<String>} allowedBlocks
    */
    allowedBlocks = undefined;
    /**
    * Slots within the asset
    * @member {Object} slots
    */
    slots = undefined;
    /**
    * A dictionary of member IDs that have been granted access to the asset
    * @member {Object} businessUnitAvailability
    */
    businessUnitAvailability = undefined;
    /**
    * @member {module:Model/SharingProperties} sharingProperties
    */
    sharingProperties = undefined;
    /**
    * Template the asset follows
    * @member {Object} template
    */
    template = undefined;
    /**
    * Base64-encoded string of a file associated with an asset
    * @member {String} file
    */
    file = undefined;
    /**
    * Tells the sending compiler what view to use for generating this view's content
    * @member {String} generateFrom
    */
    generateFrom = undefined;








}


