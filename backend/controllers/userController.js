import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await prisma.user.create({
      data: { name, email, password },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "User creation failed", detail: error });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { user_id: id },
      include: {
        services: true,
        serviceRequests: true,
      },
    });

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user', detail: error });
  }
};

export const getPreviousRequests = async (req, res) => {
  try {
    const requests = await prisma.serviceRequest.findMany({
      orderBy: { request_date: 'desc' },
      take: 10,
      include: {
        user: true,
        domain: true,
      },
    });

    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch requests', detail: error });
  }
};
