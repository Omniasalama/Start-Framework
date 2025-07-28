
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Start-Framework/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Start-Framework"
  },
  {
    "renderMode": 2,
    "route": "/Start-Framework/About"
  },
  {
    "renderMode": 2,
    "route": "/Start-Framework/Portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Start-Framework/Contact"
  },
  {
    "renderMode": 2,
    "route": "/Start-Framework/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5322, hash: '0faaf7e92f4e62fd6090e3af15a10b1f07b519f19966945f8e2baeac56b55ede', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 964, hash: '0402232fc0155aff2deb254f5250f146b266a7c811aefa91f4bbdf109db32bf6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Contact/index.html': {size: 25439, hash: 'e0098c51330ee602b00597ac2195a0fe6ab875d62c97daf4d946bd5963f45244', text: () => import('./assets-chunks/Contact_index_html.mjs').then(m => m.default)},
    'Portfolio/index.html': {size: 23965, hash: 'aab42c63f3289d1dbd50f8f2b9fa5cc146cb5324230c47601debde243de911e4', text: () => import('./assets-chunks/Portfolio_index_html.mjs').then(m => m.default)},
    'About/index.html': {size: 19006, hash: 'f3739786009c0d8b21d8ddc4fc3c15d64b320277f67607721984de674b8a81ba', text: () => import('./assets-chunks/About_index_html.mjs').then(m => m.default)},
    'index.html': {size: 18949, hash: '184049a43ca1d9bca9efd5224d3971ef7b4f5795094e9d38f2354453d8e5c850', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-EF3PZ3TZ.css': {size: 305265, hash: '0C9uLGsAWTY', text: () => import('./assets-chunks/styles-EF3PZ3TZ_css.mjs').then(m => m.default)}
  },
};
