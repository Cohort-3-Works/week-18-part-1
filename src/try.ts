import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function importUser(
  username: string,
  password: string,
  firstname: string,
  lastname: string
) {
  const res = await prisma.users.create({
    data: {
      username,
      password,
      firstname,
      lastname,
    },
  });
  console.log(res);
}

importUser("subh", "nainasweetheart", "subh", "sharma");
