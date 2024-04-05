import { join } from 'path';
import { readFile } from 'fs/promises';
import allureReporter from '@wdio/allure-reporter';

class CommonFunctions {
  async log(action, isSuccess = true, elementName = '') {
    if (isSuccess) {
      console.log(`\x1b[43m[INFO]\x1b[0m '${action}' action passed on '${elementName}'`);
    } else {
      console.error(`\x1b[41m[ERROR]\x1b[0m '${action}' action failed on '${elementName}'`);
    }
  }

  async report(action, isSuccess = true, elementName = '') {
    if (isSuccess) {
      allureReporter.addStep(`'${action}' action passed on '${elementName}'`);
    } else {
      allureReporter.addStep(`'${action}' action failed on '${elementName}'`);
    }
  }

  async performAction(action, elementName, actionName) {
    try {
      const result = await action();
      this.log(actionName, true, elementName);
      this.report(actionName, true, elementName);
      return result;
    } catch (error) {
      this.log(actionName, false, elementName);
      this.report(actionName, false, elementName);
      allureReporter.addAttachment(
        'Screenshot',
        Buffer.from(await browser.takeScreenshot(), 'base64'),
        'image/png'
      );
      throw error;
    }
  }

  async tapElement(elementName) {
    return this.performAction(async () => (await $(elementName)).click(), elementName, 'Click');
  }

  async getAttributeValue(elementName, attributeName) {
    return this.performAction(
      async () => {
        const returnValue = (await $(elementName)).getAttribute(attributeName);
        return returnValue;
      },
      elementName,
      'getAttributeValue'
    );
  }

  async verifyVariableValue(actual, expected) {
    return this.performAction(
      async () => {
        expect(actual).toEqual(expected);
        return true;
      },
      actual,
      'verifyVariableValue'
    );
  }

  async verifyElementPresent(elementName) {
    return this.performAction(
      async () => {
        (await $(elementName)).waitForDisplayed;
        return true;
      },
      elementName,
      'verifyElementPresent'
    );
  }

  async setValue(elementName, value) {
    return this.performAction(
      async () => {
        (await $(elementName)).setValue(value);
      },
      elementName,
      'setValue'
    );
  }

  async addValue(elementName, value) {
    return this.performAction(
      async () => {
        (await $(elementName)).addValue(value);
      },
      elementName,
      'addValue'
    );
  }

  async clearInputField(elementName) {
    return this.performAction(
      async () => {
        await $(elementName).clearValue();
      },
      elementName,
      'clearInputField'
    );
  }

  async verifyElementText(elementName, expectedText) {
    return this.performAction(
      async () => {
        const actualText = await $(elementName).getText();
        expect(actualText).toEqual(expectedText);
      },
      elementName,
      'verifyElementText'
    );
  }

  async verifyElementContainsText(elementName, expectedText) {
    return this.performAction(
      async () => {
        const actualText = await $(elementName).getText();
        expect(actualText).toContain(expectedText);
        return true;
      },
      elementName,
      'verifyElementContainsText'
    );
  }

  async fetchJSON(filename) {
    try {
      const data = await readFile(
        join(process.cwd(), `test_data/${process.env.TEST_ENV.toLowerCase()}/${filename}.json`),
        'utf8'
      );
      const jsonData = JSON.parse(data);
      return jsonData;
    } catch (error) {
      console.error('Error reading JSON file:', error);
      throw error;
    }
  }
}
export default new CommonFunctions();
