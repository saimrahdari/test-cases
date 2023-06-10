const { By, Key, Builder, until } = require('selenium-webdriver'); require('chromedriver');
const chrome = require('selenium-webdriver/chrome');
 const chromeOptions = new chrome.Options();
chromeOptions.headless();
const TestCase_3 = async () => {
    let driver = await new Builder()
.forBrowser('chrome') .setChromeOptions(chromeOptions) .build();
var username = 'saimrahdari';
 var password = 'abcd123'; try {
await driver.get('https://jobportal.vercel.app'); await driver
.findElement( By.xpath(`/html/body/div/div/div[2]/div[1]/form/div[1]/input`)
        )
        .sendKeys(username, Key.RETURN);
    await driver
        .findElement(
By.xpath(`/html/body/div/div/div[2]/div[1]/form/div[2]/input`) )
        .sendKeys(password, Key.RETURN);
    await driver
.findElement( By.xpath(`/html/body/div/div/div[2]/div[1]/form/div[3]/button`)
)
     .click();
await driver.sleep(5000);
await driver
    .findElement(
        By.xpath(
            `/html/body/div/div[2]/section/div/div[2]/div[2]/button`
)

)
    .click();
await driver
    .findElement(
        By.xpath(
            `/html/body/div/div[2]/section/div/div[2]/div[3]/button`
) )
.click();
let text = await driver
            .findElement(
By.xpath(`/html/body/div/div[2]/section/div/div[1]/h3[2]`) )
.getText();
if (text === '2') {
console.log('Test Case-3 (ADD COIN) passed'); } else {
console.log('Test Case-3 (ADD COIN) failed.'); }
} catch (error) {
console.log('Test Case-3 (ADD COIN) failed.');
    } finally {
        await driver.quit();
} };
module.exports = { TestCase_3 };
