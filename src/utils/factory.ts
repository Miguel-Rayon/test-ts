import { faker } from "@faker-js/faker";
import * as Factory from "factory.ts";

interface User {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Music {
  genre: string;
  song: string;
  artics: string;
}

export const userFactory = Factory.makeFactory<User>({
  name: faker.name.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  createdAt: faker.date.past(),
  updatedAt: faker.date.recent(),
});

export const musicFactory = Factory.makeFactory<Music>({
  genre: faker.music.genre(),
  song: faker.music.songName(),
  artics: faker.name.fullName(),
});
