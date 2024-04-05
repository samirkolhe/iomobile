import commonFunctions from '../../utils/CommonFunctions.js';
import TextFields from '../../locators/ios/textField.json' assert { type: 'json' };

class TextField {
  async selectTextField() {
    await commonFunctions.tapElement(TextFields.textField);
  }

  async addTextInDefaultBox() {
    await commonFunctions.tapElement(TextFields.defaultTextBox);
    await commonFunctions.setValue(TextFields.defaultTextBox, 'iOS ');
    await commonFunctions.addValue(TextFields.defaultTextBox, 'App ');
  }
}
export default new TextField();
