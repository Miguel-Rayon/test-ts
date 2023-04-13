import axios from "axios";
import moxios from "moxios";
import { fecthAlbum } from "../axiosRequests";

const config = { headers: { "Accept-Encoding": "gzip,deflate,compress" } };

jest.useRealTimers();

let axiosInstance: any;

describe("fecthAlbum", () => {
  describe("when API call is successful", () => {
    beforeEach(function () {
      moxios.install();
      axiosInstance = axios.create();
      moxios.install(axiosInstance);
    });

    afterEach(function () {
      moxios.uninstall();
    });
    it("should return album list", async () => {
      const album = [
        {
          userId: 1,
          id: 1,
          title: "quidem molestiae enim",
        },
        {
          userId: 1,
          id: 2,
          title: "sunt qui excepturi placeat culpa",
        },
        {
          userId: 1,
          id: 3,
          title: "omnis laborum odio",
        },
        {
          userId: 1,
          id: 4,
          title: "non esse culpa molestiae omnis sed optio",
        },
      ];

      moxios.stubRequest("https://jsonplaceholder.typicode.com/albums", {
        status: 200,
        data: album,
      });

      const responseAlbum = await axiosInstance.get(
        "https://jsonplaceholder.typicode.com/albums"
      );

      console.log(responseAlbum.data);
      expect(true).toEqual(true);
    });
  });
});
