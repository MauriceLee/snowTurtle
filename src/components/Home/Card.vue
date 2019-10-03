<template>
  <div id="homeCard">
    <b-card-group>
      <b-card>
        <b-card-img :src="require('@/assets/img1.jpg')"></b-card-img>
        <div class="card-insideBody">
          <b-card-title>About Niseko United</b-card-title>
          <b-card-text>
            Niseko United is comprised of four resorts on the one mountain, Niseko Annupuri (1,308m).
            <br />
            <br />100km south of Sapporo, Niseko Annupuri is a part of the Niseko-Shakotan-Otaru Kaigan Quasi-National Park and is the most eastern park of the Niseko Volcanic Group.
            <br />
            <br />Seasonal winds from the Eurasian continent pick up moisture over the warm currents of the Sea of Japan to from snow clouds and in turn some of the driest, lightest powder in the world.
            <br />
            <br />With its rich variety of terrain and beautiful winter woods, Niseko offers an unforgettable experience for all levels of skier/snowborder.
          </b-card-text>
        </div>
      </b-card>

      <b-card>
        <b-card-img :src="require('@/assets/img2.jpg')"></b-card-img>
        <div class="card-insideBody">
          <b-card-title>Current Weather</b-card-title>
          <!-- div class="table-responsive"這個標籤加上去，table在小尺寸的時候會變成卷軸 -->
          <div class="table-responsive">
            <table class="table">
              <tbody>
                <tr
                  v-for="item in this.$store.state.weatherItems"
                  :key="item[0]"
                >
                  <th scope="row">{{ item[0] }}</th>
                  <td>{{ item[1] }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="webLink">
            <b-card-title><br /><br />Website Link</b-card-title>
            <br />
            <b-button
              variant="info"
              size="lg"
              href="http://www.niseko.ne.jp"
            >Push Me</b-button>
          </div>
        </div>
      </b-card>

      <b-card>
        <b-card-img :src="require('@/assets/img3.jpg')"></b-card-img>
        <div class="card-insideBody">
          <b-card-title>Niseko United PV 2018</b-card-title>
          <div class="video-container">
            <!-- youtebe所產生的連結記得勾選保護模式才不會報warning -->
            <b-embed
              type="iframe"
              src="https://www.youtube-nocookie.com/embed/G_qFhknHEiY"
              allowfullscreen
            ></b-embed>
          </div>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch("GET_WEATHER");
    }
  };
</script>

<style scoped>
  .card-body {
    padding: 0;
  }
  .card-insideBody {
    padding: 20px;
  }
  .card-title {
    text-align: center;
    font-size: 27px;
  }
  .table {
    color: #000000;
    font-family: monospace;
    font-size: 17px;
    text-align: center;
    margin: auto;
  }
  .webLink {
    text-align: center;
  }
  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
  }
  .video-container iframe,
  .video-container object,
  .video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>