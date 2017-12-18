package ee.java2.interaction.service;

import ee.java2.interaction.bean.OrderDetail;

import java.util.Map;

/**
 * Created by Administrator on 2017/10/23.
 */
public interface StoreSalesService {

    OrderDetail dataTransfrom(Map<String, Object> params);
}
