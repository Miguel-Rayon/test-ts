import { userFactory, musicFactory } from "../factory";

describe("User", () => {
  it("should create a new user", () => {
    const user = userFactory.build({});

    console.log({ user });

    expect(user).toBeDefined();
    expect(user.name).toBeDefined();
    expect(user.email).toBeDefined();
    expect(user.password).toBeDefined();
    expect(user.createdAt).toBeDefined();
    expect(user.updatedAt).toBeDefined();
  });

  it("should create a new music", () => {
    const music = musicFactory.build({});

    console.log({ music });

    expect(music).toBeDefined();
    expect(music.artics).toBeDefined();
    expect(music.song).toBeDefined();
    expect(music.genre).toBeDefined();
  });
});
