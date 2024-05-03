import { ChainId, Token } from '@uniswap/sdk-core';
import _ from 'lodash';
import { log, WRAPPED_NATIVE_CURRENCY } from '../util';
import { BTC_BNB, BUSD_BNB, CELO, CELO_ALFAJORES, CEUR_CELO, CUSD_CELO, CUSD_CELO_ALFAJORES, DAI_ARBITRUM, DAI_AVAX, DAI_BNB, DAI_CELO, DAI_CELO_ALFAJORES, DAI_MAINNET, DAI_MOONBEAM, DAI_OPTIMISM, DAI_OPTIMISM_GOERLI, DAI_POLYGON_MUMBAI, ETH_BNB, USDC_ARBITRUM, USDC_ARBITRUM_GOERLI, USDC_AVAX, USDC_BASE, USDC_BNB, USDC_ETHEREUM_GNOSIS, USDC_MAINNET, USDC_MOONBEAM, USDC_OPTIMISM, USDC_OPTIMISM_GOERLI, USDC_POLYGON, USDC_SEPOLIA, USDC_ZKATANA, USDT_ARBITRUM, USDT_BNB, USDT_MAINNET, USDT_OPTIMISM, USDT_OPTIMISM_GOERLI, WBTC_ARBITRUM, WBTC_MAINNET, WBTC_MOONBEAM, WBTC_OPTIMISM, WBTC_OPTIMISM_GOERLI, WMATIC_POLYGON, WMATIC_POLYGON_MUMBAI, mUSDC_SEIDEV, } from './token-provider';
// These tokens will added to the Token cache on initialization.
export const CACHE_SEED_TOKENS = {
    [ChainId.MAINNET]: {
        WETH: WRAPPED_NATIVE_CURRENCY[ChainId.MAINNET],
        USDC: USDC_MAINNET,
        USDT: USDT_MAINNET,
        WBTC: WBTC_MAINNET,
        DAI: DAI_MAINNET,
        // This token stores its symbol as bytes32, therefore can not be fetched on-chain using
        // our token providers.
        // This workaround adds it to the cache, so we won't try to fetch it on-chain.
        RING: new Token(ChainId.MAINNET, '0x9469D013805bFfB7D3DEBe5E7839237e535ec483', 18, 'RING', 'RING'),
    },
    [ChainId.SEPOLIA]: {
        USDC: USDC_SEPOLIA,
    },
    [ChainId.OPTIMISM]: {
        USDC: USDC_OPTIMISM,
        USDT: USDT_OPTIMISM,
        WBTC: WBTC_OPTIMISM,
        DAI: DAI_OPTIMISM,
    },
    [ChainId.OPTIMISM_GOERLI]: {
        USDC: USDC_OPTIMISM_GOERLI,
        USDT: USDT_OPTIMISM_GOERLI,
        WBTC: WBTC_OPTIMISM_GOERLI,
        DAI: DAI_OPTIMISM_GOERLI,
    },
    [ChainId.ARBITRUM_ONE]: {
        USDC: USDC_ARBITRUM,
        USDT: USDT_ARBITRUM,
        WBTC: WBTC_ARBITRUM,
        DAI: DAI_ARBITRUM,
    },
    [ChainId.ARBITRUM_GOERLI]: {
        USDC: USDC_ARBITRUM_GOERLI,
    },
    [ChainId.POLYGON]: {
        WMATIC: WMATIC_POLYGON,
        USDC: USDC_POLYGON,
    },
    [ChainId.POLYGON_MUMBAI]: {
        WMATIC: WMATIC_POLYGON_MUMBAI,
        DAI: DAI_POLYGON_MUMBAI,
    },
    [ChainId.CELO]: {
        CELO: CELO,
        CUSD: CUSD_CELO,
        CEUR: CEUR_CELO,
        DAI: DAI_CELO,
    },
    [ChainId.CELO_ALFAJORES]: {
        CELO: CELO_ALFAJORES,
        CUSD: CUSD_CELO_ALFAJORES,
        CEUR: CUSD_CELO_ALFAJORES,
        DAI: DAI_CELO_ALFAJORES,
    },
    [ChainId.GNOSIS]: {
        WXDAI: WRAPPED_NATIVE_CURRENCY[ChainId.GNOSIS],
        USDC_ETHEREUM_GNOSIS: USDC_ETHEREUM_GNOSIS,
    },
    [ChainId.MOONBEAM]: {
        USDC: USDC_MOONBEAM,
        DAI: DAI_MOONBEAM,
        WBTC: WBTC_MOONBEAM,
        WGLMR: WRAPPED_NATIVE_CURRENCY[ChainId.MOONBEAM],
    },
    [ChainId.BNB]: {
        USDC: USDC_BNB,
        USDT: USDT_BNB,
        BUSD: BUSD_BNB,
        ETH: ETH_BNB,
        DAI: DAI_BNB,
        BTC: BTC_BNB,
        WBNB: WRAPPED_NATIVE_CURRENCY[ChainId.BNB],
    },
    [ChainId.AVALANCHE]: {
        USDC: USDC_AVAX,
        DAI: DAI_AVAX,
        WAVAX: WRAPPED_NATIVE_CURRENCY[ChainId.AVALANCHE],
    },
    [ChainId.BASE]: {
        USDC: USDC_BASE,
        WETH: WRAPPED_NATIVE_CURRENCY[ChainId.BASE],
    },
    [ChainId.ZKATANA]: {
        USDC: USDC_ZKATANA,
        WETH: WRAPPED_NATIVE_CURRENCY[ChainId.ZKATANA],
    },
    [ChainId.SEIDEV]: {
        USDC: mUSDC_SEIDEV,
    },
    // Currently we do not have providers for Moonbeam mainnet or Gnosis testnet
};
/**
 * Provider for getting token metadata that falls back to a different provider
 * in the event of failure.
 *
 * @export
 * @class CachingTokenProviderWithFallback
 */
