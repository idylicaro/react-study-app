import { HttpPostClient } from "@/data/protocols/http/http-post-client";
import { RemoteAuthentication } from "./remote-authentication";

describe("RemoteAuthentication", () => {
  test("Should call HttpPostClient with correct URL", () => {
    class HttpClientSpy implements HttpPostClient {
      url?: string;
      post(url: string): Promise<void> {
        this.url = url;
        return Promise.resolve();
      }
    }
    const url = "any_url";
    const httpPostClientSpy = new HttpClientSpy();
    // sut is System under test
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
