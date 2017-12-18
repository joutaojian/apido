package ee.java2.interaction.controller;

import ee.java2.interaction.bean.ResultHelper;
import ee.java2.interaction.rpc.SchedualHandle;
import ee.java2.interaction.service.StoreSalesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * Created by Administrator on 2017/10/23.
 */
@RestController
public class StoreSalesController {

    @Autowired
    StoreSalesService storeSalesService;

    @Autowired
    SchedualHandle schedualHandle;

    @RequestMapping(value = "/storeSales",method = RequestMethod.POST)
    @ResponseBody
    public Object inputStoreSales(@RequestBody Map<String,Object> params) {

        //数据转换
        //OrderDetail od = storeSalesService.dataTransfrom(params);

        return schedualHandle.inputStoreSales(params);
    }

    @RequestMapping(value = "/salesforecast",method = RequestMethod.GET)
    @ResponseBody
    public Object getSalesforecast(@RequestParam String storeId) {
        Integer i = 1;

        return schedualHandle.getSalesforecast(storeId);
    }

    @RequestMapping(value = "/stores",method = RequestMethod.GET)
    @ResponseBody
    public Object getStores() {
        return ResultHelper.success(schedualHandle.getStores());
    }

}
