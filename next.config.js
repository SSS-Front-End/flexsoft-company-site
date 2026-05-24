const createNextIntlPlugin = require('next-intl/plugin');


const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  basePath: isProd ? '/flexsoft-company-site' : '',
  assetPrefix: isProd ? '/flexsoft-company-site/' : '',
  images: {
    unoptimized: true,
  },
  
};

module.exports = withNextIntl(nextConfig);
