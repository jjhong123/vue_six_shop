const getters = {
  isLoading: state => state.app.isLoading,
  addRouters: state => state.permission.addRouters,
  name: state => state.user.name,
  token: state => state.user.token,
  sidebar: state => state.app.sidebar, // Sidebar
};
export default getters;
