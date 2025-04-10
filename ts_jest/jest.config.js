module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    testMatch: ['**/__tests__/**/*.(ts|tsx)', '**/?(*.)+(spec|test).(ts|tsx)'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    globals: {
        'ts-jest': {
          tsconfig: 'tsconfig.json'
        }
      }
  };
  