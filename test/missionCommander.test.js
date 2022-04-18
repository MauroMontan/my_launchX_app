import MissionCommander from "../app/missionCommander.js";

describe("launchX app testing demo", () => {
  test("test 1", () => {
    const result = 5 + 5;
    expect(result).toBe(10);
  });
});

describe("Unit test for MissionCommander class", () => {
  test("instance of MissionCommander class", () => {
    const testCommander = new MissionCommander("Im not real");

    expect(testCommander.name).toBe("Im not real");
  });
});
