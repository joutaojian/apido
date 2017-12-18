package ee.java2.handle.controller;

import ee.java2.handle.bean.ResultHelper;
import ee.java2.handle.bean.Salesforecast;
import ee.java2.handle.bean.Store;
import ee.java2.handle.dao.SalesforecastDao;
import ee.java2.handle.service.RemoteApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/10/23.
 */
@RestController
public class RemoteApiController {

    @Autowired
    RemoteApiService storeSalesService;

    @Autowired
    private SalesforecastDao salesforecastDao;

    @RequestMapping(value = "/storeSales",method = RequestMethod.POST)
    @ResponseBody
    public Object inputStoreSales(@RequestBody Map<String,Object> params) {

        if(storeSalesService.inputStoreSales(params)){
            return ResultHelper.success("插入成功");
        }
        return ResultHelper.failure(500,"插入失败");

    }

    @RequestMapping(value = "/salesforecast",method = RequestMethod.GET)
    @ResponseBody
    @CrossOrigin(origins = "*", maxAge = 3600)
    public Object getSalesforecast(@RequestParam String storeId) {

        Salesforecast sf =  salesforecastDao.getSalesforecast(storeId);
        List<Double> result = new ArrayList<Double>();

        if(sf!=null){
            for(int i = 1;i<=52;i++){
                try {
                    result.add((Double) sf.getClass().getMethod("getW"+i).invoke(sf));
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
        return ResultHelper.success(result);
    }

    @RequestMapping(value = "/stores",method = RequestMethod.GET)
    @ResponseBody
    public List<Store>  getStores() {

        List<Store> st =  salesforecastDao.getStores();

        return st;
    }



}
