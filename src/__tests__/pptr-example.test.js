import puppeteer from 'puppeteer'

describe('To Welcome page', () => {
  let browser
  let page

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true })
    page = await browser.newPage()
    await page.goto('http://localhost:3000', { waitUntil: 'load' })
  })

  afterAll(async () => {
    await browser.close()
  })

  it('should display "google" text on page', async () => {
    await page.screenshot({ path: 'index.png' })
    await page.waitForSelector('#welcomeButton')
    await page.click('#welcomeButton')
    await page.screenshot({ path: 'welcome.png' })
    // const bodyHTML = await page.evaluate(() => document.body.innerHTML)
    // await expect('a').toBe('a')
    // await expect(page).toMatch('Welcome')
  })
})
