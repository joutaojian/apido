/*
 * Copyright (c) 2015 by XuanWu Wireless Technology Co.Ltd. 
 *             All rights reserved                         
 */
package ee.java2.handle.bean;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * @Description 
 * @author <a href="mailto:wangpeiwen@139130.net">Peiwen.Wang</a>
 * @Data 2015年1月12日
 * @Version 1.0.0
 */
public class ResponseFailureObj extends ResponseCommon{
	@JsonProperty("request_id")
	private long requestid;
	@JsonProperty("error_code")
	private int errorcode;
	@JsonProperty("error_msg")
	private String errormsg;
	
	public ResponseFailureObj(int errorcode, String errormsg) {
		this.requestid = ResponseCommon.getRequestId();
		this.errorcode = errorcode;
		this.errormsg = errormsg;		
	}

	public long getRequestid() {
		return requestid;
	}

	public void setRequestid(long requestid) {
		this.requestid = requestid;
	}

	public int getErrorcode() {
		return errorcode;
	}

	public void setErrorcode(int errorcode) {
		this.errorcode = errorcode;
	}

	public String getErrormsg() {
		return errormsg;
	}

	public void setErrormsg(String errormsg) {
		this.errormsg = errormsg;
	}	
}
