package ee.java2.interaction.rpc;

import ee.java2.interaction.bean.Store;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Map;


@FeignClient(value = "service-handle")
public interface SchedualHandle {

    @RequestMapping(value = "/storeSales",method = RequestMethod.POST)
    String inputStoreSales(Map<String,Object> params);

    @RequestMapping(value = "/salesforecast",method = RequestMethod.GET)
    String getSalesforecast(@RequestParam("storeId")String storeId);//feign有个脑残bug,参考http://www.jianshu.com/p/7ce46c0ebe9d

    @RequestMapping(value = "/stores",method = RequestMethod.GET)
    List<Store> getStores();
}