module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/shared': './src/shared',
          '@/pages': './src/pages',
          '@/app': './src/app',
          '@/widgets': './src/widgets',
          '@/entities': './src/entities',
          '@/features': './src/features',
        },
      },
    ],
  ],
};
