import { ChainId, Ether, NativeCurrency, Token, } from '@uniswap/sdk-core';
// WIP: Gnosis, Moonbeam
export const SUPPORTED_CHAINS = [
    ChainId.MAINNET,
    ChainId.OPTIMISM,
    ChainId.OPTIMISM_GOERLI,
    ChainId.ARBITRUM_ONE,
    ChainId.ARBITRUM_GOERLI,
    ChainId.POLYGON,
    ChainId.POLYGON_MUMBAI,
    ChainId.GOERLI,
    ChainId.SEPOLIA,
    ChainId.CELO_ALFAJORES,
    ChainId.CELO,
    ChainId.BNB,
    ChainId.AVALANCHE,
    ChainId.BASE,
    ChainId.ZKATANA,
    ChainId.SEIDEV,
    // Gnosis and Moonbeam don't yet have contracts deployed yet
];
export const V2_SUPPORTED = [ChainId.MAINNET, ChainId.GOERLI, ChainId.SEPOLIA];
export const HAS_L1_FEE = [
    ChainId.OPTIMISM,
    ChainId.OPTIMISM_GOERLI,
    ChainId.ARBITRUM_ONE,
    ChainId.ARBITRUM_GOERLI,
    ChainId.BASE,
    ChainId.BASE_GOERLI,
];
export const NETWORKS_WITH_SAME_UNISWAP_ADDRESSES = [
    ChainId.MAINNET,
    ChainId.GOERLI,
    ChainId.OPTIMISM,
    ChainId.ARBITRUM_ONE,
    ChainId.POLYGON,
    ChainId.POLYGON_MUMBAI,
];
export const ID_TO_CHAIN_ID = (id) => {
    switch (id) {
        case 1:
            return ChainId.MAINNET;
        case 5:
            return ChainId.GOERLI;
        case 11155111:
            return ChainId.SEPOLIA;
        case 56:
            return ChainId.BNB;
        case 10:
            return ChainId.OPTIMISM;
        case 420:
            return ChainId.OPTIMISM_GOERLI;
        case 42161:
            return ChainId.ARBITRUM_ONE;
        case 421613:
            return ChainId.ARBITRUM_GOERLI;
        case 137:
            return ChainId.POLYGON;
        case 80001:
            return ChainId.POLYGON_MUMBAI;
        case 42220:
            return ChainId.CELO;
        case 44787:
            return ChainId.CELO_ALFAJORES;
        case 100:
            return ChainId.GNOSIS;
        case 1284:
            return ChainId.MOONBEAM;
        case 43114:
            return ChainId.AVALANCHE;
        case 8453:
            return ChainId.BASE;
        case 84531:
            return ChainId.BASE_GOERLI;
        case 1261120:
            return ChainId.ZKATANA;
        case 713715:
            return ChainId.SEIDEV;
        default:
            throw new Error(`Unknown chain id: ${id}`);
    }
};
export var ChainName;
(function (ChainName) {
    ChainName["MAINNET"] = "mainnet";
    ChainName["GOERLI"] = "goerli";
    ChainName["SEPOLIA"] = "sepolia";
    ChainName["OPTIMISM"] = "optimism-mainnet";
    ChainName["OPTIMISM_GOERLI"] = "optimism-goerli";
    ChainName["ARBITRUM_ONE"] = "arbitrum-mainnet";
    ChainName["ARBITRUM_GOERLI"] = "arbitrum-goerli";
    ChainName["POLYGON"] = "polygon-mainnet";
    ChainName["POLYGON_MUMBAI"] = "polygon-mumbai";
    ChainName["CELO"] = "celo-mainnet";
    ChainName["CELO_ALFAJORES"] = "celo-alfajores";
    ChainName["GNOSIS"] = "gnosis-mainnet";
    ChainName["MOONBEAM"] = "moonbeam-mainnet";
    ChainName["BNB"] = "bnb-mainnet";
    ChainName["AVALANCHE"] = "avalanche-mainnet";
    ChainName["BASE"] = "base-mainnet";
    ChainName["BASE_GOERLI"] = "base-goerli";
    ChainName["ZKATANA"] = "zkatana";
    ChainName["SEIDEV"] = "seidev";
})(ChainName || (ChainName = {}));
export var NativeCurrencyName;
(function (NativeCurrencyName) {
    // Strings match input for CLI
    NativeCurrencyName["ETHER"] = "ETH";
    NativeCurrencyName["MATIC"] = "MATIC";
    NativeCurrencyName["CELO"] = "CELO";
    NativeCurrencyName["GNOSIS"] = "XDAI";
    NativeCurrencyName["MOONBEAM"] = "GLMR";
    NativeCurrencyName["BNB"] = "BNB";
    NativeCurrencyName["AVALANCHE"] = "AVAX";
    NativeCurrencyName["SEI"] = "SEI";
})(NativeCurrencyName || (NativeCurrencyName = {}));
export const NATIVE_NAMES_BY_ID = {
    [ChainId.MAINNET]: [
        'ETH',
        'ETHER',
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    ],
    [ChainId.GOERLI]: [
        'ETH',
        'ETHER',
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    ],
    [ChainId.SEPOLIA]: [
        'ETH',
        'ETHER',
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    ],
    [ChainId.OPTIMISM]: [
        'ETH',
        'ETHER',
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    ],
    [ChainId.OPTIMISM_GOERLI]: [
        'ETH',
        'ETHER',
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    ],
    [ChainId.ARBITRUM_ONE]: [
        'ETH',
        'ETHER',
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    ],
    [ChainId.ARBITRUM_GOERLI]: [
        'ETH',
        'ETHER',
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    ],
    [ChainId.POLYGON]: ['MATIC', '0x0000000000000000000000000000000000001010'],
    [ChainId.POLYGON_MUMBAI]: [
        'MATIC',
        '0x0000000000000000000000000000000000001010',
    ],
    [ChainId.CELO]: ['CELO'],
    [ChainId.CELO_ALFAJORES]: ['CELO'],
    [ChainId.GNOSIS]: ['XDAI'],
    [ChainId.MOONBEAM]: ['GLMR'],
    [ChainId.BNB]: ['BNB', 'BNB', '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'],
    [ChainId.AVALANCHE]: [
        'AVAX',
        'AVALANCHE',
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    ],
    [ChainId.BASE]: [
        'ETH',
        'ETHER',
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    ],
    [ChainId.ZKATANA]: [
        'ETH',
        'ETHER',
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    ],
    [ChainId.SEIDEV]: [
        'SEI',
        'SEI',
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', // TODO
    ],
};
export const NATIVE_CURRENCY = {
    [ChainId.MAINNET]: NativeCurrencyName.ETHER,
    [ChainId.GOERLI]: NativeCurrencyName.ETHER,
    [ChainId.SEPOLIA]: NativeCurrencyName.ETHER,
    [ChainId.OPTIMISM]: NativeCurrencyName.ETHER,
    [ChainId.OPTIMISM_GOERLI]: NativeCurrencyName.ETHER,
    [ChainId.ARBITRUM_ONE]: NativeCurrencyName.ETHER,
    [ChainId.ARBITRUM_GOERLI]: NativeCurrencyName.ETHER,
    [ChainId.POLYGON]: NativeCurrencyName.MATIC,
    [ChainId.POLYGON_MUMBAI]: NativeCurrencyName.MATIC,
    [ChainId.CELO]: NativeCurrencyName.CELO,
    [ChainId.CELO_ALFAJORES]: NativeCurrencyName.CELO,
    [ChainId.GNOSIS]: NativeCurrencyName.GNOSIS,
    [ChainId.MOONBEAM]: NativeCurrencyName.MOONBEAM,
    [ChainId.BNB]: NativeCurrencyName.BNB,
    [ChainId.AVALANCHE]: NativeCurrencyName.AVALANCHE,
    [ChainId.BASE]: NativeCurrencyName.ETHER,
    [ChainId.ZKATANA]: NativeCurrencyName.ETHER,
    [ChainId.SEIDEV]: NativeCurrencyName.SEI, // TODO
};
export const ID_TO_NETWORK_NAME = (id) => {
    switch (id) {
        case 1:
            return ChainName.MAINNET;
        case 5:
            return ChainName.GOERLI;
        case 11155111:
            return ChainName.SEPOLIA;
        case 56:
            return ChainName.BNB;
        case 10:
            return ChainName.OPTIMISM;
        case 420:
            return ChainName.OPTIMISM_GOERLI;
        case 42161:
            return ChainName.ARBITRUM_ONE;
        case 421613:
            return ChainName.ARBITRUM_GOERLI;
        case 137:
            return ChainName.POLYGON;
        case 80001:
            return ChainName.POLYGON_MUMBAI;
        case 42220:
            return ChainName.CELO;
        case 44787:
            return ChainName.CELO_ALFAJORES;
        case 100:
            return ChainName.GNOSIS;
        case 1284:
            return ChainName.MOONBEAM;
        case 43114:
            return ChainName.AVALANCHE;
        case 8453:
            return ChainName.BASE;
        case 84531:
            return ChainName.BASE_GOERLI;
        case 1261120:
            return ChainName.ZKATANA;
        case 713715:
            return ChainName.SEIDEV;
        default:
            throw new Error(`Unknown chain id: ${id}`);
    }
};
export const CHAIN_IDS_LIST = Object.values(ChainId).map((c) => c.toString());
export const ID_TO_PROVIDER = (id) => {
    switch (id) {
        case ChainId.MAINNET:
            return process.env.JSON_RPC_PROVIDER;
        case ChainId.GOERLI:
            return process.env.JSON_RPC_PROVIDER_GORLI;
        case ChainId.SEPOLIA:
            return process.env.JSON_RPC_PROVIDER_SEPOLIA;
        case ChainId.OPTIMISM:
            return process.env.JSON_RPC_PROVIDER_OPTIMISM;
        case ChainId.OPTIMISM_GOERLI:
            return process.env.JSON_RPC_PROVIDER_OPTIMISM_GOERLI;
        case ChainId.ARBITRUM_ONE:
            return process.env.JSON_RPC_PROVIDER_ARBITRUM_ONE;
        case ChainId.ARBITRUM_GOERLI:
            return process.env.JSON_RPC_PROVIDER_ARBITRUM_GOERLI;
        case ChainId.POLYGON:
            return process.env.JSON_RPC_PROVIDER_POLYGON;
        case ChainId.POLYGON_MUMBAI:
            return process.env.JSON_RPC_PROVIDER_POLYGON_MUMBAI;
        case ChainId.CELO:
            return process.env.JSON_RPC_PROVIDER_CELO;
        case ChainId.CELO_ALFAJORES:
            return process.env.JSON_RPC_PROVIDER_CELO_ALFAJORES;
        case ChainId.BNB:
            return process.env.JSON_RPC_PROVIDER_BNB;
        case ChainId.AVALANCHE:
            return process.env.JSON_RPC_PROVIDER_AVALANCHE;
        case ChainId.BASE:
            return process.env.JSON_RPC_PROVIDER_BASE;
        case ChainId.ZKATANA:
            return process.env.JSON_RPC_PROVIDER_ZKATANA;
        case ChainId.SEIDEV:
            return process.env.JSON_RPC_PROVIDER_SEIDEV;
        default:
            throw new Error(`Chain id: ${id} not supported`);
    }
};
export const WRAPPED_NATIVE_CURRENCY = {
    [ChainId.MAINNET]: new Token(1, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.GOERLI]: new Token(5, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.SEPOLIA]: new Token(11155111, '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.BNB]: new Token(56, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'),
    [ChainId.OPTIMISM]: new Token(ChainId.OPTIMISM, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.OPTIMISM_GOERLI]: new Token(ChainId.OPTIMISM_GOERLI, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.ARBITRUM_ONE]: new Token(ChainId.ARBITRUM_ONE, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.ARBITRUM_GOERLI]: new Token(ChainId.ARBITRUM_GOERLI, '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.POLYGON]: new Token(ChainId.POLYGON, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'WMATIC', 'Wrapped MATIC'),
    [ChainId.POLYGON_MUMBAI]: new Token(ChainId.POLYGON_MUMBAI, '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889', 18, 'WMATIC', 'Wrapped MATIC'),
    // The Celo native currency 'CELO' implements the erc-20 token standard
    [ChainId.CELO]: new Token(ChainId.CELO, '0x471EcE3750Da237f93B8E339c536989b8978a438', 18, 'CELO', 'Celo native asset'),
    [ChainId.CELO_ALFAJORES]: new Token(ChainId.CELO_ALFAJORES, '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9', 18, 'CELO', 'Celo native asset'),
    [ChainId.GNOSIS]: new Token(ChainId.GNOSIS, '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d', 18, 'WXDAI', 'Wrapped XDAI on Gnosis'),
    [ChainId.MOONBEAM]: new Token(ChainId.MOONBEAM, '0xAcc15dC74880C9944775448304B263D191c6077F', 18, 'WGLMR', 'Wrapped GLMR'),
    [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', 18, 'WAVAX', 'Wrapped AVAX'),
    [ChainId.BASE]: new Token(ChainId.BASE, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.BASE_GOERLI]: new Token(ChainId.BASE_GOERLI, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.ZKATANA]: new Token(ChainId.ZKATANA, '0xEbB3F7644F5D523B4cA7F5d1C94ea023f1D9b066', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.SEIDEV]: new Token(ChainId.SEIDEV, '0x57eE725BEeB991c70c53f9642f36755EC6eb2139', 18, 'WSEI', 'Wrapped SEI'),
};
function isMatic(chainId) {
    return chainId === ChainId.POLYGON_MUMBAI || chainId === ChainId.POLYGON;
}
class MaticNativeCurrency extends NativeCurrency {
    equals(other) {
        return other.isNative && other.chainId === this.chainId;
    }
    get wrapped() {
        if (!isMatic(this.chainId))
            throw new Error('Not matic');
        const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
        if (nativeCurrency) {
            return nativeCurrency;
        }
        throw new Error(`Does not support this chain ${this.chainId}`);
    }
    constructor(chainId) {
        if (!isMatic(chainId))
            throw new Error('Not matic');
        super(chainId, 18, 'MATIC', 'Polygon Matic');
    }
}
function isCelo(chainId) {
    return chainId === ChainId.CELO_ALFAJORES || chainId === ChainId.CELO;
}
class CeloNativeCurrency extends NativeCurrency {
    equals(other) {
        return other.isNative && other.chainId === this.chainId;
    }
    get wrapped() {
        if (!isCelo(this.chainId))
            throw new Error('Not celo');
        const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
        if (nativeCurrency) {
            return nativeCurrency;
        }
        throw new Error(`Does not support this chain ${this.chainId}`);
    }
    constructor(chainId) {
        if (!isCelo(chainId))
            throw new Error('Not celo');
        super(chainId, 18, 'CELO', 'Celo');
    }
}
function isGnosis(chainId) {
    return chainId === ChainId.GNOSIS;
}
class GnosisNativeCurrency extends NativeCurrency {
    equals(other) {
        return other.isNative && other.chainId === this.chainId;
    }
    get wrapped() {
        if (!isGnosis(this.chainId))
            throw new Error('Not gnosis');
        const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
        if (nativeCurrency) {
            return nativeCurrency;
        }
        throw new Error(`Does not support this chain ${this.chainId}`);
    }
    constructor(chainId) {
        if (!isGnosis(chainId))
            throw new Error('Not gnosis');
        super(chainId, 18, 'XDAI', 'xDai');
    }
}
function isBnb(chainId) {
    return chainId === ChainId.BNB;
}
class BnbNativeCurrency extends NativeCurrency {
    equals(other) {
        return other.isNative && other.chainId === this.chainId;
    }
    get wrapped() {
        if (!isBnb(this.chainId))
            throw new Error('Not bnb');
        const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
        if (nativeCurrency) {
            return nativeCurrency;
        }
        throw new Error(`Does not support this chain ${this.chainId}`);
    }
    constructor(chainId) {
        if (!isBnb(chainId))
            throw new Error('Not bnb');
        super(chainId, 18, 'BNB', 'BNB');
    }
}
function isMoonbeam(chainId) {
    return chainId === ChainId.MOONBEAM;
}
class MoonbeamNativeCurrency extends NativeCurrency {
    equals(other) {
        return other.isNative && other.chainId === this.chainId;
    }
    get wrapped() {
        if (!isMoonbeam(this.chainId))
            throw new Error('Not moonbeam');
        const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
        if (nativeCurrency) {
            return nativeCurrency;
        }
        throw new Error(`Does not support this chain ${this.chainId}`);
    }
    constructor(chainId) {
        if (!isMoonbeam(chainId))
            throw new Error('Not moonbeam');
        super(chainId, 18, 'GLMR', 'Glimmer');
    }
}
function isAvax(chainId) {
    return chainId === ChainId.AVALANCHE;
}
class AvalancheNativeCurrency extends NativeCurrency {
    equals(other) {
        return other.isNative && other.chainId === this.chainId;
    }
    get wrapped() {
        if (!isAvax(this.chainId))
            throw new Error('Not avalanche');
        const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
        if (nativeCurrency) {
            return nativeCurrency;
        }
        throw new Error(`Does not support this chain ${this.chainId}`);
    }
    constructor(chainId) {
        if (!isAvax(chainId))
            throw new Error('Not avalanche');
        super(chainId, 18, 'AVAX', 'Avalanche');
    }
}
export class ExtendedEther extends Ether {
    get wrapped() {
        if (this.chainId in WRAPPED_NATIVE_CURRENCY) {
            return WRAPPED_NATIVE_CURRENCY[this.chainId];
        }
        throw new Error('Unsupported chain ID');
    }
    static onChain(chainId) {
        var _a;
        return ((_a = this._cachedExtendedEther[chainId]) !== null && _a !== void 0 ? _a : (this._cachedExtendedEther[chainId] = new ExtendedEther(chainId)));
    }
}
ExtendedEther._cachedExtendedEther = {};
const cachedNativeCurrency = {};
export function nativeOnChain(chainId) {
    if (cachedNativeCurrency[chainId] != undefined) {
        return cachedNativeCurrency[chainId];
    }
    if (isMatic(chainId)) {
        cachedNativeCurrency[chainId] = new MaticNativeCurrency(chainId);
    }
    else if (isCelo(chainId)) {
        cachedNativeCurrency[chainId] = new CeloNativeCurrency(chainId);
    }
    else if (isGnosis(chainId)) {
        cachedNativeCurrency[chainId] = new GnosisNativeCurrency(chainId);
    }
    else if (isMoonbeam(chainId)) {
        cachedNativeCurrency[chainId] = new MoonbeamNativeCurrency(chainId);
    }
    else if (isBnb(chainId)) {
        cachedNativeCurrency[chainId] = new BnbNativeCurrency(chainId);
    }
    else if (isAvax(chainId)) {
        cachedNativeCurrency[chainId] = new AvalancheNativeCurrency(chainId);
    }
    else {
        cachedNativeCurrency[chainId] = ExtendedEther.onChain(chainId);
    }
    return cachedNativeCurrency[chainId];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhaW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWwvY2hhaW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxPQUFPLEVBRVAsS0FBSyxFQUNMLGNBQWMsRUFDZCxLQUFLLEdBQ04sTUFBTSxtQkFBbUIsQ0FBQztBQUUzQix3QkFBd0I7QUFDeEIsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQWM7SUFDekMsT0FBTyxDQUFDLE9BQU87SUFDZixPQUFPLENBQUMsUUFBUTtJQUNoQixPQUFPLENBQUMsZUFBZTtJQUN2QixPQUFPLENBQUMsWUFBWTtJQUNwQixPQUFPLENBQUMsZUFBZTtJQUN2QixPQUFPLENBQUMsT0FBTztJQUNmLE9BQU8sQ0FBQyxjQUFjO0lBQ3RCLE9BQU8sQ0FBQyxNQUFNO0lBQ2QsT0FBTyxDQUFDLE9BQU87SUFDZixPQUFPLENBQUMsY0FBYztJQUN0QixPQUFPLENBQUMsSUFBSTtJQUNaLE9BQU8sQ0FBQyxHQUFHO0lBQ1gsT0FBTyxDQUFDLFNBQVM7SUFDakIsT0FBTyxDQUFDLElBQUk7SUFDWixPQUFPLENBQUMsT0FBTztJQUNmLE9BQU8sQ0FBQyxNQUFNO0lBQ2QsNERBQTREO0NBQzdELENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRS9FLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRztJQUN4QixPQUFPLENBQUMsUUFBUTtJQUNoQixPQUFPLENBQUMsZUFBZTtJQUN2QixPQUFPLENBQUMsWUFBWTtJQUNwQixPQUFPLENBQUMsZUFBZTtJQUN2QixPQUFPLENBQUMsSUFBSTtJQUNaLE9BQU8sQ0FBQyxXQUFXO0NBQ3BCLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxvQ0FBb0MsR0FBRztJQUNsRCxPQUFPLENBQUMsT0FB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