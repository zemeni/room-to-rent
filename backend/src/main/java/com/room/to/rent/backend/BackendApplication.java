package com.room.to.rent.backend;

import com.room.to.rent.backend.auth.AuthenticationService;
import com.room.to.rent.backend.auth.RegisterRequest;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import static com.room.to.rent.backend.user.Role.ADMIN;
import static com.room.to.rent.backend.user.Role.MANAGER;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(AuthenticationService authenticationService) {
		return args -> {
			var admin = RegisterRequest.builder()
					.firstName("admin")
					.lastName("admin")
					.email("admin@gmail.com")
					.password("admin")
					.role(ADMIN)
					.build();
			System.out.println("Admin token: " + authenticationService.register(admin).getAccessToken());

			var manager = RegisterRequest.builder()
					.firstName("manager")
					.lastName("manager")
					.email("manager@gmail.com")
					.password("manager")
					.role(MANAGER)
					.build();
			System.out.println("Manager token: " + authenticationService.register(manager).getAccessToken());
		};

	}

}
