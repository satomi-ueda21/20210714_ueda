<template>
  <div id="app">
    <div class="container">
      <div class="card">
        <p class="title">Todo List</p>
        <div class="todo">
          <div class="input_location">
            <input type="text" v-model="addText" class="input_add" @keyup.enter="addText()">
            <button @click="pushAdd" class="button_add">追加</button>
          </div>
          <div class="list_display" v-for="(value,index) in lists" :key="index">
            <input type="text" class="input_apdate" value="{{}}">
            <!-- <div class="button_set"> -->
              <button @click="pushUpdate" class="button_update">更新</button>
              <button @click="pushDelete" class="button_delete">削除</button>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      addText:'',
      lists:[]
    };
  },
  method:{
    pushAdd(){
      if(this.addText){
        this.list.push({text:this.addText});
      }
      this.addText='';
    }
  }
};
</script>


<style scoped></style>>
