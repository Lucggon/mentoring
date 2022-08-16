const common = [
  '--require-module ts-node/register' // Load TypeScript module
];

const proyects_backend = [
  ...common,
  'tests/apps/proyects/backend/features/**/*.feature',
  '--require tests/apps/proyects/backend/features/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
  proyects_backend
};