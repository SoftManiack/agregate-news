<template>

       <div >
        <input placeholder="Cart Name"  class="SettingsCart-container_title" :value="cartName">
        <div class="SettingsCart-container_checkboxes">
          <p for="RadBtnVK" >VK</p>
          <input id="RadBtnVK"  type="radio" v-model="Sourse" value="VK">
          <p for="RadBtnRSS" >RSS</p>
          <input id="RadBtnRSS"  type="radio" v-model="Sourse" value="RSS">
        </div>
        <input placeholder="Link"  class="SettingsCart-container_Link" :value="Link">

        <h5>Key Words</h5>  

        <div class="KeyWords-container">
            <input class="KeyWords-container_input" placeholder="Add Key Word">
            <div v-for="(keyWord, key) in keyWords" :key="key">
                <button class="KeyWords-container_keyword">{{keyWord.keywords_word}}</button>
                <i class="KeyWords-container-icon fas fa-trash-alt"></i>
            </div>
        </div>

        <button class="SettingsCart-container_Save">Save</button>
        <button class="SettingsCart-container_Delete">Delete</button>
      </div>
</template>
<script>
    export default {
        name: 'CartSettings',
        props: { 
            cartName: { type: String,  default: "Cart Name", },
            Sourse: { type: String, default: "RSS", },
            Link: { type: String, default: "", },
            keyWords: { type: Array },
         }  
    }

</script>
