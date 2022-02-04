import { HttpPostClientSpy } from "./../../test/mock-http-client";
import { HttpPostClient } from "./../../protocols/http/http-post-client";
import { RemoteAuthentication } from "./remote-authentication";

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url: string = "any_url"): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  // sut is System under test
  const sut = new RemoteAuthentication(url, httpPostClientSpy);
  return {
    sut,
    httpPostClientSpy,
  };
};

describe("RemoteAuthentication", () => {
  test("Should call HttpPostClient with correct URL", () => {
    const url = "other_value";
    const { sut, httpPostClientSpy } = makeSut(url);
    sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
