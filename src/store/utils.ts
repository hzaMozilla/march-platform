export function combineStore (stores) {
  return stores.reduce(
    (store, { state = {}, getters = {}, mutations = {} }) => ({
      state: {
        ...store.state,
        ...state
      },
      getters: {
        ...store.getters,
        ...getters
      },
      mutations: {
        ...store.mutations,
        ...mutations
      }
    }),
    {}
  );
}
