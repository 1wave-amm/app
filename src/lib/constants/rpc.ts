import { base } from 'viem/chains'

// BASE chain ID
export const BASE_CHAIN_ID = base.id // 8453

/**
 * Gets the RPC URL for BASE chain using VITE_ALCHEMY_API_KEY
 * ALWAYS uses Alchemy RPC - no fallback to public RPC to avoid rate limits
 */
export const getBaseRpcUrl = (): string => {
  const apiKey = import.meta.env.VITE_ALCHEMY_API_KEY || ''
  
  if (!apiKey || apiKey.trim() === '') {
    // Return a placeholder that will fail clearly if used
    return 'https://ALCHEMY_API_KEY_NOT_CONFIGURED.invalid'
  }
  
  const url = `https://base-mainnet.g.alchemy.com/v2/${apiKey}`
  return url
}

/**
 * Gets the RPC URL for BASE chain (legacy function name for compatibility)
 */
export const getRpcUrlForChain = (): string => {
  return getBaseRpcUrl()
}

