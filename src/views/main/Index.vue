<template>
    <div class="main">
        <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
    </div>
</template>

<script>
import { getDeviceInfo } from "@/libs/api";
import { formatDate } from "@/libs/util";
export default {
    name: "Home",
    data() {
        const item = {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
        };
        return {
            tableData: Array(20).fill(item)
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.getData();
        });
    },
    methods: {
        getData() {
             let page = {
                pageSize: this.pageSize,
                pageIndex: this.pageIndex
            };
            //获取服务器数据
            // getDeviceInfo(page).then(data => {
            //     this.tableData = data;
            // });
        }
    }
};
</script>

<style scoped>
.el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}
</style>

