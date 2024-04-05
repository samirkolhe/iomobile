import { expect } from '@wdio/globals';
import MenuScreen from '../screenobjects/components/menu.screen.js';
// const MenuScreen = require('../screenobjects/components/menu.screen.js');

// describe('IOS TESTING', () => {
//   it('launch and perform', async () => {
//     await MenuScreen.alertView.click();
//     await MenuScreen.SimpleMenu.click();
//     await expect(await driver.getAlertText()).toContain(
//       'A Short Title Is Best'
//     );
//   });
//   it('end and close', async () => {
//     await MenuScreen.Ok.click();
//   });
// });

// describe('Search and Clear', () => {
//   it('launch app and click on search', async () => {
//     await $('~Search').click();
//   });

//   it('Click on Default', async () => {
//     await $('~Default').click();
//   });
//   it('Add value and clear', async () => {
//     await $('//XCUIElementTypeSearchField').setValue('Data');
//     await $('//XCUIElementTypeSearchField').addValue(' Engineer');
//   });
//   it('Verify if values are cleared', async () => {
//     await $('~Clear text').click();
//     const search = await $('//XCUIElementTypeSearchField');
//     await expect(await search.getText()).toEqual('');
//     // await expect(await search.getText()).not.toHaveValue("Data");
//     driver.pause('3000');
//   });
// });

// describe('Scrolling', () => {
//   it('Vertical Scroll', async () => {
//     await driver.execute('mobile:scroll', { direction: 'up' });
//     await driver.execute('mobile:scroll', { direction: 'down' });
//   });

//   it('ScrollSetValue', async () => {
//     (await $('~Picker View')).click();
//     const red = await $('~Red color component value');
//     const green = await $('~Green color component value');
//     const blue = await $('~Blue color component value');
//     await red.addValue('125');
//     await green.addValue('0');
//     await blue.addValue('125');
//     await driver.pause(3000);
//   });
// });
