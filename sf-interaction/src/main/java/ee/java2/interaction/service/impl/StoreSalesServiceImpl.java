package ee.java2.interaction.service.impl;

import ee.java2.interaction.bean.OrderDetail;
import ee.java2.interaction.service.StoreSalesService;
import org.apache.commons.beanutils.BeanUtils;
import org.springframework.stereotype.Service;

import java.lang.reflect.InvocationTargetException;
import java.util.Map;

/**
 * Created by Administrator on 2017/10/23.
 */
@Service
public class StoreSalesServiceImpl implements StoreSalesService {

    public OrderDetail dataTransfrom(Map<String, Object> params) {

        if (params == null) {
            return null;
        }

        OrderDetail od = new OrderDetail();
        try {
            BeanUtils.populate(od, params);
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }

        return od;
    }
}
