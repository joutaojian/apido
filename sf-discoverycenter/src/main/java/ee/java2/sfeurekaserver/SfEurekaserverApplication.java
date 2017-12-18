package ee.java2.sfeurekaserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class SfEurekaserverApplication {

	public static void main(String[] args) {
		SpringApplication.run(SfEurekaserverApplication.class, args);
	}
}
