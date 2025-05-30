import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'node',
        globals: true,
        include: ['tests/**/*.spec.ts'],
        coverage: {
            reporter: ['text', 'html'],
        },
        reporters: [
            'default',
            ['junit', { outputFile: 'test-results.xml' }]
        ]
    },
});