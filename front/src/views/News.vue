<template>
  <div>
    <Header/>  
    <div class="News-container">
      <div class="NewsCart-conteiner"
          v-for="(news, key) in News"
          :key="key"
      >
      <CartNews
              :nameSourse ="news.nameSourse"
              :title ="news.title" 
              :link ="news.link" 
              :date ="news.date" 
      />
      </div>
    </div>
  </div>
</template>

<script >
import { mapActions, mapGetters } from 'vuex'

export default {
  
  name: 'News',
  components: {
    Header: () => import('@/components/layouts/Header'),
    CartNews: () => import('@/components/CartNews'),
  },
  computed: {
      ...mapGetters({
          News: 'GetNews'
    }),
  },
  methods: {
      ...mapActions({
          GetNews: 'GetNews'
      }),
  },
  mounted(){
      this.GetNews();
  },
}
</script>

<style lang="scss">
  .News-container{
      padding-top: 10vh;
      padding-left: 4%;
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 2%;

      .NewsCart-conteiner{
        margin-top: 2vh;
        height: 30vh;
        width: 23%;
        background-color: #FAFAFA;
        margin-right: 1%;
        box-shadow: 0 1px 2px silver;
      }
 
  }
</style>