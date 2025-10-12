import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');


  await page.getByRole('button', { name: 'Continue shopping' }).click();


  await page.getByRole('searchbox', { name: 'Search Amazon.ca' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.ca' }).fill('xbox');
  await page.getByRole('searchbox', { name: 'Search Amazon.ca' }).press('Enter');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.locator('.s-widget-container.s-spacing-small.s-widget-container-height-small.celwidget.slot\\=MAIN.template\\=SEARCH_RESULTS.widgetId\\=search-results_3 > span > .puis-card-container > .a-section.a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal').click();
  await page.getByText('Quantity:1').click();
  await page.getByLabel('2', { exact: true }).getByText('2', { exact: true }).click();
  await page.getByRole('button', { name: 'Add to Cart', exact: true }).click();
  await page.getByRole('button', { name: 'No Thanks' }).click();
  await page.getByRole('link', { name: 'items in cart' }).click();
  await expect(page.locator('#nav-cart-count')).toContainText('2');
  await page.getByRole('link', { name: 'items in cart' }).click();
  await expect(page.getByLabel('Shopping Cart', { exact: true }).getByText('2', { exact: true })).toBeVisible();



  await page.getByRole('button', { name: 'Proceed to Checkout Check out' }).click();
  await page.getByRole('button', { name: 'Delete Xbox Series S - All' }).click();
  await expect(page.locator('#sc-active-items-header')).toContainText('Shopping Cart');
});