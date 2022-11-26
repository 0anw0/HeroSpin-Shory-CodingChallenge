module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          'navigator': './scr/navigation/index.tsx', 
          'screens': './scr/screens/index.tsx', 
          "styles": './scr/styles/index.tsx', 
          "utils":'./scr/utils/index.tsx'
        }
      }
    ],
    'jest-hoist'
  ]
};

