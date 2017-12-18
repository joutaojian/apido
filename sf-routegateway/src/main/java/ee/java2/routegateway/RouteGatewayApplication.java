package ee.java2.routegateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@EnableZuulProxy
@EnableEurekaClient
@SpringBootApplication
public class RouteGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(RouteGatewayApplication.class, args);
	}



}
