module.exports = {
  mount: {
    src: '/',
    assets: {
      url: '/assets',
      static: true,
      resolve: false
    }
  },
  plugins: [
    '@snowpack/plugin-postcss'
  ],
  packageOptions: {},
  devOptions: {
    tailwindConfig: './tailwind.config.js'
  },
  buildOptions: {},
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html'
    }
  ]
}
