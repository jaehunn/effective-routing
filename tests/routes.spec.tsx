import { test } from '@playwright/test';

test.describe('routes', () => {
  test('/ 로 접근하면, AppPage 가 렌더링된다.', async ({ page }) => {
    await page.goto('/');

    await page.waitForTimeout(500);

    await page.waitForURL('/');
  });

  test('/new/sign-up 로 접근하면, SignUpPage 가 렌더링된다.', async ({ page }) => {
    await page.goto('/new/sign-up');

    await page.waitForTimeout(500);

    await page.waitForURL('/new/sign-up');
  });

  test('/new/:step 에 정의되지 않은 step 으로 접근하면, SignUpPage 가 렌더링된다.', async ({
    page,
  }) => {
    await page.goto('/new/aaa');

    await page.waitForTimeout(500);

    await page.waitForURL('/new/sign-up');
  });

  test('정의되지않은 Path 로 접근하면, AppPage 가 렌더링된다.', async ({ page }) => {
    await page.goto('/aaa');

    await page.waitForTimeout(500);

    await page.waitForURL('/');
  });
});
