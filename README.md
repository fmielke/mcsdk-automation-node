# This project is under development

# salesforce-marketing-cloud-sdk

SalesforceMarketingCloud - JavaScript client for salesforce-marketing-cloud-sdk
Marketing Cloud's REST API is our newest API. It supports multi-channel use cases, is much more lightweight and easy to use than our SOAP API, and is getting more comprehensive with every release.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install salesforce-marketing-cloud-sdk --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
npm install GIT_USER_ID/GIT_REPO_ID --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

### Usage scenarios
#### Using the Client class with the configuration passed through environment variables

```javascript
const SalesforceMarketingCloud = require('salesforce-marketing-cloud-sdk');
const Client = require('salesforce-marketing-cloud-sdk/src/Api/Client');

let client = new Client();
let assetApi = client.assetApi;

let asset = AssetFactory.create(); // your own implementation of an asset factory that sets at least the mandatory properties
let createAssetResult = assetApi.createAsset(asset);

createAssetResult.then(data => {
    console.log(data);
}, reason => {
    console.error(reason);
});

```

#### Authentication environment variables:
- SFMC_AUTH_BASE_URL
- SFMC_CLIENT_ID
- SFMC_CLIENT_SECRET
- SFMC_ACCOUNT_ID
- SFMC_SCOPE (space-separated list of data-access permissions for your application - optional parameter)

#### Transactional Messaging integration tests environment variables:
- SFMC_COUNTRY_CODE
- SFMC_KEYWORD
- SFMC_SHORT_CODE


#### Using the Client class with the configuration passed through a configuration object

```javascript
const SalesforceMarketingCloud = require('salesforce-marketing-cloud-sdk');
const Client = require('salesforce-marketing-cloud-sdk/src/Api/Client');

const config = {
    authBaseUrl: 'YOUR AUTH BASE URL',
    clientId: 'YOUR CLIENT ID',
    clientSecret: 'YOUR CLIENT SECRET',
    accountId: 'YOUR ACCOUNT ID',
    scope: 'SPACE-SEPARATED LIST OF DATA-ACCESS PERMISSIONS FOR YOUR APPLICATION' // optional parameter
};

// Transactional Messaging integration tests config parameters:

config.shortCode = 'YOUR SHORT CODE';
config.keyWord = 'YOUR KEY WORD';
config.countryCode = 'YOUR COUNTRY CODE';

let client = new Client(config);
let assetApi = client.assetApi;

let asset = AssetFactory.create(); // your own implementation of an asset factory that sets at least the mandatory properties
let createAssetResult = assetApi.createAsset(asset);

createAssetResult.then(data => {
    console.log(data);
}, reason => {
    console.error(reason);
});

```

## Documentation for API Endpoints

