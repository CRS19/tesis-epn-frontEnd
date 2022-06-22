import { rolesEnum } from "../Enums/Roles";

export const USER_TEST_OBJ = {
  fullName: "crs",
  idDevice: "123",
  isDevice: false,
  isPossibleSick: false,
  isSick: false,
  mail: "a@a.com",
  rol: rolesEnum.USER,
};

export const USER_AS_NODES_TEST_OBJ = {
  nodes: [
    {
      mail: "lucho@gmail.com",
      name: "Luis Test",
      id: "1",
      colour: "#ffa100",
    },
    {
      mail: "dolores@gmail.com",
      name: "Maria Dolores",
      id: "2",
      colour: "#ff00b2",
    },
    {
      mail: "torres@gmail.com",
      name: "Marta Torres",
      id: "4",
      colour: "#ff8b00",
    },
    {
      mail: "lopez@gmail.com",
      name: "Viviana Lopez ",
      id: "6",
      colour: "#ff00b1",
    },
  ],
  links: [
    {
      value: 4,
      source: "1",
      target: "2",
    },
    {
      value: 1,
      source: "1",
      target: "4",
    },
    {
      value: 2,
      source: "2",
      target: "6",
    },
  ],
};
