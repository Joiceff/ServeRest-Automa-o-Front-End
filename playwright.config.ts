
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    headless: false,
    baseURL: 'https://front.serverest.dev',
    trace: 'on-first-retry'
  }
});
