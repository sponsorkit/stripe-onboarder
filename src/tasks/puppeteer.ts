import type { Page } from "puppeteer";

export async function waitForNavigation(page: Page) {
  await page.waitForNetworkIdle({ idleTime: 3000 });
}

export async function getCurrentUrl(page: Page) {
   return await page.evaluate(() => document.location.href);
}