package com.diploma.backend.config;

import com.diploma.backend.config.jwt.JwtFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private JwtFilter jwtFilter;

    public SecurityConfig(JwtFilter jwtFilter) {
        this.jwtFilter = jwtFilter;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .httpBasic().disable()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers("/source/reg.html", "/source/auth.html", "/source/index.html").permitAll()
                .antMatchers("/api/items", "/api/items/{id}", "/api/items/category/*", "/api/items/podcategory/*", "/api/items/page", "/api/items/count",
                        "/items/countCategory/*", "/register", "/auth").permitAll()
                .antMatchers("/api/items/newItem", "/api/items/*", "/api/items/userItem","/api/users", "/api/users/*", "/api/items/deleteItem/*/*").hasAnyRole("USER", "ADMIN")
                .antMatchers("/").hasRole("ADMIN")
//                .antMatchers("/api/items/newItem", "/api/items/*", "/api/items/userItem", "/api/users", "/api/users/*", "/api/items/deleteItem/*/*").hasRole("ADMIN")
                .and()
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}