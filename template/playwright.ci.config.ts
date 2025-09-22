// @ts-check
import { defineConfig, devices } from '@playwright/test';
import baseConfig from './playwright.base.config';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig(baseConfig, {
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                // GitHub Actions have chrome pre-installed, so we use that channel
                channel: 'chrome',
            },
        },
    ],
});
