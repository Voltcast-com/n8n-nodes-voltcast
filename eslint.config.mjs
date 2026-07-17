// n8n community-node lint — mirrors the Creator Portal scanner
// (@n8n/scan-community-package). The legacy n8n-nodes-base plugin supplies
// the param-style rules the portal still runs, but three of its rules
// contradict the portal's newer @n8n/community-nodes rules and are disabled:
// - inputs/outputs literals: the portal REQUIRES NodeConnectionTypes.Main
//   (node-connection-type-literal), the legacy rule demands the 'main'
//   string back.
// - documentationUrl: full URLs are standard in verified nodes today.
import communityNodes from '@n8n/eslint-plugin-community-nodes';
import n8nNodesBase from 'eslint-plugin-n8n-nodes-base';
import tseslint from 'typescript-eslint';

export default [
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
        },
    },
    communityNodes.configs.recommended,
    {
        files: ['nodes/**/*.ts'],
        plugins: { 'n8n-nodes-base': n8nNodesBase },
        rules: {
            ...n8nNodesBase.configs.nodes.rules,
            'n8n-nodes-base/node-class-description-inputs-wrong-regular-node': 'off',
            'n8n-nodes-base/node-class-description-outputs-wrong': 'off',
        },
    },
    {
        files: ['credentials/**/*.ts'],
        plugins: { 'n8n-nodes-base': n8nNodesBase },
        rules: {
            ...n8nNodesBase.configs.credentials.rules,
            'n8n-nodes-base/cred-class-field-documentation-url-miscased': 'off',
        },
    },
];
