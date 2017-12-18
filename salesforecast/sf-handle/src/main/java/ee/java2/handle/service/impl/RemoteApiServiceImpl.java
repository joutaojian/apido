package ee.java2.handle.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.WebResource;
import ee.java2.handle.service.RemoteApiService;
import org.springframework.stereotype.Service;

import javax.ws.rs.core.MediaType;
import java.util.Map;

/**
 * Created by Administrator on 2017/10/23.
 */
@Service
public class RemoteApiServiceImpl implements RemoteApiService {

    private static Client client = Client.create();

    public boolean inputStoreSales(Map<String,Object> params) {

            String url = "http://183.63.72.242:13687/index/index/api";
            WebResource webResource = client.resource(url);

            String response = webResource.header("Content-Type", "application/json;charset=UTF-8")
                    .type(MediaType.APPLICATION_JSON)
                    .post(String.class, params);
            JSONObject result = JSONObject.parseObject(response);

            return "success".equals(result.get("msg"))?true:false;
    }
}
