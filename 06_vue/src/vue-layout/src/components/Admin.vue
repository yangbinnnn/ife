<template>
    <div class="admin">
        <Layout>
            <div class="seg">
                <div style="float: left; margin: 10px">
                    <p>合约地址: <strong>{{ contractAddr }}</strong> <Button @click="abiShow = true">查看ABI</Button></p>
                    <p>上线时间: {{ activeDate }}</p>
                    <Modal
                        v-model="abiShow"
                        title="ABI">
                        <p>Content of dialog</p>
                    </Modal>
                </div>
                <div style="float: right; margin: 10px">
                    <p>状态: 
                    <a>
                    <Button @click="onActiviedClick" v-bind:disabled="isActived"> {{ activeStatus }} </Button>
                    </a></p>
                </div>
            </div>
            <div class="seg" style="height: 40px">
                <div style="float: left; margin: 10px">
                <p>比赛列表</p>
                </div>
                <div style="float: right: margin: 10px">
                <Button>新增比赛</Button>
                </div>
            </div>
            <Content></Content>
        </Layout>
    </div>
</template>

<script>
export default {
    name: "Admin",
    data () {
        return {
            contractAddr: "0x000000000000000000000000000000000000",
            activeTime: 1534688082000,
            isActived: false,
            abiShow: false
        }
    },
    methods: {
        onActiviedClick: function() {
            console.log("click")
            this.isActived = !this.isActived;
        }
    },
    computed: {
        activeStatus: function() {
            return this.isActived ? "已激活": "未激活"
        },
        activeDate: function() {
            var date = new Date(this.activeTime)
            return date.toLocaleString()
        }
    }
}
</script>

<style scoped>
    .admin {
        width: 790px;
        margin: 0 auto;
    }

    .seg {
        height: 100px;
        border: 1px solid gainsboro;
    }

    p {
        font-size: 14px;
    }
</style>
