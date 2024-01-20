const { PrismaClient } = require('@prisma/client')

const db = new PrismaClient()

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Computer Science"},
        { name: "Mathematics"},
        { name: "Physics"},
        { name: "Biology"},
        { name: "Chemistry"},
        { name: "Economics"},
        { name: "Business"},
        { name: "History"},
        { name: "Literature"},
        { name: "Philosophy"},
        { name: "Psychology"},
        { name: "Engineering"},
        { name: "Law"},
        { name: "Art"},
        { name: "Music"},
        { name: "Sports"},
        { name: "Other"} 
      ]
    })
    console.log("Seeded categories")
  } catch (error) {
    console.error(error)
  } finally {
    await db.$disconnect()
  }
}

main()