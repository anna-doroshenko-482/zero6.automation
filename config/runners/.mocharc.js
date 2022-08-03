module.exports = {
  timeout: 500000,
  slow: 50000,
  reporter: 'mocha-multi-reporters',
  reporterOptions: ['configFile=reporterConfig.json'],
  package: './package.json',
  require: [
    "ts-node/register",
    "tsconfig-paths/register",
    "config/runners/mocha.hooks"
  ],
  recursive: ['./specs/api/**/*.test.ts'],
  retries: 0,
  maxParallel: 1
};