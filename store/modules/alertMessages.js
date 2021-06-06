
  export const state = () => ({
    showAlert: false
  });
  export const mutations = {
    activateAlert(state, check) {
        state.showAlert = check;
        setTimeout(()=> {
            state.showAlert = false;
        },2000)
    },
  };
  export const getters = {
    showAlert(state) {
      return state.showAlert;
    },
  };

