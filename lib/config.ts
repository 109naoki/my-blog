// Configuration constants and environment variable validation
export const config = {
  microcms: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || 'demo',
    apiKey: process.env.MICROCMS_API_KEY || 'demo-key',
    isDemo: !process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY,
  },
} as const;