module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.ts$': 'ts-jest',
    },
    collectCoverage: true,
    coverageDirectory: '<rootDir>/tests/coverage',
    coverageReporters: [
        'text-summary',
        'html',
        'lcov',
        'cobertura',
    ],
    testMatch: [
        '<rootDir>/tests/unit/**/*.spec.ts',
    ],
    collectCoverageFrom: [
        'src/**/*.ts',
        '!src/**/*d.ts',
        'src/**/*.vue',
    ],
};
