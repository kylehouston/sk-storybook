module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/**/*.d.ts'],
  testMatch: ['<rootDir>/**/__tests__/**/*.{js,jsx}', '<rootDir>/**/?(*.)(spec|test).{js,jsx}'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: [
    '^.+\\.module\\.(css|scss)$',
    'node_modules/(?!(reactjs-click-outside|@babel/runtime)/)' // The modules that need to be transpiled. You might not need this.
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js'
  },
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'node']
};
