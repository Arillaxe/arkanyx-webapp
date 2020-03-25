module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-min-length': [2, 'always', 10],
    'subject-max-length': [2, 'always', 72],
    'type-case': [2, 'always', 'sentence-case'],
    'type-enum': [2, 'always', [
      'Feature',
      'Fix',
      'Docs',
      'Style',
      'Lint',
      'Refactor',
      'Test',
      'Revert',
      'Bump',
    ]],
  },
};
