<template>
  <div class="alert_wrapper">
    <div class="alert_content">
      <div class="alert_icon">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <path d="M162.205,478.037c-43.085-18.223-79.748-48.416-106.027-87.313C29.259,350.876,15.029,304.29,15.029,256
	c0-64.365,25.065-124.879,70.579-170.392C131.121,40.095,191.635,15.03,256,15.03c24.441,0,48.551,3.644,71.66,10.832
	c3.961,1.231,8.175-0.98,9.408-4.944c1.232-3.963-0.981-8.175-4.944-9.408C307.568,3.873,281.956,0,256,0
	C187.62,0,123.333,26.629,74.98,74.98C26.629,123.333,0,187.62,0,256c0,51.3,15.12,100.796,43.725,143.137
	c27.91,41.312,66.856,73.382,112.625,92.741c0.956,0.404,1.948,0.596,2.924,0.596c2.929,0,5.712-1.723,6.925-4.589
	C167.816,484.062,166.028,479.653,162.205,478.037z" />
          <path
            d="M471.046,117.054c-26.093-40.303-62.793-72.391-106.133-92.795c-3.755-1.767-8.231-0.158-10,3.598
	c-1.768,3.755-0.157,8.232,3.598,10c40.799,19.207,75.351,49.418,99.918,87.364C483.642,164.165,496.97,209.388,496.97,256
	c0,64.365-25.066,124.878-70.579,170.392C380.879,471.905,320.365,496.97,256,496.97c-21.875,0-43.552-2.93-64.428-8.707
	c-3.998-1.103-8.139,1.238-9.247,5.239c-1.107,3.999,1.238,8.139,5.238,9.247C209.745,508.887,232.771,512,256,512
	c68.38,0,132.667-26.628,181.019-74.98C485.371,388.667,512,324.38,512,256C512,206.484,497.839,158.437,471.046,117.054z" />
          <path d="M182.528,329.472c1.467,1.467,3.39,2.201,5.314,2.201s3.846-0.734,5.314-2.201L256,266.627l62.845,62.845
	c1.467,1.467,3.39,2.201,5.314,2.201s3.846-0.734,5.314-2.201c2.935-2.935,2.935-7.693,0-10.628L266.627,256l62.844-62.845
	c2.935-2.934,2.935-7.693,0-10.627c-2.934-2.934-7.693-2.934-10.627,0L256,245.373l-62.845-62.844
	c-2.934-2.934-7.693-2.934-10.627,0c-2.935,2.934-2.935,7.693,0,10.627L245.372,256l-62.844,62.844
	C179.593,321.78,179.593,326.537,182.528,329.472z" />
        </svg>
      </div>
      <div class="alert_button_group">
        <h3>Are you sure want to delete this data ? </h3>
        <p>Do you really want to delete these records? This process cannot be undone.</p>
        <div class="button_group center_">
          <button class="btn_secondary"  @click="cancel"><i class="icon icon-close-circled"></i> Cancel</button>
          <button class="btn_primary" @click="confirm"><i class="icon icon-check-circle" ></i> Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      props: {
          id: {
              type: String,
              require: true
          }
      },
      methods: {
          cancel() {
              this.$emit('cancel')
          },
          confirm() {
             this.$emit('remove', this.id)
          }
      }
  }

</script>

<style lang="scss" scoped>
  .alert_wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 99999;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: $color-dark;
      opacity: 0.75;

    }

    .alert_content {
      position: relative;
      display: flex;
      min-width: 40%;
      max-width: 40%;
      padding: 1.5em;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: $color-dark-2;
      border-radius: 1em;
      text-align: center;

      h3 {
        margin: 0.5em 0;
        @include mdText2();
        font-weight: 500;
        color: $color-text;
      }

      p {
        margin: 0 0 1.5em;
        @include mdText();
        font-weight: 400;
        color: $color-text;
      }

      .alert_icon {
        display: block;
        position: relative;
        width: 100%;
        margin-bottom: 1.5em;
        margin-top: 1em;
        svg {
          display: block;
          width: 7.5vw;
          margin: 0 auto;

          path{
              fill: $error;
          }
        }
      }
    }
  }

</style>
