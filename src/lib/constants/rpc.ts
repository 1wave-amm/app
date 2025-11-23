import { base } from 'viem/chains'

// BASE chain ID
export const BASE_CHAIN_ID = base.id // 8453

/**
 * Gets the RPC URL for BASE chain using VITE_ALCHEMY_API_KEY
 * Falls back to public RPC if API key is not set
 */
export const getBaseRpcUrl = (): string => {
  const apiKey = import.meta.env.VITE_ALCHEMY_API_KEY || ''
  if (apiKey) {
    const url = `https://base-mainnet.g.alchemy.com/v2/${apiKey}`
    console.log('[RPC] Using Alchemy RPC:', url.replace(apiKey, '***'))
    return url
  }
  // Fallback to public RPC
  console.warn('[RPC] No VITE_ALCHEMY_API_KEY found, using public RPC (may have rate limits)')
  return 'https://mainnet.base.org'
}

/**
 * Gets the RPC URL for BASE chain (legacy function name for compatibility)
 */
export const getRpcUrlForChain = (): string => {
  return getBaseRpcUrl()
}

