
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const email = 'admin@diznary.com';
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (user) {
        console.log(`User ${email} exists:`, user);
    } else {
        console.log(`User ${email} does NOT exist.`);
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
