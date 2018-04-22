const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
    parser: 'babel-eslint',

    extends: 'fbjs-opensource',

    plugins: [
        'react',
        'flowtype',
        'import',
        'unicorn'
    ],

    // We're stricter than the default config, mostly. We'll override a few rules
    // and then enable some React specific ones.
    rules: {
        'accessor-pairs': OFF,
        'array-callback-return': ERROR,
        'brace-style': [ERROR, '1tbs'],
        'camelcase': OFF,
        'comma-dangle': [ERROR, 'never'],
        'consistent-return': ERROR,
        'dot-location': [ERROR, 'property'],
        'dot-notation': ERROR,
        'eol-last': ERROR,
        'eqeqeq': [ERROR, 'allow-null'],
        'indent': [ERROR, 4, {SwitchCase: 1}],
        'jsx-quotes': [ERROR, 'prefer-double'],
        'max-len': [
            ERROR, {
                code: 120,
                ignorePattern: '^import '
            }
        ],
        'no-bitwise': OFF,
        'no-case-declarations': ERROR,
        'no-duplicate-imports': OFF,
        'no-inner-declarations': [ERROR, 'functions'],
        'no-multi-spaces': ERROR,
        'no-param-reassign': ERROR,
        'no-restricted-syntax': [ERROR, 'WithStatement'],
        'no-return-assign': OFF,
        'no-shadow': ERROR,
        'no-unused-expressions': [ERROR, {'allowShortCircuit': true}],
        'no-unused-vars': [ERROR, {args: 'none'}],
        'no-useless-escape': ERROR,
        'no-warning-comments': ERROR,
        'prefer-const': ERROR,
        'prefer-rest-params': ERROR,
        'quotes': [ERROR, 'single', 'avoid-escape'],
        'keyword-spacing': ERROR,
        'space-before-blocks': ERROR,
        'space-before-function-paren': [ERROR, {anonymous: 'always', named: 'never'}],
        'strict': [ERROR, 'global'],
        'radix': OFF,
        'no-console': ERROR,
        'object-shorthand': [ERROR, 'always'],
        'linebreak-style': OFF,
        'no-cond-assign': OFF,
        'no-constant-condition': ERROR,
        'no-alert': ERROR,
        'no-void': ERROR,
        'quote-props': ERROR,
        'space-unary-ops': ERROR,
        'spaced-comment': ERROR,
        'no-var': ERROR,
        'space-in-parens': ERROR,
        'arrow-parens': ERROR,
        'no-confusing-arrow': ERROR,
        'no-useless-constructor': ERROR,
        'curly': ERROR,
        'no-multiple-empty-lines': ERROR,

        // React & JSX
        // Our transforms set this automatically
        'react/display-name': OFF,
        'react/jsx-boolean-value': [ERROR, 'always'],
        'react/jsx-no-undef': ERROR,
        // We don't care to do this
        'react/jsx-sort-prop-types': OFF,
        'react/jsx-sort-props': OFF,
        'react/jsx-uses-react': ERROR,
        'react/jsx-uses-vars': ERROR,
        // It's easier to test some things this way
        'react/no-did-mount-set-state': OFF,
        'react/no-did-update-set-state': OFF,
        // We define multiple components in test files
        'react/no-multi-comp': OFF,
        'react/no-unknown-property': OFF,
        // This isn't useful in our test code
        'react/prop-types': OFF,
        'react/react-in-jsx-scope': ERROR,
        'react/self-closing-comp': ERROR,
        // We don't care to do this
        'react/sort-comp': [ERROR, {
            order: [
                'type-annotations',
                'static-methods',
                'lifecycle',
                'everything-else',
                'render',
            ]
        }],
        'react/jsx-closing-bracket-location': ERROR,
        'react/prefer-es6-class': ERROR,
        'react/jsx-pascal-case': ERROR,
        'react/jsx-curly-spacing': ERROR,
        'react/no-is-mounted': ERROR,
        'react/jsx-wrap-multilines': [ERROR, {declaration: false, assignment: false}],
        'react/no-danger': ERROR,
        'react/jsx-indent': [OFF, 4], // Seems to be overwritten by indent rule
        'react/jsx-indent-props': [OFF, 4], // Seems to be overwritten by indent rule
        'react/jsx-tag-spacing': OFF,
        'react/jsx-space-before-closing': OFF,
        'react/jsx-key': ERROR,

        'flowtype/boolean-style': ERROR,
        'flowtype/generic-spacing': ERROR,
        'flowtype/no-dupe-keys': ERROR,
        'flowtype/no-primitive-constructor-types': ERROR,
        'flowtype/object-type-delimiter': [ERROR, 'comma'],
        'flowtype/semi': ERROR,
        'flowtype/space-after-type-colon': ERROR,
        'flowtype/space-before-generic-bracket': ERROR,
        'flowtype/space-before-type-colon': ERROR,
        'flowtype/union-intersection-spacing': ERROR,
        'flowtype/delimiter-dangle': [ERROR, 'never'],
        'flowtype/no-weak-types': [ERROR, {
            'any': true,
            'Object': true,
            'Function': true
        }],

        'import/no-duplicates': ERROR,
        'import/newline-after-import': ERROR,

        'jasmine/no-spec-dupes': ERROR
    },

    settings: {
        'flowtype': {
            'onlyFilesWithFlowAnnotation': true
        }
    }
};
