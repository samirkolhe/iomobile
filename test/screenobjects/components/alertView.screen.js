import commonFunctions from '../../utils/CommonFunctions.js';
import AlertViews from '../../locators/ios/alertView.json' assert { type: 'json' };

class AlertView {
  async clickOnAlertViews() {
    await commonFunctions.verifyElementPresent(AlertViews.alertViews);
    await commonFunctions.tapElement(AlertViews.alertViews);
  }

  async clickOn(option) {
    switch (option) {
      case 'Simple':
        await commonFunctions.tapElement(AlertViews.simpleMenu.simple);
        break;
      case 'Okay/Cancel':
        await commonFunctions.tapElement(AlertViews.simpleMenu.okCancelButton);
        break;
      case 'Other':
        await commonFunctions.tapElement(AlertViews.simpleMenu.otherButton);
        break;
      default:
        break;
    }
  }

  async verifySimpleBlockCTA() {
    const simpleCTA = await commonFunctions.getAttributeValue(AlertViews.simpleAlertText, 'name');
    const menuItemTestData = await commonFunctions.fetchJSON('menu-items');
    const getSimpleAlert = menuItemTestData.VerifyAlertSimpleText;

    await commonFunctions.verifyVariableValue(simpleCTA, getSimpleAlert);
  }
  async clickOnOk() {
    await commonFunctions.tapElement(AlertViews.simpleMenu.ok);
  }
}

export default new AlertView();
// module.exports = new MenuScreen();
