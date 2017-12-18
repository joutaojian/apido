package ee.java2.handle.bean;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * 
 * 用于返回rest服务结果 处理类
 * 
 * @author lianght
 * 
 */
public class ResultHelper {

	/**
	 * APP成功调用，返回提示信息
	 * @param data 需要返回的信息，最终会被转化成json格式
	 * @return
	 */
	public static Object success(Object data) {
		ResponseSuccessObj result = new ResponseSuccessObj();
		result.params = data;
		return Response.ok().type(MediaType.APPLICATION_JSON).entity(result).build().getEntity();
	}
	
	/**
	 * APP失败调用，返回错误信息信息
	 * @return
	 */
	public static Object failure(int errorcode, String errormsg) {
		ResponseFailureObj result = new ResponseFailureObj(errorcode, errormsg);
		return Response.status(Response.Status.INTERNAL_SERVER_ERROR.getStatusCode()).type(MediaType.APPLICATION_JSON).entity(result).build().getEntity();
	}
	
}
