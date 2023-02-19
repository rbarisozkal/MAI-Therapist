<template>
  <v-app>
    <v-parallax class="parallax-container" height="120vh" :src="maiTherapistImage">
      <div class="flex-column align-center ">
        <h1 class="header text-h2 mt-5 ">MAI Therapist</h1>
        <h4 class="subheading ">Revolutionizing Mental Health with MAI</h4>
      </div>
    </v-parallax>
    <v-carousel height="120vh">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover>
        <div class="d-flex fill-height justify-center align-center">
          <div class="intro-card">
            <h2 class="header">
              {{ item.header }}
            </h2>
            <p class="text">
              {{ item.description }}
            </p>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>


    <div class="get-started-card" :src="howToImage">
      <div>
        <h1 class="header text-h3">LET'S GET STARTED</h1>
        <p class="text">
              Subscribe, Upload the Session Video Record, Get the Analyses
            </p>
      </div>
      <div class="bottom-button flex-column align-center">
        <v-btn size="x-large" color="success" @click="$router.push('/about')">
          GET STARTED
        </v-btn>
      </div>
    </div>
  </v-app>
</template>
<script>

export default {
  components: {},
  data() {
    return {
      //source files ofc will be replaced xD
      maiTherapistImage: require('@/assets/header.jpg'),
      howToImage: require('@/assets/question-mark.png'),
      items: [
        {
          src: require('@/assets/improved-understanding.jpg'),
          header: 'Improved Understanding of Clients',
          description:
            "With the ability to analyze emotions, gestures, and facial expressions, MAI Therapist provides therapists with a comprehensive understanding of their clients. This helps therapists to interpret their clients' actions and emotions more accurately, leading to more successful therapy sessions.",
        },
        {
          src: require('@/assets/record-keeping.jpg'),
          header: 'Better Record Keeping',
          description:
            "MAI Therapist allows therapists to keep a record of each session, including a detailed analysis of the client's reactions and behavior. This helps therapists to keep track of important points and to reflect on their approaches, leading to continuous improvement and better therapy outcomes.",
        },
        {
          src: require('@/assets/reduced-stress.jpg'),
          header: 'Reduced Stress',
          description:
            "The stress of missing important points or making mistakes during therapy sessions can have a significant impact on a therapist's performance and well-being. With MAI Therapist, therapists can be more confident in their approaches and have the reassurance that important points will not be missed, leading to reduced stress and improved mental health.",
        },
        {
          src: require('@/assets/increased-professionalism.jpg'),
          header: 'Increased Professionalism',
          description:
            " With the use of advanced technology and AI, MAI Therapist sets therapists apart as professionals at the forefront of their field. The app's comprehensive analysis and detailed reports demonstrate a therapist's commitment to providing the best possible care for their clients, leading to increased professional credibility and improved client outcomes.",
        },
      ],
    }
  },
  methods: {},
}
</script>
<style scoped lang="scss">
.intro-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60%;

  & .header {
    color: black;
    font-size: 2.5rem;
    font-weight: bolder;
    padding-left: 1vh;
    padding-right: 1vh;
    background-color: rgba($color: #ADD8E6, $alpha: 0.5);
  }

  & .text {
    color: black;
    text-align: start;
    font-size: 1.2rem;
    font-weight: bolder;
    padding: 1vh;
    background-color: rgba($color: #ADD8E6, $alpha: 0.5);
  }
}

.get-started-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 105vh;
  background-image: url('@/assets/question-mark.png');
  background-position: center;

  & .header {
    color: black;
    font-size: 2.5rem;
    font-weight: bolder;
    padding-left: 1vh;
    padding-right: 1vh;
    margin-top: 15vh;
  }

  & .text {
    justify-content: center;
    color: black;
    font-size: 1.8rem;
    font-weight: bolder;
    padding: 1vh;
    margin-top: 20vh;
  }

  & .bottom-button {
  position: relative;
  margin-top: 40vh;
}
}


</style>
