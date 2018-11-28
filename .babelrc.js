const useESModules = process.env.NODE_ENV === 'esm';

module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false }],
    ['@babel/preset-react', { development: true, useBuiltIns: true }],
  ],
  plugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    ['@babel/plugin-transform-runtime', { useESModules }],
    '@babel/plugin-proposal-class-properties',
  ],
};