export class CachingTokenProviderWithFallback {
    constructor(chainId, 
    // Token metadata (e.g. symbol and decimals) don't change so can be cached indefinitely.
    // Constructing a new token object is slow as sdk-core does checksumming.
    tokenCache, primaryTokenProvider, fallbackTokenProvider) {
        this.chainId = chainId;
        this.tokenCache = tokenCache;
        this.primaryTokenProvider = primaryTokenProvider;
        this.fallbackTokenProvider = fallbackTokenProvider;
        this.CACHE_KEY = (chainId, address) => `token-${chainId}-${address}`;
    }
    async getTokens(_addresses) {
        const seedTokens = CACHE_SEED_TOKENS[this.chainId];
        if (seedTokens) {
            for (const token of Object.values(seedTokens)) {
                await this.tokenCache.set(this.CACHE_KEY(this.chainId, token.address.toLowerCase()), token);
            }
        }
        const addressToToken = {};
        const symbolToToken = {};
        const addresses = _(_addresses)
            .map((address) => address.toLowerCase())
            .uniq()
            .value();
        const addressesToFindInPrimary = [];
        const addressesToFindInSecondary = [];
        for (const address of addresses) {
            if (await this.tokenCache.has(this.CACHE_KEY(this.chainId, address))) {
                addressToToken[address.toLowerCase()] = (await this.tokenCache.get(this.CACHE_KEY(this.chainId, address)));
                symbolToToken[addressToToken[address].symbol] =
                    (await this.tokenCache.get(this.CACHE_KEY(this.chainId, address)));
            }
            else {
                addressesToFindInPrimary.push(address);
            }
        }
        log.info({ addressesToFindInPrimary }, `Found ${addresses.length - addressesToFindInPrimary.length} out of ${addresses.length} tokens in local cache. ${addressesToFindInPrimary.length > 0
            ? `Checking primary token provider for ${addressesToFindInPrimary.length} tokens`
            : ``}
      `);
        if (addressesToFindInPrimary.length > 0) {
            const primaryTokenAccessor = await this.primaryTokenProvider.getTokens(addressesToFindInPrimary);
            for (const address of addressesToFindInPrimary) {
                const token = primaryTokenAccessor.getTokenByAddress(address);
                if (token) {
                    addressToToken[address.toLowerCase()] = token;
                    symbolToToken[addressToToken[address].symbol] = token;
                    await this.tokenCache.set(this.CACHE_KEY(this.chainId, address.toLowerCase()), addressToToken[address]);
                }
                else {
                    addressesToFindInSecondary.push(address);
                }
            }
            log.info({ addressesToFindInSecondary }, `Found ${addressesToFindInPrimary.length - addressesToFindInSecondary.length} tokens in primary. ${this.fallbackTokenProvider
                ? `Checking secondary token provider for ${addressesToFindInSecondary.length} tokens`
                : `No fallback token provider specified. About to return.`}`);
        }
        if (this.fallbackTokenProvider && addressesToFindInSecondary.length > 0) {
            const secondaryTokenAccessor = await this.fallbackTokenProvider.getTokens(addressesToFindInSecondary);
            for (const address of addressesToFindInSecondary) {
                const token = secondaryTokenAccessor.getTokenByAddress(address);
                if (token) {
                    addressToToken[address.toLowerCase()] = token;
                    symbolToToken[addressToToken[address].symbol] = token;
                    await this.tokenCache.set(this.CACHE_KEY(this.chainId, address.toLowerCase()), addressToToken[address]);
                }
            }
        }
        return {
            getTokenByAddress: (address) => {
                return addressToToken[address.toLowerCase()];
            },
            getTokenBySymbol: (symbol) => {
                return symbolToToken[symbol.toLowerCase()];
            },
            getAllTokens: () => {
                return Object.values(addressToToken);
            },
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGluZy10b2tlbi1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcm92aWRlcnMvY2FjaGluZy10b2tlbi1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixPQUFPLEVBQUUsR0FBRyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBR3ZELE9BQU8sRUFDTCxPQUFPLEVBQ1AsUUFBUSxFQUNSLElBQUksRUFDSixjQUFjLEVBQ2QsU0FBUyxFQUNULFNBQVMsRUFDVCxtQkFBbUIsRUFDbkIsWUFBWSxFQUNaLFFBQVEsRUFDUixPQUFPLEVBQ1AsUUFBUSxFQUNSLGtCQUFrQixFQUNsQixXQUFXLEVBQ1gsWUFBWSxFQUNaLFlBQVksRUFDWixtQkFBbUIsRUFDbkIsa0JBQWtCLEVBQ2xCLE9BQU8sRUFHUCxhQUFhLEVBQ2Isb0JBQW9CLEVBQ3BCLFNBQVMsRUFDVCxTQUFTLEVBQ1QsUUFBUSxFQUNSLG9CQUFvQixFQUNwQixZQUFZLEVBQ1osYUFBYSxFQUNiLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIsWUFBWSxFQUNaLFlBQVksRUFDWixZQUFZLEVBQ1osYUFBYSxFQUNiLFFBQVEsRUFDUixZQUFZLEVBQ1osYUFBYSxFQUNiLG9CQUFvQixFQUNwQixhQUFhLEVBQ2IsWUFBWSxFQUNaLGFBQWEsRUFDYixhQUFhLEVBQ2Isb0JBQW9CLEVBQ3BCLGNBQWMsRUFDZCxxQkFBcUIsRUFDckIsWUFBWSxHQUNiLE1BQU0sa0JBQWtCLENBQUM7QUFFMUIsZ0VBQWdFO0FBQ2hFLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUUxQjtJQUNGLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ2pCLElBQUksRUFBRSx1QkFBdUIsQ0FBQyxP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