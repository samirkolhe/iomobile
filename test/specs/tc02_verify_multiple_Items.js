import alertView from '../screenobjects/components/alertView.screen.js';
import textField from '../screenobjects/components/textfield.screen.js';

describe('Verify Alert View Options', () => {
  it('Click on Alert View', async () => {
    await alertView.clickOnAlertViews();
  });

  it('Verify Simple options CTA', async () => {
    await alertView.clickOn('Simple');
    await alertView.verifySimpleBlockCTA();
    await alertView.clickOnOk();
    await driver.back();
  });

  it('Verify TextField and set value', async () => {
    await textField.selectTextField();
    await textField.addTextInDefaultBox();
    await driver.pause(1000);
  });
});
