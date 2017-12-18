<template>
    <div>
          <el-row>
              <el-col :span="12">
                <div class="crumbs">
                      <el-breadcrumb separator="/">
                          <el-breadcrumb-item><i class="el-icon-date"></i>图表</el-breadcrumb-item>
                          <el-breadcrumb-item>销量预测</el-breadcrumb-item>
                      </el-breadcrumb>
                  </div>
              </el-col>
              <el-col style="float:right">
                  当前客户：
                  <el-select v-model="storeSelsct" clearable placeholder="请选择" @visible-change="handleCurrentChange(storeSelsct)">
                        <el-option v-for="item in stores" :label="item.storeName" :value="item.storeId"></el-option>
                  </el-select>
              </el-col>

         </el-row>

        <div class="echarts">
            <IEcharts :option="bar" ></IEcharts>
        </div>

    </div>
</template>

<script>
    import IEcharts from 'vue-echarts-v3';
    export default {
        components: {
            IEcharts
        },
       data() {
           return{
            storeSelsct: 0,
            stores: [{storeId: 0, storeName: "暂无"}],
            bar: {
                color:["#20a0ff","#13CE66","#F7BA2A","#FF4949"],
                title: {
                    text: '销量预测'
                },
                xAxis: {
                    data: [
                            "1周", "2周", "3周", "4周", "5周", "6周","7周", "8周", "9周", "10周", "11周", "12周",
                            "13周", "14周", "15周", "16周", "17周", "18周","19周", "20周", "21周", "22周", "23周", "24周",
                            "25周", "26周", "27周", "28周", "29周", "30周","31周", "32周", "33周", "34周", "35周", "36周",
                            "37周", "38周", "39周", "40周", "41周", "42周","43周", "44周", "45周", "46周", "47周", "48周",
                            "49周", "50周", "51周", "52周"
                          ]
                },
                yAxis:{},
                series: [
                    {
                        name: "销量",
                        type: "bar",
                        data: [0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0,
                               0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0,
                               0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0,
                               0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0,
                               0, 0, 0, 0
                              ]
                    }
                ]
             }
            }
            },
        mounted: function(){
                this.getStores();
            },
        methods: {
            handleCurrentChange(val) {
                this.getSalesforecast(val);
            },
            getSalesforecast(val){
                this.$http.get('/api/sfa/sf/salesforecast'+'?'+'storeId='+val).then(function(res){
                this.bar.series[0].data = res.body.response_params;
                },function(){
                    console.log('请求失败处理');
                });

            },
            getStores(){
                this.$http.get('/api/sfa/sf/stores').then(function(res){
                    var result = res.body.response_params;
                    this.stores = result;
                    this.storeSelsct = result[0].storeId;
                    this.getSalesforecast(result[0].storeId);
                },function(){
                    console.log('请求失败处理');
                });

            }
        }
    }
</script>

<style scoped>
    .echarts {
        float: center;
        width: auto;
        height: 800px;
    }
</style>
