import { test } from '@playwright/test';

test.describe('routes', () => {
  test('/ 로 접근하면, HomePage 가 렌더링된다.', async ({ page }) => {
    await page.goto('/');

    await page.waitForTimeout(500);

    await page.waitForURL('/');
  });

  test('정의되지않은 Path 로 접근하면, HomePage 가 렌더링된다.', async ({ page }) => {
    await page.goto('/aaa');

    await page.waitForTimeout(500);

    await page.waitForURL('/');
  });
});
