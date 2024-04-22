// 让导入.vue文件时候不报错
declare module '*.vue'{
    import Vue from 'vue'
    export default Vue
}