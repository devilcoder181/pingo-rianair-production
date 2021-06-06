
  export const state = () => ({
    aboutText: []
  });
  export const mutations = {
    updatePost(state, abtposts) {
      state.aboutText = abtposts;
    },
  };
  export const actions = {


    // Updating About Content
    updatePost(vuexContext, abtposts) {
      const target =  this.$fire.firestore.collection('aboutUsContent')
      target.doc('ADXIW68qMuRbZjfDjAJt').update(abtposts)
      .then(res => {
        vuexContext.commit("updatePost", abtposts);
      })
      .catch( (e)=> {
        console.log(e)
      })
    },
  };
  export const getters = {
    aboutText(state) {
      return state.aboutText;
    },
  };

