// This is the hash for the password "123456"
const mockHash = "$2b$10$KrrVZ1b1/lEizA1VHNhnIuzsmkSkjp.t/tOJnlJpXFz04SthYcpbi"

const user1 = {
  email: "benoit.mrejen@gmail.com",
  password: mockHash
}
const user2 = {
  email: "michel@gmail.com",
  password: mockHash
}
const user3 = {
  email: "jeanmarc@gmail.com",
  password: mockHash
}
const users = [user1, user2, user3]

const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

module.exports = { users, prisma }
