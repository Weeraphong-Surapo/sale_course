import axios from "axios";

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
  },
  getters: {
    authenticated(state) {
      return state.user && state.token;
    },
    user(state) {
      return state.user;
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, data) {
      state.user = data;
    },
  },
  actions: {
    async SignIn({ dispatch }, credentials) {
      let response = axios.post("auth/signin", credentials);
      return dispatch("attempt", (await response).data.token);
    },

    async SignUp({ dispatch }, credentials) {
      let response = axios.post("auth/signup", credentials);
      return dispatch("attempt", (await response).data.token);
    },

    async attempt({ commit, state }, token) {
      if (token) {
        commit("SET_TOKEN", token);
      }

      if (!state.token) {
        return;
      }

      try {
        let response = await axios.get("/me");
        commit("SET_USER", response.data);
      } catch (e) {
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
      }
    },

    SignOut({ commit }) {
      return axios.post("/signout").then(() => {
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
      });
    },

    async SaveProfile({commit},data){
      await axios.put('auth/updateprofile',data)
      try {
        let response = await axios.get("auth/me");
        commit("SET_USER", response.data);
      } catch (e) {
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
      }
    },

    async ChangePassword(_,data){
      await axios.put('auth/changepassword',data)
    }
  },
};
