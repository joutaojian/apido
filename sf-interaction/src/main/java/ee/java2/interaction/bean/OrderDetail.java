package ee.java2.interaction.bean;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by Administrator on 2017/10/23.
 */
public class OrderDetail {
    @JsonProperty("orderId")
    private String orderid;
    private String sign;
    @JsonProperty("orderCode")
    private String OrderCode;
    @JsonProperty("storeID")
    private String StoreID;
    @JsonProperty("storeName")
    private String StoreName;
    @JsonProperty("amount")
    private String Amount;
    @JsonProperty("createOperator")
    private String CreateOperator;
    @JsonProperty("createTime")
    private Long CreateTime;

    public String getOrderid() {
        return orderid;
    }

    public void setOrderid(String orderid) {
        this.orderid = orderid;
    }

    public String getSign() {
        return sign;
    }

    public void setSign(String sign) {
        this.sign = sign;
    }

    public String getOrderCode() {
        return OrderCode;
    }

    public void setOrderCode(String orderCode) {
        OrderCode = orderCode;
    }

    public String getStoreID() {
        return StoreID;
    }

    public void setStoreID(String storeID) {
        StoreID = storeID;
    }

    public String getStoreName() {
        return StoreName;
    }

    public void setStoreName(String storeName) {
        StoreName = storeName;
    }

    public String getAmount() {
        return Amount;
    }

    public void setAmount(String amount) {
        Amount = amount;
    }

    public String getCreateOperator() {
        return CreateOperator;
    }

    public void setCreateOperator(String createOperator) {
        CreateOperator = createOperator;
    }

    public Long getCreateTime() {
        return CreateTime;
    }

    public void setCreateTime(Long createTime) {
        CreateTime = createTime;
    }

    @Override
    public String toString() {
        return "OrderDetail{" +
                "orderId='" + orderid + '\'' +
                ", sign='" + sign + '\'' +
                ", orderCode='" + OrderCode + '\'' +
                ", storeID='" + StoreID + '\'' +
                ", storeName='" + StoreName + '\'' +
                ", amount='" + Amount + '\'' +
                ", createOperator='" + CreateOperator + '\'' +
                ", createTime=" + CreateTime +
                '}';
    }
}
