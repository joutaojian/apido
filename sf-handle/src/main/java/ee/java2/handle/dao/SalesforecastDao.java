package ee.java2.handle.dao;

import ee.java2.handle.bean.Salesforecast;
import ee.java2.handle.bean.Store;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface SalesforecastDao {

    /**
     * 根据城市名称，查询城市信息
     *
     * @param cityName 城市名
     */
    Salesforecast getSalesforecast(@Param("storeId")String storeId);

    List<Store> getStores();
}