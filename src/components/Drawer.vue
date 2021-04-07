<template>
  <div :class="drawerStatus ? 'drawer closeDrawer' : 'drawer'">
    <div class="top-drawer">
      <div class="item-drawer dashboard">
        <img :src="dashboardIcon" />
        <div class="item-text ">
          <router-link class="link" to="/dashboard">Dashboard</router-link>
        </div>
      </div>
      <div class="item-drawer chat">
        <img :src="messengerIcon" />
        <div class="item-text">
          <router-link class="link" to="/chat">Team chat</router-link>
        </div>
      </div>
      <div class="item-drawer calendar">
        <img :src="calendarIcon" />
        <div class="item-text">
          <router-link class="link" to="/calendar">Calendar</router-link>
        </div>
      </div>
      <div class="item-drawer documents">
        <img :src="folderIcon" />
        <div class="item-text">
          <router-link class="link" to="/documents">Documents</router-link>
        </div>
      </div>
      <div class="item-drawer store">
        <img :src="storeIcon" />
        <div class="item-text">
          <router-link class="link" to="/store">Store</router-link>
        </div>
      </div>
    </div>
    <div class="mid-drawer">
      <div class="mid-title">INTEGRATION</div>
      <div class="item-drawer">
        <img :src="jiraIcon" />
        <div class="item-text">Jira</div>
      </div>
      <div class="item-drawer">
        <img :src="slackIcon" />
        <div class="item-text">Slack</div>
      </div>
      <div class="item-drawer">
        <img :src="intercomIcon" />
        <div class="item-text">Intercom</div>
      </div>
      <div class="item-drawer">
        <img :src="addIcon" class="addIcon" />
        <div class="item-text">Add new plugin</div>
      </div>
    </div>
    <div class="bot-drawer">
      <div class="item-drawer-bot">
        <img :src="settingIcon" class="addIcon" />
        <div class="item-text">Setting</div>
      </div>
      <div class="item-drawer-bot">
        <img :src="logoutIcon" class="addIcon" />
        <div class="item-text">Log out</div>
      </div>
    </div>
  </div>
</template>
<script>
import dashboardIcon from "../assets/img/dashboard.png";
import calendarIcon from "../assets/img/calendar.png";
import storeIcon from "../assets/img/store.png";
import folderIcon from "../assets/img/folder.png";
import messengerIcon from "../assets/img/messenger.png";
import jiraIcon from "../assets/img/diamond.png";
import slackIcon from "../assets/img/slack.png";
import addIcon from "../assets/img/button.png";
import intercomIcon from "../assets/img/intercom.png";
import settingIcon from "../assets/img/settings.png";
import logoutIcon from "../assets/img/logout.png";
export default {
  props: ["drawerStatus", "params"],
  data() {
    return {
      dashboardIcon,
      calendarIcon,
      storeIcon,
      folderIcon,
      messengerIcon,
      jiraIcon,
      slackIcon,
      addIcon,
      intercomIcon,
      settingIcon,
      logoutIcon,
    };
  },
  watch: {
    params: function() {
      document
        .querySelectorAll(".item-drawer")
        .forEach((item) => item.classList.remove("active"));
      document.querySelector(`.${this.params}`).classList.add("active");
     
    },
  },
  //   mounted() {
  //     document.querySelector(`.${this.params}`).classList.add("active");
  //   },
  // beforeUpdated() {
  //   if(this.drawerStatus){
  //     document.querySelector('.drawer').classList.remove('closeDrawer')
  //   }else{
  //     document.querySelector('.drawer').classList.add('closeDrawer')
  //   }
  //   console.log(this.drawerStatus)
  // },
};
</script>
<style scoped>
.drawer {
  height: 82vh;
  width: 16vw;
  background-color: #ffffff;
  position: fixed;
  transition: all 0.5s;
  left: 0;
  top: 15vh;
  bottom: 3vh;
  margin-left: 1vw;
  border-radius: 10px;
}
.top-drawer {
  width: 100%;
  height: 40%;
  padding-left: 40px;
  padding-top: 20px;
}
.mid-drawer {
  width: 100%;
  height: 35%;
  padding-left: 40px;
}
.link {
  text-decoration: none;
  font-size: 13px;
  font-weight: 550;
  color: #b2bec3;
  cursor: pointer;
}
.link:hover {
  color: #4070ff;
}
.active {
  border-right: 4px solid #3498db;
}
.active .link {
  color: #4070ff;
}
.bot-drawer {
  width: 100%;
  height: 25%;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.mid-title {
  width: 100%;
  height: 20%;
  color: #b2bec3;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.item-drawer {
  height: 20%;
  display: flex;
  align-items: center;
  width: 82%;
  margin: 0;
  /* justify-content: space-around; */
  /* justify-content: ; */
}
.item-drawer-bot {
  height: 20%;
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0;
  /* justify-content: space-around; */
  /* justify-content: ; */
}
.item-drawer-bot img {
  width: 24px;
  height: 24px;
  padding-right: 10px;
}
.item-drawer img {
  width: 24px;
  height: 24px;
  padding-right: 10px;
}
.item-text {
  font-size: 13px;
  font-weight: 550;
  color: #b2bec3;
  cursor: pointer;
}
.item-text:hover {
  color: #4070ff;
}
.closeDrawer {
  left: -17vw;
  transition: all 0.5s;
}
</style>
