const withPWA = require('next-pwa')({
  dest: 'public'
})



/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};


module.exports = withPWA({nextConfig
  // next.js config
});

export default nextConfig;
