import { test } from '@playwright/test'
test('test browser', async ({ page }) => {
    await page.goto('https://localhost:8008')

    await page.pause()
})