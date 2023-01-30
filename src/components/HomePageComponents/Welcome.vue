<template>
    <v-app>
        <v-parallax class="parallax-container" height="1100" :src="maiTherapistImage">
            <div class="flex-column align-center text-white">
                <h1 class="header text-h2 mt-5">
                    MAI Therapist
                </h1>
                <h4 class="subheading">
                    Revolutionizing Mental Health with AI
                </h4>
            </div>
        </v-parallax>
        <v-carousel height="800">
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
    </v-app>
</template>
<style scoped lang="scss">
.intro-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 60%;

    & .header {
        color: #ffffff;
        font-size: 2.5rem;
    }

    & .text {
        color: #ffffff;
        text-align: start;
        font-size: 1.2rem;
    }
}
</style>
<script>
export default {
    data() {
        return {
            //source files ofc will be replaced xD
            maiTherapistImage: require('@/assets/mai-therapist-header.png'),
            items: [
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    header: 'Improved Understanding of Clients',
                    description: "With the ability to analyze emotions, gestures, and facial expressions, MAI Therapist provides therapists with a comprehensive understanding of their clients. This helps therapists to interpret their clients' actions and emotions more accurately, leading to more successful therapy sessions."
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                    header: 'Better Record Keeping',
                    description: "MAI Therapist allows therapists to keep a record of each session, including a detailed analysis of the client's reactions and behavior. This helps therapists to keep track of important points and to reflect on their approaches, leading to continuous improvement and better therapy outcomes."
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                    header: 'Reduced Stress',
                    description: "The stress of missing important points or making mistakes during therapy sessions can have a significant impact on a therapist's performance and well-being. With MAI Therapist, therapists can be more confident in their approaches and have the reassurance that important points will not be missed, leading to reduced stress and improved mental health."
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                    header: 'Increased Professionalism',
                    description: " With the use of advanced technology and AI, MAI Therapist sets therapists apart as professionals at the forefront of their field. The app's comprehensive analysis and detailed reports demonstrate a therapist's commitment to providing the best possible care for their clients, leading to increased professional credibility and improved client outcomes."
                },
            ],
        }
    }
}
</script>