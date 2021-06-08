export const state = () => ({
    seoContent: []
});
export const mutations = {
    addSEO(state, payload) {
      state.seoContent = payload;
    },
};
export const actions = {
    // Getting SEO Datas

    // Updating SEO Content
    addSEO(vuexContext, payload) {
      const target =  this.$fire.firestore.collection('seo')
      target.doc(payload.col).set(payload.value)
      .then(res => {
        vuexContext.commit("addSEO", payload.value);
      })
      .catch( (e)=> {
        console.log(e)
      })
    },
  };

  export const getters = {
    seoContent(state) {
      return state.seoContent;
    },
  };