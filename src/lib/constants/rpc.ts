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
    return `https://base-mainnet.g.alchemy.com/v2/${apiKey}`
  }
  // Fallback to public RPC
  return 'https://mainnet.base.org'
}

/**
 * Gets the RPC URL for BASE chain (legacy function name for compatibility)
 */
export const getRpcUrlForChain = (): string => {
  return getBaseRpcUrl()
}

