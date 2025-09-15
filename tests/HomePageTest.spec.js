const { test, expect } = require('@playwright/test');

test('Home Page', async ({ page }) => {
  await page.goto('https://sevultracgeideaqa.secureyes.net:8081/VulTrac/login');

  const pageTitle = await page.title();
  console.log('Page title is :', pageTitle);
  await expect(page).toHaveTitle('VULTRAC');

  const pageURL = await page.url();
  console.log('Page URL is :', pageURL);
  await expect(page).toHaveURL('https://sevultracgeideaqa.secureyes.net:8081/VulTrac/login');

  // Login form
  await page.fill('#tempUserId', '11223344', { force: true });
  await page.fill('#tempPassId', 'Admin123@', { force: true });
  await page.click('#loginId', { force: true });

  console.log('Login successful.  ');

  //const superAdmin = page.locator("tr#row_8 td", { hasText: "Super Admin" });
  //await superAdmin.waitFor({ state: 'visible' });
  //await superAdmin.click();
  //console.log('Clicked on Super Admin role');

  const loader = page.locator("tr#row_0 td", { hasText: "Loader" });
  await loader.waitFor({ state: 'visible' });
  await loader.click();
  console.log('Clicked on Loader role');

  
  //Clicked on Upload menu

   await page.waitForSelector('#leftMenu3');
  await page.click('#leftMenu3');
  
await page.pause();
  await page.click('#logoutLink');
  console.log('Clicked on logout button');
  await page.click('#logoutConfirm');
  console.log('Clicked on Confirm option');
  
});
