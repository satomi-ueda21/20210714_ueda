<template>
  <div id="app">
    <div class="container">
      <div class="card">
        <p class="title">Todo List</p>
        <div class="todo">
          <div class="flex mb_15">
            <input type="text" class="input_add" v-model="addText" @keyup.enter="addText()">
            <button @click="pushAdd" class="button_add">追加</button>
          </div>
          <div class="flex" v-for="(todo,index) in todolists" :key="index">
            <input type="text" class="input_apdate" v-model="item.todo">
            <div class="button_set">
              <button @click="pushUpdate(item.id,item.todo)" class="button_update">更新</button>
              <button @click="pushDelete" class="button_delete">削除</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return{
      addText:'',
      todolists:[],
    };
  },
  methods:{
    async getTodo(){
      const resData = await axios.get ("https://shielded-bastion-35302.herokuapp.com/api/todo");
      this.todolists=resData.data.data;
    },
    async pushAdd(){
      const sendData={
        todo:this.addText,
      };
      await axios.post("https://shielded-bastion-35302.herokuapp.com/api/todo",sendData);
      await this.getTodo();
    },
    async pushUpdate(id,todo){
      const sendData={
        todo:todo,
      };
      await axios.put("https://shielded-bastion-35302.herokuapp.com/api/todo"+id,sendData);
      await this.getTodo;
    },
    async pushDelete(id){
      await axios.delete("https://shielded-bastion-35302.herokuapp.com/api/todo"+id);
      await this.getTodo;
    },
  },
  created(){
    this.getTodo();
  },
};
</script>


<style scoped>
  .container{
    background-color: #2d197c;
    height: 100vh;
    width: 100vw;
    position: relative;
  }

  .card {
    background-color: #fff;
    width: 50vw;
    padding: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
  }

  .flex{
    display: flex;
    justify-content: space-between;
  }

  .mb_15{
    margin-bottom: 15px;
  }

  .title {
    font-weight: bold;
    font-size: 24px;
    color: black;
    padding-bottom: 20px;
  }

  .input_add{
    width: 80%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    -webkit-appearance: none;
      -moz-appearance: none;
            appearance: none;
    font-size: 14px;
    outline: none;
  }

  .input_update {
    width: 30%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    -webkit-appearance: none;
      -moz-appearance: none;
            appearance: none;
    font-size: 14px;
    outline: none;
  }

  .button_add {
    text-align: left;
    border: 2px solid #dc70fa;
    font-size: 12px;
    color: #dc70fa;
    background-color: #fff;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s;
    outline: none;
  }

  .button_add:hover {
    background-color: #dc70fa;
    border-color: #dc70fa;
    color: #fff;
  }

  .button_update {
    text-align: left;
    border: 2px solid #fa9770;
    font-size: 12px;
    color: #fa9770;
    background-color: #fff;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s;
    outline: none;
  }

  .button-update:hover {
    background-color: #fa9770;
    border-color: #fa9770;
    color: #fff;
  }

  .button_delete {
    text-align: left;
    border: 2px solid #71fadc;
    font-size: 12px;
    color: #71fadc;
    background-color: #fff;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s;
    outline: none;
  }

.button_delete:hover {
    background-color: #71fadc;
    border-color: #71fadc;
    color: #fff;
  }
</style>>
