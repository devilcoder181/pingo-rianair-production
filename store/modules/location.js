
  export const state = () => ({
    locationContent: [],
  });
  export const mutations = {
    addLocation(state, value) {
      state.locationContent.push(value);
    },

    gettingLocation(state, value) {
        state.locationContent = value
    },

    editLocation(state, value) {

        for (var i in state.locationContent) {
            if (state.locationContent[i].id == value.id) {
                state.locationContent[i] = value.data;
               break;
            }
        }
    },

    deleteLocation(state, value) {
      let arr = state.locationContent
      let removeIndex = arr.map(function(item) { return item.id; }).indexOf(value);
      arr.splice(removeIndex, 1);
    },


  };
  export const actions = {

    // Getting Data
    nuxtServerInit(vuexContext, value) {
        const target =  this.$fire.firestore.collection('locationContent')
        return target.get()
        .then(res=> {
            let locationArray = []

            res.forEach((doc) => {
               locationArray.push({...doc.data(), id:doc.id })
            });

            vuexContext.commit("gettingLocation", locationArray);

            //console.log(locationArray)


        }).catch( (e)=> {
            console.log(e)
        })
    },

    // Adding Data
    addLocation(vuexContext, value) {
      const target =  this.$fire.firestore.collection('locationContent')
      target.doc().set(value)
      .then(res => {
        vuexContext.commit("addLocation", value);
      })
      .catch( (e)=> {
        console.log(e)
      })
    },

    // Editing Data
    editLocation(vuexContext, value) {
        const target =  this.$fire.firestore.collection('locationContent')
        target.doc(value.id).update(value)
        .then(res => {
            vuexContext.commit("editLocation", {data: value, id: value.id});
        })
        .catch( (e)=> {
            console.log(e)
        })
    },

    // Deleting Data
    deleteLocation(vuexContext, value) {
        const target =  this.$fire.firestore.collection('locationContent')
        target.doc(value).delete()
        .then(res => {
            vuexContext.commit("deleteLocation", value);
        })
        .catch( (e)=> {
            console.log(e)
        })
    },


  };
  export const getters = {
    locationContent(state) {
      return state.locationContent;
    },
  };

