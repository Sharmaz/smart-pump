import { UsersService } from "../../src/services/users.service";

jest.mock('../../src/db/index.js', () => ({
  db: {
    data: {
      users: [
        {
          _id: "5410953eb0e0c0ae25608277",
          guid: "eab0324c-75ef-49a1-9c49-be2d68f50b96",
          isActive: true,
          balance: "$3,585.69",
          picture: "http://placehold.it/32x32",
          age: 30,
          eyeColor: "blue",
          name: {
            first: "Henderson",
            last: "Briggs",
          },
          company: "GEEKNET",
          email: "henderson.briggs@geeknet.net",
          password: "23derd*334",
          phone: "+1 (936) 451-3590",
          address: "121 National Drive, Cotopaxi, Michigan, 8240",
        },
        {
          _id: "5410953eee9a5b30c3eea476",
          guid: "b26ea5d1-d8db-4106-91a2-57f42a5c7e9e",
          isActive: false,
          balance: "$3,230.56",
          picture: "http://placehold.it/32x32",
          age: 30,
          eyeColor: "brown",
          name: {
            first: "Boyd",
            last: "Small",
          },
          company: "ENDIPINE",
          email: "boyd.small@endipine.biz",
          password: "_4rhododfj",
          phone: "+1 (814) 437-3837",
          address: "261 Willow Street, Whipholt, Louisiana, 2879",
        },
      ],
    },
  },
}));


describe("UsersService methods", () => {
  const userService = new UsersService();
  test("find", async () => {
    const users = await userService.find();
    expect(users).toEqual([
      {
        _id: "5410953eb0e0c0ae25608277",
        guid: "eab0324c-75ef-49a1-9c49-be2d68f50b96",
        isActive: true,
        balance: "$3,585.69",
        picture: "http://placehold.it/32x32",
        age: 30,
        eyeColor: "blue",
        name: {
          first: "Henderson",
          last: "Briggs",
        },
        company: "GEEKNET",
        email: "henderson.briggs@geeknet.net",
        password: "23derd*334",
        phone: "+1 (936) 451-3590",
        address: "121 National Drive, Cotopaxi, Michigan, 8240",
      },
      {
        _id: "5410953eee9a5b30c3eea476",
        guid: "b26ea5d1-d8db-4106-91a2-57f42a5c7e9e",
        isActive: false,
        balance: "$3,230.56",
        picture: "http://placehold.it/32x32",
        age: 30,
        eyeColor: "brown",
        name: {
          first: "Boyd",
          last: "Small",
        },
        company: "ENDIPINE",
        email: "boyd.small@endipine.biz",
        password: "_4rhododfj",
        phone: "+1 (814) 437-3837",
        address: "261 Willow Street, Whipholt, Louisiana, 2879",
      },
    ]);
  });
});
