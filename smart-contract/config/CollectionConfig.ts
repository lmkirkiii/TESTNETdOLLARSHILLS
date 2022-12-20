import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'DollarShillzz',
  tokenName: 'Dollar Shillzzzz',
  tokenSymbol: 'SHLZZ',
  hiddenMetadataUri: 'ipfs://QmQY2R34TxQUYAawhpesKJxMSz9Y73qK1KmfweVtwFQe2L/hidden.json',
  maxSupply: 4269,
  whitelistSale: {
    price: 0.042,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.066,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.069,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0xd8D0b16bc033ecfe0B7581e896BE423f33F7bf4d",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
