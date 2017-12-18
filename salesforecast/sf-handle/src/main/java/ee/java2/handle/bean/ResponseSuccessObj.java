/*
 * Copyright (c) 2015 by XuanWu Wireless Technology Co.Ltd. 
 *             All rights reserved                         
 */
package ee.java2.handle.bean;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * @Description 
 * @author <a href="mailto:wangpeiwen@139130.net">Peiwen.Wang</a>
 * @Data 2015年1月9日
 * @Version 1.0.0
 */
public class ResponseSuccessObj extends ResponseCommon{
	@JsonProperty("request_id")
	long request_id;
	@JsonProperty("response_params")
	Object params;

	public ResponseSuccessObj() {
		this.request_id = ResponseCommon.getRequestId();
		
	}

	public Object getParams() {
		return params;
	}

	public void setParams(Object params) {
		this.params = params;
	}

	public long getRequest_id() {
		return request_id;
	}

	public void setRequest_id(long requestId) {
		request_id = requestId;
	}

}
