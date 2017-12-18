/*
 * Copyright (c) 2015 by XuanWu Wireless Technology Co.Ltd. 
 *             All rights reserved                         
 */
package ee.java2.handle.bean;

import java.util.Random;

/**
 * @Description 
 * @author <a href="mailto:wangpeiwen@139130.net">Peiwen.Wang</a>
 * @Data 2015年1月12日
 * @Version 1.0.0
 */
public class ResponseCommon{
	public static long getRequestId(){
		long l = System.currentTimeMillis();
		Random random = new Random();
		int i = random.nextInt(10000);
		return Long.valueOf(l + "" + i);
	}
	public static void main(String[] args) {
	}

}