All URIs are relative to *https://www.exacttargetapis.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SalesforceMarketingCloud.AssetApi* | [**createAsset**](docs/AssetApi.md#createAsset) | **POST** /asset/v1/content/assets | createAsset
*SalesforceMarketingCloud.AssetApi* | [**deleteAssetById**](docs/AssetApi.md#deleteAssetById) | **DELETE** /asset/v1/content/assets/{id} | deleteAssetById
*SalesforceMarketingCloud.AssetApi* | [**getAssetById**](docs/AssetApi.md#getAssetById) | **GET** /asset/v1/content/assets/{id} | getAssetById
*SalesforceMarketingCloud.AssetApi* | [**partiallyUpdateAssetById**](docs/AssetApi.md#partiallyUpdateAssetById) | **PATCH** /asset/v1/content/assets/{id} | partiallyUpdateAssetById
*SalesforceMarketingCloud.CampaignApi* | [**createCampaign**](docs/CampaignApi.md#createCampaign) | **POST** /hub/v1/campaigns | createCampaign
*SalesforceMarketingCloud.CampaignApi* | [**deleteCampaignById**](docs/CampaignApi.md#deleteCampaignById) | **DELETE** /hub/v1/campaigns/{id} | deleteCampaignById
*SalesforceMarketingCloud.CampaignApi* | [**getCampaignById**](docs/CampaignApi.md#getCampaignById) | **GET** /hub/v1/campaigns/{id} | getCampaignById
*SalesforceMarketingCloud.TransactionalMessagingApi* | [**createEmailDefinition**](docs/TransactionalMessagingApi.md#createEmailDefinition) | **POST** /messaging/v1/email/definitions/ | createEmailDefinition
*SalesforceMarketingCloud.TransactionalMessagingApi* | [**createSmsDefinition**](docs/TransactionalMessagingApi.md#createSmsDefinition) | **POST** /messaging/v1/sms/definitions | createSmsDefinition
*SalesforceMarketingCloud.TransactionalMessagingApi* | [**deleteEmailDefinition**](docs/TransactionalMessagingApi.md#deleteEmailDefinition) | **DELETE** /messaging/v1/email/definitions/{definitionKey} | deleteEmailDefinition
*SalesforceMarketingCloud.TransactionalMessagingApi* | [**deleteQueuedMessagesForEmailDefinition**](docs/TransactionalMessagingApi.md#deleteQueuedMessagesForEmailDefinition) | **DELETE** /messaging/v1/email/definitions/{definitionKey}/queue | deleteQueuedMessagesForEmailDefinition
*SalesforceMarketingCloud.TransactionalMessagingApi* | [**deleteQueuedMessagesForSmsDefinition**](docs/TransactionalMessagingApi.md#deleteQueuedMessagesForSmsDefinition) | **DELETE** /messaging/v1/sms/definitions/{definitionKey}/queue | deleteQueuedMessagesForSmsDefinition
*SalesforceMarketingCloud.TransactionalMessagingApi* | [**deleteSmsDefinition**](docs/TransactionalMessagingApi.md#deleteSmsDefinition) | **DELETE** /messaging/v1/sms/definitions/{definitionKey} | deleteSmsDefinition
*SalesforceMarketingCloud.TransactionalMessagingApi* | [**getEmailDefinition**](docs/TransactionalMessagingApi.md#getEmailDefinition) | **GET** /messaging/v1/email/definitions/{definitionKey} | getEmailDefinition
*SalesforceMarketingCloud.TransactionalMessagingApi* | [**getEmailDefinitions**](docs/TransactionalMessagingApi.md#getEmailDefinitions) | **GET** /messaging/v1/email/definitions/ | getEmailDefinitions
*SalesforceMarketingCloud.TransactionalMessagingApi* | [**getEmailSendStatusForRecipient**](docs/TransactionalMessagingApi.md#getEmailSendStatusForRecipient) | **GET** /messaging/v1/email/messages/{messageKey} | getEmailSendStatusForRecipient
*SalesforceMarketingCloud.TransactionalMessagingApi* | [**getEmailsNotSentToRecipients**](docs/TransactionalMessagingApi.md#getEmailsNotSentToRecipients) | **GET** /messaging/v1/email/messages/ | getEmailsNotSentToRecipients
*SalesforceMarketingCloud.TransactionalMessagingApi* | [**getQueueMetricsForEmailDefinition**](docs/TransactionalMessagingApi.md#getQueueMetricsForEmailDefinition) | **GET** /messaging/v1/email/definitions/{definitionKey}/queue | getQueueMetricsForEmailDefinition
*SalesforceMarketingCloud.TransactionalMessagingApi* | [**getQueueMetricsForSmsDefinition**](docs/TransactionalMessagingApi.md#getQueueMetricsForSmsDefinition) | **GET** /messaging/v1/sms/definitions/{definitionKey}/queue | getQueueMetricsForSmsDefinition
*SalesforceMarketingCloud.TransactionalMessagingApi* | [**getSMSsNotSentToRecipients**](docs/TransactionalMessagingApi.md#getSMSsNotSentToRecipients) | **GET** /messaging/v1/sms/messages/ | getSMSsNotSentToRecipients
*SalesforceMarketingCloud.TransactionalMessagingApi* | [**getSmsDefinition**](docs/TransactionalMessagingApi.md#getSmsDefinition) | **GET** /messaging/v1/sms/definitions/{definitionKey} | getSmsDefinition
*SalesforceMarketingCloud.TransactionalMessagingApi* | [**getSmsDefinitions**](docs/TransactionalMessagingApi.md#getSmsDefinitions) | **GET** /messaging/v1/sms/definitions | getSmsDefinitions
*SalesforceMarketingCloud.TransactionalMessagingApi* | [**getSmsSendStatusForRecipient**](docs/TransactionalMessagingApi.md#getSmsSendStatusForRecipient) | **GET** /messaging/v1/sms/messages/{messageKey} | getSmsSendStatusForRecipient
*SalesforceMarketingCloud.TransactionalMessagingApi* | [**partiallyUpdateEmailDefinition**](docs/TransactionalMessagingApi.md#partiallyUpdateEmailDefinition) | **PATCH** /messaging/v1/email/definitions/{definitionKey} | partiallyUpdateEmailDefinition
*SalesforceMarketingCloud.TransactionalMessagingApi* | [**partiallyUpdateSmsDefinition**](docs/TransactionalMessagingApi.md#partiallyUpdateSmsDefinition) | **PATCH** /messaging/v1/sms/definitions/{definitionKey} | partiallyUpdateSmsDefinition
*SalesforceMarketingCloud.TransactionalMessagingApi* | [**sendEmailToMultipleRecipients**](docs/TransactionalMessagingApi.md#sendEmailToMultipleRecipients) | **POST** /messaging/v1/email/messages/ | sendEmailToMultipleRecipients
*SalesforceMarketingCloud.TransactionalMessagingApi* | [**sendEmailToSingleRecipient**](docs/TransactionalMessagingApi.md#sendEmailToSingleRecipient) | **POST** /messaging/v1/email/messages/{messageKey} | sendEmailToSingleRecipient
*SalesforceMarketingCloud.TransactionalMessagingApi* | [**sendSmsToMultipleRecipients**](docs/TransactionalMessagingApi.md#sendSmsToMultipleRecipients) | **POST** /messaging/v1/sms/messages/ | sendSmsToMultipleRecipients
*SalesforceMarketingCloud.TransactionalMessagingApi* | [**sendSmsToSingleRecipient**](docs/TransactionalMessagingApi.md#sendSmsToSingleRecipient) | **POST** /messaging/v1/sms/messages/{messageKey} | sendSmsToSingleRecipient


## Documentation for Models

 - [SalesforceMarketingCloud.ApiError](docs/ApiError.md)
 - [SalesforceMarketingCloud.Asset](docs/Asset.md)
 - [SalesforceMarketingCloud.AssetType](docs/AssetType.md)
 - [SalesforceMarketingCloud.Attributes](docs/Attributes.md)
 - [SalesforceMarketingCloud.Campaign](docs/Campaign.md)
 - [SalesforceMarketingCloud.DeleteQueuedMessagesForSendDefinitionResponse](docs/DeleteQueuedMessagesForSendDefinitionResponse.md)
 - [SalesforceMarketingCloud.DeleteSendDefinitionResponse](docs/DeleteSendDefinitionResponse.md)
 - [SalesforceMarketingCloud.EmailDefinition](docs/EmailDefinition.md)
 - [SalesforceMarketingCloud.EmailDefinitionContent](docs/EmailDefinitionContent.md)
 - [SalesforceMarketingCloud.EmailDefinitionOptions](docs/EmailDefinitionOptions.md)
 - [SalesforceMarketingCloud.EmailDefinitionSubscriptions](docs/EmailDefinitionSubscriptions.md)
 - [SalesforceMarketingCloud.GetDefinitionSendStatusForRecipientResponse](docs/GetDefinitionSendStatusForRecipientResponse.md)
 - [SalesforceMarketingCloud.GetDefinitionSendStatusForRecipientResponseInfo](docs/GetDefinitionSendStatusForRecipientResponseInfo.md)
 - [SalesforceMarketingCloud.GetDefinitionsNotSentToRecipientsMessage](docs/GetDefinitionsNotSentToRecipientsMessage.md)
 - [SalesforceMarketingCloud.GetDefinitionsNotSentToRecipientsMessageInfo](docs/GetDefinitionsNotSentToRecipientsMessageInfo.md)
 - [SalesforceMarketingCloud.GetDefinitionsNotSentToRecipientsResponse](docs/GetDefinitionsNotSentToRecipientsResponse.md)
 - [SalesforceMarketingCloud.GetEmailDefinitionsResponse](docs/GetEmailDefinitionsResponse.md)
 - [SalesforceMarketingCloud.GetQueueMetricsForSendDefinitionResponse](docs/GetQueueMetricsForSendDefinitionResponse.md)
 - [SalesforceMarketingCloud.GetSmsDefinitionsResponse](docs/GetSmsDefinitionsResponse.md)
 - [SalesforceMarketingCloud.Recipient](docs/Recipient.md)
 - [SalesforceMarketingCloud.SendDefinitionResponseItem](docs/SendDefinitionResponseItem.md)
 - [SalesforceMarketingCloud.SendDefinitionToMultipleRecipientsResponse](docs/SendDefinitionToMultipleRecipientsResponse.md)
 - [SalesforceMarketingCloud.SendDefinitionToSingleRecipientResponse](docs/SendDefinitionToSingleRecipientResponse.md)
 - [SalesforceMarketingCloud.SendEmailToMultipleRecipientsRequest](docs/SendEmailToMultipleRecipientsRequest.md)
 - [SalesforceMarketingCloud.SendEmailToSingleRecipientRequest](docs/SendEmailToSingleRecipientRequest.md)
 - [SalesforceMarketingCloud.SendSmsContentRequest](docs/SendSmsContentRequest.md)
 - [SalesforceMarketingCloud.SendSmsToMultipleRecipientsRequest](docs/SendSmsToMultipleRecipientsRequest.md)
 - [SalesforceMarketingCloud.SendSmsToMultipleRecipientsSubscriptionsRequest](docs/SendSmsToMultipleRecipientsSubscriptionsRequest.md)
 - [SalesforceMarketingCloud.SendSmsToSingleRecipientRequest](docs/SendSmsToSingleRecipientRequest.md)
 - [SalesforceMarketingCloud.SharingProperties](docs/SharingProperties.md)
 - [SalesforceMarketingCloud.SmsDefinition](docs/SmsDefinition.md)
 - [SalesforceMarketingCloud.SmsDefinitionContent](docs/SmsDefinitionContent.md)
 - [SalesforceMarketingCloud.SmsDefinitionSubscriptions](docs/SmsDefinitionSubscriptions.md)
 - [SalesforceMarketingCloud.UpdateEmailDefinitionRequest](docs/UpdateEmailDefinitionRequest.md)
 - [SalesforceMarketingCloud.UpdateSmsDefinitionRequest](docs/UpdateSmsDefinitionRequest.md)
