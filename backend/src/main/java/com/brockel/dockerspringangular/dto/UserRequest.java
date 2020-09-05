package com.brockel.dockerspringangular.dto;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class UserRequest {
  @NotBlank(message = "Username is required")
  @Size(min = 3, max = 255)
  private String username;

  @NotBlank(message = "E-Mail is required")
  @Size(max = 70)
  @Email
  private String email;
}
