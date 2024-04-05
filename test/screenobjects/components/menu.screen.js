class MenuScreen {
  get alertView() {
    return $("//XCUIElementTypeStaticText[@name='Alert Views']");
  }
  get SimpleMenu() {
    return $('~Simple');
  }
  get Ok() {
    return $("//XCUIElementTypeButton[@name='OK']");
  }
  get Option1() {
    return $('//XCUIElementTypeStaticText[@label="Activity Indicators"]');
  }
}

export default new MenuScreen();
// module.exports = new MenuScreen();
