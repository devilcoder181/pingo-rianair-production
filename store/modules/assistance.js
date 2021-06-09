
  export const state = () => ({
    assistanceContent: []
  });
  export const mutations = {
    addAssistance(state, value) {
      state.assistanceContent.push(value);
    },

    gettingAssistance(state, value) {
        state.assistanceContent = value
    },

    editAssistance(state, value) {
        state.assistanceContent = value.data
    },

    deleteAssistance(state, value) {
        state.assistanceContent.pop(value)
    },
  }; 
  export const actions = {

    // Getting Data
    nuxtServerInit(vuexContext, value) {
        const target =  this.$fire.firestore.collection('assistanceContent')
        return target.get()
        .then(res=> {
            let assistanceArray = []

            res.forEach((doc) => {
               assistanceArray.push({...doc.data(), id:doc.id })
            });

            vuexContext.commit("gettingAssistance", assistanceArray);

            //console.log(assistanceArray)


        }).catch( (e)=> {
            console.log(e)
        })
    },
  
    // Adding Data
    addAssistance(vuexContext, value) {
      const target =  this.$fire.firestore.collection('assistanceContent')
      target.doc().set(value)
      .then(res => {
        vuexContext.commit("addAssistance", value);
      })
      .catch( (e)=> {
        console.log(e)
      })
    },

    // Editing Data
    editAssistance(vuexContext, value) {
        const target =  this.$fire.firestore.collection('assistanceContent')
        target.doc(value.id).update(value)
        .then(res => {
            vuexContext.commit("editAssistance", {data: value, id: value.id});
        })
        .catch( (e)=> {
            console.log(e)
        })
    },
    
    // Deleting Data
    deleteAssistance(vuexContext, value) {
        const target =  this.$fire.firestore.collection('assistanceContent')
        target.doc(value).delete()
        .then(res => {
            vuexContext.commit("deleteAssistance", value);
        })
        .catch( (e)=> {
            console.log(e)
        })
    }

  };
  export const getters = {
    assistanceContent(state) {
      return state.assistanceContent;
    },
  };

