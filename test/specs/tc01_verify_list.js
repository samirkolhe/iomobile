// import AlertView from "../screenobjects/components/menu.list.js";
// import activityIndicators from "../data/menu-items.json" assert { type: "json" };

// describe("Verify list of Options in homepage", () => {
//   let listOfOptions;
//   beforeAll(async () => {
//     listOfOptions = await AlertView.alertViews;
//   });

//   it("verify Alert View", async () => {
//     const activityIndicatorName = activityIndicators.Item1;
//     expect(await listOfOptions.getAttribute("name")).toEqual(
//       activityIndicatorName
//     );
//   });

//   it("Click on Alert View", async () => {
//     await listOfOptions.click();
//   });
// });

// describe("Verify list of Options in homepage", () => {
//   it("verify Alert View", async () => {
//     //Store element in const
//     const listOfOptions = await AlertView.Option1;
//     const activityIndicatorName = activityIndicators.Item1;
//     //perform assertion using expect and toEqual
//     expect(await listOfOptions.getAttribute("name")).toEqual(
//       activityIndicatorName
//     );
//   });
//   it("Click on Alert View", async () => {
//     const listOfOptions = await AlertView.Option1;
//     await listOfOptions.click();
//   });
// });
