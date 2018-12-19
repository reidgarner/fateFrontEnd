import { TestBed } from "@angular/core/testing";

import { GetAccountUsers } from "./getaccountUsers.service";

describe("GetAccountUsers", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: GetAccountUsers = TestBed.get(GetAccountUsers);
    expect(service).toBeTruthy();
  });
});
