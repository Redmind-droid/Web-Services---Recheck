const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const findById = async (id) => {
    return await prisma.diploma.findUnique({
        where: { id: parseInt(id) },
    });
};

const create = async (userData) => {
    return await prisma.diploma.create({
        data: userData,
    });
};

const updateById = async (id, userData) => {
    return await prisma.diploma.update({
        where: { id: parseInt(id) },
        data: userData,
    });
};

const deleteById = async (id) => {
    return await prisma.diploma.delete({
        where: { id: parseInt(id) },
    });
};

module.exports = {
  findById,
  create,
  updateById,
  deleteById,
};
