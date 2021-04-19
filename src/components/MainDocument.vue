<template>
  <div class="pageContainer">
    <SkillSet v-for="(item,index) in listSkill" :key="index" :listSkill="item" />
  </div>
</template>
<script>
import SkillSet from "./SkillSet";
import jsImg from '../assets/img/js.jpg'
import pythonImg from '../assets/img/python.png';
import javaImg from '../assets/img/java.jpg';
import phpImg from '../assets/img/php.png';
import cplusImg from '../assets/img/cplus.png';
import cxacImg from '../assets/img/cxac.png';
export default {
  props: ["pageContent"],
  components: {
    SkillSet,
  },
  data() {
    return {
      listSkill: [
        {
          name: "Frame Work",
          email: "Years",
          id: "level",
          img:jsImg,
          language:'Javascript'
        },
        {
          name: "Frame Work",
          email: "Years",
          id: "level",
          img:pythonImg,
          language:'Python'
        },{
          name: "Frame Work",
          email: "Years",
          id: "level",
          img:phpImg,
          language:'PHP'
        },{
          name: "Frame Work",
          email: "Years",
          id: "level",
          img:javaImg,
          language:'Java'
        },{
          name: "Frame Work",
          email: "Years",
          id: "level",
          img:cplusImg,
          language:'C++'
        },{
          name: "Frame Work",
          email: "Years",
          id: "level",
          img:cxacImg,
          language:'C#'
        },
        
      ],
    };
  },
};
</script>
<style scoped>
.pageContainer {
  width: 100%;
  height: 82%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  /* align-items: center; */
  /* margin: 55px 0; */
  background-color: #f5f6fa;
  margin: 50px 0 0 0;
}
</style>
