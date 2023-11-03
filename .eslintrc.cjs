module.exports = {
  /** 프로젝트 루트부터 적용할 것 인지? */
  root: true,

  /** 코드가 실행되는 황경으 정의한다. */
  env: {
    browser: true,
    es2020: true,
  },

  /**
   * eslint-plugin-* 을 플러그인으로 설정해주면, rules 에 담고 있는 규칙들을 설정해 줄 수 있다.
   **/
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true,
      },
    ],
  },

  /**
   * 1. plugin 이 담고 있는 규칙들(rules) 을 파악해서 정의해주기란 쉽지않다.
   *    plugin 에서는 recommended 라는 자체 설정을 제공하여, rules 를 따로 적어주지않도록 지원한다.
   *
   * 2. eslint-config-* 는 plugin 들을 담고 있는 패키지 모음이다.
   *    eslint-config-* 의 * 를 설정해, 담고 있는 eslint-plugin 들을 한번에 적용해 줄 수 있다.
   **/
  extends: [
    'eslint:recommended',

    // eslint-config-prettier 를 설정해서, eslint 와 prettier 충돌을 비활성화한다.
    'prettier',

    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],

  /** 건너띄고 싶은 폴더, 파일을 설정한다. */
  ignorePatterns: ['dist', '.eslintrc.cjs'],

  /** 파서(코드의 구조를 이해할 수 있는 도구) 를 지정한다. */
  parser: '@typescript-eslint/parser',
};
