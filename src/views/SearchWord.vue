<template>
    <div id='formbody'>
        <Input search enter-button="查询" size="large" v-model="keyword" v-on:on-search="searchword()" placeholder="请输入单词" />


        <!-- <div class="sxxx">
            单词信息
        </div> -->

        <div v-if="result != null && result.code != 500">



            <div class="infobox">
                <div style="clear:both"></div>
                <div class="keyword">
                        <span v-if="result.code== 201" class="py">
                            •
                        </span>
                        <span v-else class="pg">
                            •
                        </span>

                    {{result.data.word}}

                <div style="float:right">
                    <Rate allow-half disabled v-model="valueHalf" />
                </div>
                    
                </div>     
                <div style="padding: 10px">
                    <Tag color="blue" v-if="getTag(result.data.rank,'CET4')">CET4</Tag>
                    <Tag color="cyan" v-if="getTag(result.data.rank,'CET6')">CET6</Tag>
                    <Tag color="green" v-if="getTag(result.data.rank,'TEM4')">TEM4</Tag>
                    <Tag color="orange" v-if="getTag(result.data.rank,'TEM8')">TEM8</Tag>
                </div>     
                

                <Divider orientation="left">音标</Divider>
                <div class="value">
                    {{result.data.yinbiao}}
                </div>

                <Divider orientation="left">翻译</Divider>
                <div class="value">
                    {{result.data.fanyi}}
                </div>


                <Divider orientation="left">词组</Divider>
                <div class="value">
                    {{result.data.wordgroup}}
                </div>
            </div>




        </div>
        <div v-else-if="result != null && result.code == 500">
            <p class="pr sxxx">
                未找到此单词
            </p>
        </div>
        <Spin size="large" fix v-if="spinShow"></Spin>
    </div>
</template>

<style>
    #formbody{
        padding: 20px;
        font-size: 1em;
    }
    .sxxx{
        margin-top: 10px;
        text-align: center;
        
    }
    .infobox{
        padding: 15px 10px
    }
    .keyword{
        font-weight: bold;
        font-size: 1.4em;
        margin-left: 5px;
    }
    .pg{
        color:limegreen;
    }
    .py{
        color:gold;
    }
    .pr{
        color:tomato
    }
    .value{
        padding-left: 20px;
    }
    .ivu-rate{
        font-size: 15px;
    }
</style>


<script lang="ts">
import Vue from 'vue'
import api from '@/lib/api'



export default Vue.extend({
    data(){
        return {
            keyword:"",
            result:null,
            spinShow:false,
            valueHalf:0
        }
    }
    ,
    methods:{
        async searchword(){
            this.$data.spinShow = true;
            
            let d = await api.searchWord(this.keyword)
            this.$data.result = d
            if(d.code != 500 )
            {
                let tmpd = d.data.star
                if(tmpd != "")
                {
                    this.$data.valueHalf = parseInt(tmpd.substr(-1))
                }
            }
           
            console.log(d)
            this.$data.spinShow = false;
        },
        getTag(rank:string,rankstring:string){
            if(rank.indexOf(rankstring) >= 0)
            {
                return true
            }
            else{
                return false
            }
        }
    }
})
</script>