require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();
  
    for (const account of accounts) {
      console.log(account.address);
    }
  });

const ALCHEMY_API_KEY = "IqlZc-xHndazvmhyX4bNLaYxR_3ORYyr";
const ROPSTEN_PRIVATE_KEY = "8b2d264372dbd3e21e8d29ac30e5648ee85b864797c0efd1575179ab2e0d6121";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.7.3",

    defaultNetwork: 'rinkeby',
    networks: {
      ropsten: {
        url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
        accounts: [`${ROPSTEN_PRIVATE_KEY}`]
      },
      rinkeby: {
        url: `https://eth-rinkeby.alchemyapi.io/v2/xIG8Lv8ThTJrfNRp1r9zj4JbJgpTBWSK`,
        accounts: [`8b2d264372dbd3e21e8d29ac30e5648ee85b864797c0efd1575179ab2e0d6121`]
      }
    }
};