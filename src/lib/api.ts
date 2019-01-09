import $ from 'jquery'

var apirooturl = "http://192.168.30.114:3000"

 async function  sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

class Api{

    constructor(){

    }

    public async searchWord(key:string){

        return new Promise<any>((resolve,reject) =>{
            $.ajax({
                url: apirooturl +"/getKeyWord?key=" +  key,
                async:false,
                success:async function(data){
                    await sleep(1000)
                    resolve(data)
                }
                ,error:function(s){
                    reject(s)
                }
            })
        })
    }
}

export default new Api()

