const withPWA = require('next-pwa')({
  dest: 'public'
})
/**
module.exports = withPWA({
  // next.js config
})
 * */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};


module.exports = withPWA({nextConfig
  // next.js config
});