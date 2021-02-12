import { PrismaClient, Role } from '@prisma/client';
import * as roles from '../config/roles.json';

const prisma = new PrismaClient();

/**
 * Delete all from `roles`
 * and recreate from src/prisma/config/roles.json with olds id
 */
export default async function recreateRoles(): Promise<void> {
  const oldRoles = await prisma.role.findMany();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rolesA: any = roles;
  // Listing of config.json
  let lastRole = 0;
  for (const p in rolesA) {
    // Exclude default property
    if (p !== 'default') {
      const role: Role = rolesA[p];
      // Get id from config
      const id = parseInt(p, 10);
      lastRole = id;
      // If role not exists then create
      if (!oldRoles[id - 1]) {
        await prisma.role.create({
          data: {
            id,
            name: role.name,
          },
        });
      } else {
        // Else update name
        await prisma.role.update({
          where: {
            id,
          },
          data: {
            name: role.name,
          },
        });
      }
    }
  }
  // Delete other which not set in config.json
  await prisma.role.deleteMany({
    where: {
      id: {
        gt: lastRole,
      },
    },
  });
}
