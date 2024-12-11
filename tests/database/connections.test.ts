import { Users } from "../../src/models/user";
import { getUserByIdFromDb, getAllUsersFromDb, createUserToDb } from "../../src/database/connections/users";
import { userDBMock, usersDBMock } from "./data";

describe("testing for creating user", () => {
  it("should create a user", async () => {
    Users.create = jest.fn().mockReturnValue(userDBMock);
    const res = await createUserToDb({
      email: "ak@test.com",
      id: "dafd",
      name: "adfa"
    });
    expect(res).toEqual(expect.any(Object));
    expect(res?.id).toBe(userDBMock.id);
    expect(res?.id).toBe(userDBMock.id);
  });
});

describe("testing for getting user by id", () => {
  it("should get a user by id if the id of the user exist", async () => {
    Users.findByPk = jest.fn().mockReturnValue(userDBMock);
    const res = await getUserByIdFromDb("0168d265-6d0d-4d60-9f9c-db4b4ba5da68");
    expect(res).toEqual(expect.any(Object));
    expect(res?.id).toBe(userDBMock.id);
    expect(res?.id).toBe(userDBMock.id);
  });
});

describe("testing for getting all users ", () => {
  it("should get all users without any filters", async () => {
    Users.findAndCountAll = jest.fn().mockReturnValue(usersDBMock);
    const res = await getAllUsersFromDb({});
    expect(res).toEqual(expect.any(Object));
    expect(res.count).toBe(2);
    expect(res).toBe(usersDBMock);
    expect(res.rows.length).toBe(2);
  });
});
