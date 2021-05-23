/**
 * PeripheralDevice.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    uid: { type: 'number' },

    vendor: {
      type: 'string',
      maxLength: 100
    },

    status: {
      type: 'string',
      isIn: ['online', 'offline']
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    gateway: {
      model: 'gateway'
    }

  },

  beforeCreate: async (valuesToSet, proceed) => {
    const maxDevices = sails.config.globals.maxDevicesPerGateway;

    let gatewayId = valuesToSet.gateway;
    if (gatewayId) {
      let gateway = await Gateway.findOne({ id: gatewayId }).populate('devices');

      if (gateway && gateway.devices.length === maxDevices) {
        return proceed(new Error(`Maximum allowed devices is ${maxDevices}.`));
      }
    }

    return proceed();
  }
};

