require('dotenv').config()
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  /* config options here */
  webpack: config => {
    config.node = {
      fs: 'empty'
    }
    return config
  },
  env: {
    'CHEC_PUBLIC_KEY': 'pk_178511bb808cdcaa54deba073eefe51688eb9cf470dfe',
    'NEXT_PUBLIC_CONTENTFUL_SPACE_ID': '9s4d0vl7140x',
    'NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN': '_75lTH8Nk1_vIx4-TmIHiKubzSgTg5nPzKjB-6K6WYE'
  }
})

