<template>
    <a :href="link">
        <div class="NewsCart-conteiner_nameSourse">
            <h6>{{nameSourse}}</h6>
        </div>
        <div class="NewsCart-conteiner_text">
            <h6>{{title}}</h6>
        </div>
        <small>{{date}}</small>
    </a>
</template>
<script>
    export default {
        name: 'CartNews',
        props: { 
            nameSourse: { type: String, default: "", },
            title: { type: String, default: "", },
            link: { type: String, default: "",  },
            date: { type: String, default: "", },
        }  
    }   

</script>
<style lang="scss">
    .NewsCart-conteiner{
        a{
            text-decoration: none;
            color: #000000;
            .NewsCart-conteiner_nameSourse{
                padding: 1%;
                margin-top: 4%;
                margin-left: 6%;
                height: 3.3vh;
                max-width: 30%;
                border: 1px solid #79ABFF;
                h6{
                    font-size: 1.7vh;
                }
            }
            .NewsCart-conteiner_nameSourse:hover{
                transition: 0.2s all;
                background-color: #79ABFF;
                color: #ffffff;
            }
            .NewsCart-conteiner_text{
                height: 20vh;
                padding-top: 3%;
                padding-left: 6%;
              
            }
            .NewsCart-conteiner_text:hover{
                transition: 1s all;
                color: #79ABFF;
            }
            small{
                margin-left: 61%;
                font-size: 14px;
                color: rgb(150, 148, 148);
            }
        }

     }
</style>