const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const findById = async (id) => {
    return await prisma.job.findUnique({
        where: { id: parseInt(id) },
    });
};

const create = async (userData) => {
    return await prisma.job.create({
        data: userData,
    });
};

const updateById = async (id, userData) => {
    return await prisma.job.update({
        where: { id: parseInt(id) },
        data: userData,
    });
};

const deleteById = async (id) => {
    return await prisma.job.delete({
        where: { id: parseInt(id) },
    });
};

module.exports = {
  findById,
  create,
  updateById,
  deleteById,
};
