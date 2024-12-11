import supertest from "supertest";
import createServer from "../../src/utils/server";
import { Users } from "../../src/models/user";

const app = createServer();

const usersDBMock = {
  count: 2,
  rows: [
    {
      id: "0168d265-6d0d-4d60-9f9c-db4b4ba5da68",
      name: "Delores Ortiz",
      email: "delores.ortiz@example.com"
    },
    {
      id: "32212ef0-94bf-4508-97c0-1397777508f4",
      name: "Angel Lane",
      email: "angel.lane@example.com"
    }
  ]
};

const userDBMock = {
  id: "0168d265-6d0d-4d60-9f9c-db4b4ba5da68",
  name: "Delores Ortiz",
  email: "delores.ortiz@example.com"
};

const AUTHORIZATION_HEADER = "x-reliance-authorization";
const AUTHORIZATION_VALUE = "secret1";

describe("users", () => {
  describe("getUsers route", () => {
    describe("given the users does not exist", () => {
      it("should return a 500", async () => {
        Users.findAndCountAll = jest.fn().mockRejectedValue("some random value");
        const { body, statusCode } = await supertest(app)
          .get("/v1/users")
          .set(AUTHORIZATION_HEADER, AUTHORIZATION_VALUE);

        expect(Users.findAndCountAll).toBeCalledWith({});
        expect(statusCode).toBe(500);
        expect(body.status).toBe("error");
      });
    });

    describe("given the users do exist", () => {
      it("should return the list of users", async () => {
        Users.findAndCountAll = jest.fn().mockReturnValue(usersDBMock);
        const { body, statusCode } = await supertest(app)
          .get("/v1/users")
          .set(AUTHORIZATION_HEADER, AUTHORIZATION_VALUE);

        expect(Users.findAndCountAll).toBeCalledWith({});
        expect(statusCode).toBe(200);
        expect(body.count).toBe(2);
        expect(body.rows.length).toBe(2);
      });

      it("should return the list of users when there is a limit param", async () => {
        Users.findAndCountAll = jest.fn().mockReturnValue(usersDBMock);
        const { body, statusCode } = await supertest(app)
          .get("/v1/users?limit=10")
          .set(AUTHORIZATION_HEADER, AUTHORIZATION_VALUE);

        expect(Users.findAndCountAll).toBeCalledWith({
          limit: 10
        });
        expect(statusCode).toBe(200);
        expect(body.count).toBe(2);
        expect(body.rows.length).toBe(2);
      });

      it("should return the list of users when there is a offset param", async () => {
        Users.findAndCountAll = jest.fn().mockReturnValue(usersDBMock);
        const { body, statusCode } = await supertest(app)
          .get("/v1/users?offset=5")
          .set(AUTHORIZATION_HEADER, AUTHORIZATION_VALUE);

        expect(Users.findAndCountAll).toBeCalledWith({
          offset: 5
        });
        expect(statusCode).toBe(200);
        expect(body.count).toBe(2);
        expect(body.rows.length).toBe(2);
      });

      it("should return the list of users when there is a limit and offset param", async () => {
        Users.findAndCountAll = jest.fn().mockReturnValue(usersDBMock);
        const { body, statusCode } = await supertest(app)
          .get("/v1/users?limit=10&offset=5")
          .set(AUTHORIZATION_HEADER, AUTHORIZATION_VALUE);

        expect(Users.findAndCountAll).toBeCalledWith({
          offset: 5,
          limit: 10
        });
        expect(statusCode).toBe(200);
        expect(body.count).toBe(2);
        expect(body.rows.length).toBe(2);
      });

      it("should return the list of users when there is a random param", async () => {
        Users.findAndCountAll = jest.fn().mockReturnValue(usersDBMock);
        const { body, statusCode } = await supertest(app)
          .get("/v1/users?myparam=10")
          .set(AUTHORIZATION_HEADER, AUTHORIZATION_VALUE);

        expect(Users.findAndCountAll).toBeCalledWith({});
        expect(statusCode).toBe(200);
        expect(body.count).toBe(2);
        expect(body.rows.length).toBe(2);
      });
    });
  });

  describe("getUser route", () => {
    describe("given the user is not responding", () => {
      it("should return 500", async () => {
        Users.findByPk = jest.fn().mockRejectedValue("some random value");
        const { body, statusCode } = await supertest(app)
          .get("/v1/users/1234")
          .set(AUTHORIZATION_HEADER, AUTHORIZATION_VALUE);

        expect(Users.findByPk).toBeCalledWith("1234");
        expect(statusCode).toBe(500);
      });
    });

    describe("given the user does not exist", () => {
      it("should return 404", async () => {
        Users.findByPk = jest.fn().mockReturnValue(null);
        const { body, statusCode } = await supertest(app)
          .get("/v1/users/1234")
          .set(AUTHORIZATION_HEADER, AUTHORIZATION_VALUE);

        expect(Users.findByPk).toBeCalledWith("1234");
        expect(statusCode).toBe(404);
        expect(body.message).toBe("User not found");
      });
    });

    describe("given the user do exist", () => {
      it("should return the user", async () => {
        Users.findByPk = jest.fn().mockReturnValue(userDBMock);
        const { body, statusCode } = await supertest(app)
          .get("/v1/users/1234")
          .set(AUTHORIZATION_HEADER, AUTHORIZATION_VALUE);

        expect(Users.findByPk).toBeCalledWith("1234");
        expect(statusCode).toBe(200);
        expect(body.user.id).toBe(userDBMock.id);
      });
    });
  });

  describe("createUser route", () => {
    describe("given the user can not be created", () => {
      it("should return 500 when there is no error returned", async () => {
        Users.create = jest.fn().mockRejectedValue(null);
        const { body, statusCode } = await supertest(app)
          .post("/v1/users")
          .set(AUTHORIZATION_HEADER, AUTHORIZATION_VALUE)
          .send({
            name: "afdaf",
            email: "ak@test.com"
          });
        expect(Users.create).toBeCalledWith({
          name: "afdaf",
          email: "ak@test.com",
          id: expect.any(String)
        });
        expect(statusCode).toBe(500);
      });

      it("should return 500 when error is returned", async () => {
        Users.create = jest.fn().mockRejectedValue(new Error("new error"));
        const { body, statusCode } = await supertest(app)
          .post("/v1/users")
          .set(AUTHORIZATION_HEADER, AUTHORIZATION_VALUE)
          .send({
            name: "aa",
            email: "ak@test.com"
          });

        expect(Users.create).toBeCalledWith({
          email: "ak@test.com",
          id: expect.any(String),
          name: "aa"
        });
        expect(statusCode).toBe(500);
      });
    });

    describe("given the user can be created", () => {
      it("should return 201 and the user", async () => {
        Users.create = jest.fn().mockReturnValue(userDBMock);
        const { body, statusCode } = await supertest(app)
          .post("/v1/users")
          .set(AUTHORIZATION_HEADER, AUTHORIZATION_VALUE)
          .send({
            name: "aa",
            email: "ak@test.com"
          });

        expect(Users.create).toBeCalledWith({
          email: "ak@test.com",
          id: expect.any(String),
          name: "aa"
        });
        expect(statusCode).toBe(201);
        expect(body.user.id).toBe(userDBMock.id);
      });
    });

    describe("given the user payload is not valid", () => {
      beforeAll(() => {
        Users.create = jest.fn().mockReturnValue(userDBMock);
      });

      it("should return 400 and the error for invalid name and valid email", async () => {
        const { body, statusCode } = await supertest(app)
          .post("/v1/users")
          .set(AUTHORIZATION_HEADER, AUTHORIZATION_VALUE)
          .send({
            name: "",
            email: "aaa"
          });

        expect(Users.create).toBeCalledTimes(0);
        expect(statusCode).toBe(400);
        expect(body.message).toEqual('"name" is not allowed to be empty. "email" must be a valid email');
      });

      it("should return 400 and the error for invalid email and valid name", async () => {
        const { body, statusCode } = await supertest(app)
          .post("/v1/users")
          .set(AUTHORIZATION_HEADER, AUTHORIZATION_VALUE)
          .send({
            name: "aa",
            email: ""
          });

        expect(Users.create).toBeCalledTimes(0);
        expect(statusCode).toBe(400);
        expect(body.message).toEqual('"email" is not allowed to be empty');
      });

      it("should return 400 and the error for both invalid name and invalid email", async () => {
        const { body, statusCode } = await supertest(app)
          .post("/v1/users")
          .set(AUTHORIZATION_HEADER, AUTHORIZATION_VALUE)
          .send({});

        expect(Users.create).toBeCalledTimes(0);
        expect(statusCode).toBe(400);
        expect(body.message).toBe('"name" is required. "email" is required');
      });
    });
  });

  describe("update user route", () => {
    it("should return 404 when the user doesn't exist", async () => {
      Users.findByPk = jest.fn().mockReturnValue(null);
      const { body, statusCode } = await supertest(app)
        .patch("/v1/users/afae")
        .set(AUTHORIZATION_HEADER, AUTHORIZATION_VALUE)
        .send({
          name: "afdaf",
          email: "ak@test.com"
        });
      expect(statusCode).toBe(404);
      expect(body.message).toBe("User id doesn't exist");
    });

    it("should return 400 for invalid payload", async () => {
      Users.findByPk = jest.fn().mockReturnValue(userDBMock);
      Users.update = jest.fn().mockReturnValue([0]);
      const { body, statusCode } = await supertest(app)
        .patch("/v1/users/afae")
        .set(AUTHORIZATION_HEADER, AUTHORIZATION_VALUE)
        .send({});
      expect(statusCode).toBe(400);
      expect(body.message).toBe('"name" is required. "email" is required');
    });
    it("should return 400 for invalid payload", async () => {
      Users.findByPk = jest.fn().mockReturnValue(userDBMock);
      Users.update = jest.fn().mockReturnValue([0]);
      const { body, statusCode } = await supertest(app)
        .patch("/v1/users/afae")
        .set(AUTHORIZATION_HEADER, AUTHORIZATION_VALUE)
        .send({ name: "updated name", email: "" });
      expect(statusCode).toBe(400);
      expect(body.message).toBe('"email" is not allowed to be empty');
    });

    it("should return 200 and the updated user", async () => {
      Users.findByPk = jest.fn().mockReturnValue({
        id: userDBMock.id,
        name: "aa",
        email: "ak@test.com"
      });
      Users.update = jest.fn().mockReturnValue([1]);
      const { body, statusCode } = await supertest(app)
        .patch(`/v1/users/${userDBMock.id}`)
        .set(AUTHORIZATION_HEADER, AUTHORIZATION_VALUE)
        .send({
          name: "aa",
          email: "ak@test.com"
        });
      expect(statusCode).toBe(200);
      expect(body.user.name).toBe("aa");
      expect(body.user.email).toBe("ak@test.com");
    });
  });
  describe("delete user route", () => {
    it("should return 404 when the user doesn't exist", async () => {
      Users.findByPk = jest.fn().mockReturnValue(null);
      const { body, statusCode } = await supertest(app)
        .delete("/v1/users/afae")
        .set(AUTHORIZATION_HEADER, AUTHORIZATION_VALUE)
        .send({
          name: "afdaf",
          email: "ak@test.com"
        });
      expect(statusCode).toBe(404);
      expect(body.message).toBe("User id doesn't exist");
    });

    it("should return 204 and delete the user", async () => {
      Users.findByPk = jest.fn().mockReturnValue({
        id: userDBMock.id,
        name: "aa",
        email: "ak@test.com"
      });
      Users.destroy = jest.fn().mockReturnValue([1]);
      const { statusCode } = await supertest(app)
        .delete(`/v1/users/${userDBMock.id}`)
        .set(AUTHORIZATION_HEADER, AUTHORIZATION_VALUE);
      expect(statusCode).toBe(204);
    });
  });
});

