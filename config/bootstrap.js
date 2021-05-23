/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

/**
 * Get a random number between 100 and 999.
 * @returns {number}
 */
const getRandomNumber = () => Math.floor(
  Math.random() * (999 - 101) + 100
);

module.exports.bootstrap = async function () {

  // Create some Gateways.
  let gateways = await Gateway.createEach([
    {
      serialNumber: 'serial111',
      name: 'gateway1',
      ipAddress: '10.0.0.1'
    },
    {
      serialNumber: 'serial112',
      name: 'gateway2',
      ipAddress: '10.0.0.2'
    },
    {
      serialNumber: 'serial113',
      name: 'gateway3',
      ipAddress: '10.0.0.3'
    },
    {
      serialNumber: 'serial114',
      name: 'gateway4',
      ipAddress: '10.0.0.4'
    },
    {
      serialNumber: 'serial115',
      name: 'gateway5',
      ipAddress: '10.0.0.5'
    },
    {
      serialNumber: 'serial116',
      name: 'gateway6',
      ipAddress: '10.0.0.6'
    }
  ]).fetch();

  // Create some devices for the gateway.
  if (gateways && gateways.length) {
    for (let gateway of gateways) {

      await PeripheralDevice.createEach([
        {
          uid: getRandomNumber(),
          vendor: 'vendor1',
          status: 'online',
          gateway: gateway.id
        },
        {
          uid: getRandomNumber(),
          vendor: 'vendor2',
          status: 'offline',
          gateway: gateway.id
        },
        {
          uid: getRandomNumber(),
          vendor: 'vendor3',
          status: 'online',
          gateway: gateway.id
        }
      ]);
    }
  }
};
