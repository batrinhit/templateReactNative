module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': 0,
    'no-unused-vars': 2,
    // 'arrow-body-style': [2, 'as-needed'],
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'react/destructuring-assignment': 0,
    'react/require-default-props': 1,
    'react/require-extension': 0,
    'react/forbid-prop-types': 0,
    'no-use-before-define': 0,
    'no-console': 1,
    'class-methods-use-this': 0,
    'import/newline-after-import': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './src']],
        extensions: ['.js', '.android.js', '.ios.js', '.web.js'],
      },
    },
  },
};
