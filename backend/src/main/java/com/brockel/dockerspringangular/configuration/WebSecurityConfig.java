package com.brockel.dockerspringangular.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;

@Configuration
public class WebSecurityConfig {

  @Bean
  public CorsFilter corsFilter() {
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    CorsConfiguration config = new CorsConfiguration();
    config.setAllowCredentials(true);
    config.setAllowedOrigins(
        Arrays.asList("http://localhost:4200", "http://localhost", "http://your-domain.com"));
    config.setAllowedMethods(Arrays.asList("POST", "OPTIONS", "GET", "DELETE", "PUT"));
    config.setAllowedHeaders(
        Arrays.asList("X-Requested-With", "Origin", "Content-Type", "Accept", "Authorization"));
    source.registerCorsConfiguration("/**", config);
    return new CorsFilter(source);
  }
}
