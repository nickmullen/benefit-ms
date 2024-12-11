import { userIdSchemaValidation, userSchemaValidation } from "../../src/utils/validations";

describe("testing the validation middlewares", () => {
  it("should validate user id", () => {
    const res = userIdSchemaValidation.validate("0168d265-6d0d-4d60-9f9c-db4b4ba5da68");
    expect(res.value).toBe("0168d265-6d0d-4d60-9f9c-db4b4ba5da68");
    expect(res.error).toBe(undefined);
  });
  it("should throw an error for an invalid user id", () => {
    const res = userIdSchemaValidation.validate(43);
    expect(res.error?.details[0].message).toBe('"value" must be a string');
  });
});

describe("validate field for creating user", () => {
  it("should validate user create field", () => {
    const res = userSchemaValidation.validate({
      email: "akin@test.com",
      name: "akin"
    });
    expect(res.value).toEqual(expect.any(Object));
    expect(res.error).toBe(undefined);
  });

  it("should throw an error for invalid user create field", () => {
    const res = userSchemaValidation.validate({});
    expect(res.error?.message).toEqual(expect.any(String));
  });
});
