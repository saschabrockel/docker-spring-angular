package com.brockel.dockerspringangular.api;

import com.brockel.dockerspringangular.dto.MessageResponse;
import com.brockel.dockerspringangular.dto.UserRequest;
import com.brockel.dockerspringangular.model.User;
import com.brockel.dockerspringangular.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@Slf4j
@RequestMapping("/api/user")
public class UserController {

  @Autowired private UserService userService;

  @Value("${angular.service.base-path}")
  private String angularServiceBasePath;

  @PostMapping("/create")
  public ResponseEntity<Object> registerUser(@Valid @RequestBody UserRequest userRequest) {
    if (userService.existsByUsername(userRequest.getUsername().toLowerCase())) {
      return ResponseEntity.status(409).body(userRequest.getUsername() + " is already existing");
    }

    if (userService.existsByEmail(userRequest.getEmail())) {
      return ResponseEntity.status(409).body(userRequest.getUsername() + " is already existing");
    }

    User user = new User();
    user.setUsername(userRequest.getUsername());
    user.setEmail(userRequest.getEmail().toLowerCase());

    userService.save(user);
    log.info("Created {}", user);
    return ResponseEntity.ok(new MessageResponse("Created user"));
  }

  @GetMapping("/get-all")
  public ResponseEntity<Object> getAllUsers(@RequestHeader HttpHeaders headers) {
    return ResponseEntity.status(HttpStatus.OK).body(userService.findAll());
  }
}
