<template>
  <div class="Login-conteiner">
    <h2>Login</h2>
    <input class="Login-conteiner_input" placeholder="Email" type="text" v-model="loginForm.email">
    <input class="Login-conteiner_input" placeholder="Password" type="password" v-model="loginForm.password">
    <h6>Forgot password?</h6>

    <div class="btn-container"> 
        <button class="Login-conteiner_button" @click="Login">Login</button>
        <button class="Login-conteiner_button">
            <router-link to="/SignUp">
                <a>SignUp</a>
            </router-link>  
        </button>
    </div>

    <h5 class="Login-conteiner_messange" > {{messange}}</h5>

  </div>
</template>

<script >

import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'Login',
    data: () => ({
        loginForm: {
            email: " ",
            password: " "
        },
    }),
    computed: {
        ...mapGetters({
            messange: 'authError',
        }),
    },
    methods: {
        ...mapActions({
            login: 'login',
            logout: 'logout',
        }),
        async Login(){
            await this.login(this.loginForm);
            this.$router.push('/');
        }
    },
    mounted(){
        console.log('1')
        this.logout();
    }
}

</script>

<style lang="scss">
    @import '/public/colors.scss';
    
    .Login-conteiner{

        margin: auto;
        margin-top: 10vh;
        height: 540px;
        background-color: $background-color_SignUp-conteiner;
        border-radius: 4px;
        width: 30%;
        box-shadow: 1px 0 2px 0.3 rgba(3, 3, 3, 0.95);

        h2{
            color: $h1-color;
            padding-top: 55px;
            text-align: center;
        }

        .Login-conteiner_input{
            outline: none;
            display: block;
            margin: auto;
            margin-top: 22px;
            height: 38px;
            width: 80%;
            border: 2px solid #e2ecef;
            border-radius: 3px;
            background-color: #f7f8f9;
            color: #7e8586;
            font-size: 12px;
            padding-left: 10px;
        }

        h6{
            margin-top: 15px;
            margin-right: 45px;
            text-align: right;
            color: #31629b;
            cursor: pointer;
        }

        .btn-container{

            display: flex;
            margin: 30px;
            padding: 0;
            .Login-conteiner_button{
                display: block;
                margin: auto;
            
                width: 42%;
                height: 45px;
                background-color: $background-color_SignUp-conteiner;
                border: 2px solid $h1-color;
                border-radius: 5px;
                color: $h1-color;
            }

            .Login-conteiner_button a{
                color: $h1-color;
                text-decoration: none;
            }

            .Login-conteiner_button:hover{
                background-color: #79ABFF;
                color: #ffffff;
                transition: 0.2s all;

                a{
                    color: #ffffff;
                    transition: 0.2s all;
                }

            }
        }

        .Login-conteiner_messange {
            color: $color_err;
            padding-top: 25px;
            padding-left: 100px;
            padding-right: 100px;
            text-align: center;
        }
        
    }

    @media (max-width: 1600px){
        .Login-conteiner{
            width: 30%;
        }
    }

    @media (max-width: 1400px){
        .Login-conteiner{
            width: 40%;
        }
    }

    @media (max-width: 990px){
        .Login-conteiner{
            width: 50%;
            height: 520px;
        }
    }

    @media (max-width: 760px){
        .Login-conteiner{
            width: 70%;
            height: 500px;
        }
    }

    @media (max-width: 568px){
        .Login-conteiner{
            width: 90%;
            height: 480px;
        }
    }
    
</style>