<template>
  <div class="filter_wrapper">
     <div class="search_bar">
         <label>Search By Name</label>
          <div class="search_wrapper">
        <input type="text" @keyup="search" @keyup.delete="search" v-model="searchString" placeholder="Search..">
        <i class="icon icon-search"></i>
      </div>
     </div>

      <div class="search_bar">
         <label>Search By Email</label>
          <div class="search_wrapper">
        <input type="text" @keyup="search" @keyup.delete="search" v-model="searchString" placeholder="Search..">
        <i class="icon icon-search"></i>
      </div>
     </div>

      <div class="search_bar">
         <label>Search By Phone</label>
          <div class="search_wrapper">
        <input type="text" @keyup="search" @keyup.delete="search" v-model="searchString" placeholder="Search..">
        <i class="icon icon-search"></i>
      </div>
     </div>



    
  </div>
</template>

<script>
  export default {
      data() {
          return {
              searchString: ''
          }
      },
      methods: {
          search() {
              this.$emit('search', this.searchString)
          }
      },
      
  }

</script>

<style lang="scss" scoped>
  .filter_wrapper {
    position: relative;
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 0.75fr 0.75fr;
    grid-gap: 2.5vw;
    align-items: center;

     @media only screen and (max-width:767px){
       grid-template-columns: 1fr;
     }
    label {
        display: block;
        position: relative;
        margin-top: 0;
        font-weight: 600;
        margin-bottom: 0.5em;
        width: 100%;
        color: $color-white;
        @include smText2();
      }

    .search_bar {
      position: relative;
      display: block;

      @media only screen and (max-width:767px){
        display: none;

        &:nth-child(1){
          display: block;
        }
      }


      .search_wrapper {
        position: relative;
        width: 100%;

        i {
          position: absolute;
          top: 50%;
          left: 0;
          width: 3vw;
          font-size: 1.2vw;
          color: $color-text;
          pointer-events: none;
          transform: translateY(-50%);
          display: block;
          text-align: center;

          @media only screen and (max-width:767px){
            font-size: 20px;
            left: auto;
            right: 18px;
          }
        }

        input {
          position: relative;
          display: block;
          width: 100%;
          height: 2.5rem;
          border: none;
          outline: none;
          font-size: 1vw;
          font-weight: 500;
          color: $color-white;
          padding: 0.5em 1em;
          background-color: #202127;
          border-radius: 0.25em;
          transition: all 0.3s ease;
          padding-left: 3vw;

          @media only screen and (max-width:767px){
            padding-left: 15px;
            padding-right: 40px;
            font-size: 15px;
          }

          &:focus {
            box-shadow: none;
            border: none;
          }

        }

      }
    }

    .pagination_{
        position: relative;
        display: block;
        width: 100%;

        .pag_{
            position: relative;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 5px;
            width: 100%;
            justify-content: flex-end;
            li{
                position: relative;
                cursor: pointer;
                width: 30px;
                height: 30px;
                border-radius: 4px;
                background-color: $color-icon;
                font-size: 12px;
                font-weight: 500;
                color: $color-white;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;

                &:hover{
                    background-color: $color-primary;
                }

                &.active_{
                    background-color: $color-primary;
                    &:hover{
                        background-color: $color-secondary;
                    }
                }
            }
        }
    }
  }

</style>
