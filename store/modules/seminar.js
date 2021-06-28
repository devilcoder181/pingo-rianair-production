
  export const state = () => ({
    seminar: [],
  });
  export const mutations = {

    setSeminar(state, seminarValue) {
      state.seminar = seminarValue;
    },

    updateSeminar(state, seminarValue) {
      state.seminar = seminarValue;
    },

  };
  export const actions = {

    // Loading Contact Contents
    nuxtServerInit(vuexContext, context) {
      const target =  this.$fire.firestore.collection('seminar').doc('content')
      return target.get()
      .then(res=> {
        vuexContext.commit("setSeminar", res.data());
      }).catch( (e)=> {
        console.log(e)
      })

    },

 
    setSeminar(vuexContext, seminarValue) {
      vuexContext.commit("setSeminar", seminarValue);
      //console.log(vuexContext)
    },
    
    updateSeminar(vuexContext, seminarValue) {
      const target =  this.$fire.firestore.collection('seminar')
      target.doc('content').update(seminarValue)
      .then(res => {
        vuexContext.commit("updateSeminar", seminarValue);
      })
      .catch( (e)=> {
        console.log(e)
      })
    },

  };
  export const getters = {
    seminar(state) {
      return state.seminar;
    },
  };

