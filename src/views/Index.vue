<template>
    <div>
        <!-- 首页
        <p>{{d}}</p>
        <p>{{fullurl}}</p> -->
        <router-link to="/search">search</router-link>
        <div id="centerd">
            <Button class="mainbtn" type="primary" @click="goSearch()">查单词</Button>

            <Button class="mainbtn" style="margin-top:10px" type="primary" @click="goLearn()">背单词</Button>
        </div>
        
    </div>
</template>

<style>
    #centerd{
        width: 300px;
        height: 500px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto; 
    }
    .mainbtn{
        height: 240px;
        width: 100%;
    }
    .mainbtn span{
        font-size: 2em;
    }
</style>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return {
            d:this.$route.path,
            fullurl:window.location.href

        }
    },
    methods:{
        goSearch(){
            window.location.href = "./#/search"
        },
        goLearn(){
            window.location.href = "./#/learn"
        }
    }
})
</script>
