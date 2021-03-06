/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the SlotConfigNames class.
 * @constructor
 * Class containing names for connection strings and application settings to
 * be marked as sticky to the slot
 * and not moved during swap operation
 * This is valid for all deployment slots under the site
 *
 * @member {array} [connectionStringNames] List of connection string names
 * 
 * @member {array} [appSettingNames] List of application settings names
 * 
 */
function SlotConfigNames() {
}

/**
 * Defines the metadata of SlotConfigNames
 *
 * @returns {object} metadata of SlotConfigNames
 *
 */
SlotConfigNames.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'SlotConfigNames',
    type: {
      name: 'Composite',
      className: 'SlotConfigNames',
      modelProperties: {
        connectionStringNames: {
          required: false,
          serializedName: 'connectionStringNames',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        appSettingNames: {
          required: false,
          serializedName: 'appSettingNames',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = SlotConfigNames;
