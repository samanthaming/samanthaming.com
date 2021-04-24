// export const actions = {
// async nuxtServerInit({ commit }, context) {
//   try {
//     const [recentTidbit] = await context
//       .$content('tidbits')
//       .sortBy('order', 'desc')
//       .without(['body'])
//       .limit(1)
//       .fetch();
//     commit(SET_RECENT_TIDBIT, recentTidbit);
//   } catch (error) {
//     console.error(error);
//   }
// },
// };
