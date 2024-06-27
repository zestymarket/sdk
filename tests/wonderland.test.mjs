import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:8080/tests/wonderland/deploy');
  await page.waitForFunction(() => window.testBanners != undefined);
});

test.describe('Initial load', () => {
  test('The correct test page is currently loaded', async ({ page }) => {
    await expect(page).toHaveTitle('wonderland-test');
  });

  test('All 3 banners are currently loaded', async ({ page }) => {
    const bannerCount = await page.evaluate(() => window.testBanners.length);
    expect(bannerCount).toBe(3);
  });
});

test.describe('Default banners', () => {
  test('The medium-rectangle banner is present', async ({ page }) => {
    await page.waitForFunction(() => window.testBanners[0].banner != null);
    const banner1 = await page.evaluate(() => window.testBanners[0].banner.imageSrc);
    expect(banner1.split('/').pop()).toBe('zesty-default-medium-rectangle.png');
  });

  test('The billboard banner is present', async ({ page }) => {
    await page.waitForFunction(() => window.testBanners[1].banner != null);
    const banner2 = await page.evaluate(() => window.testBanners[1].banner.imageSrc);
    expect(banner2.split('/').pop()).toBe('zesty-default-billboard.png');
  });

  test('The mobile-phone-interstitial banner is present', async ({ page }) => {
    await page.waitForFunction(() => window.testBanners[2].banner != null);
    const banner3 = await page.evaluate(() => window.testBanners[2].banner.imageSrc);
    expect(banner3.split('/').pop()).toBe('zesty-default-mobile-phone-interstitial.png');
  });
});

test.describe('Navigation', () => {
  test('Clicking the banner navigates to a new page', async ({ page, context }) => {
    await page.waitForFunction(() => window.testBanners[0].banner != null);
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.evaluate(() => window.testBanners[0].executeClick())
    ])
    await newPage.waitForLoadState();
    const title = await newPage.title();
    expect(title).not.toBe('Wonderland Test');
  });
});
