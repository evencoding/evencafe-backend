import client from "../../client";

const error = "해당 유저를 찾지 못했습니다 하핫..존재하지 않는듯?";

export default {
  Query: {
    seeProfile: async (_, { id = undefined, username = undefined }) => {
      if (id) {
        const user = await client.user.findUnique({
          where: { id },
          include: {
            shops: { include: { user: true, categories: true } },
            followingShops: { include: { user: true, categories: true } },
          },
        });
        if (user) {
          return {
            user,
          };
        } else {
          return {
            error,
          };
        }
      } else if (username) {
        const user = await client.user.findUnique({
          where: { username },
          include: {
            shops: { include: { user: true, categories: true } },
            followingShops: { include: { user: true, categories: true } },
          },
        });
        if (user) {
          return {
            user,
          };
        } else {
          return {
            error,
          };
        }
      } else {
        return {
          error,
        };
      }
    },
  },
};
