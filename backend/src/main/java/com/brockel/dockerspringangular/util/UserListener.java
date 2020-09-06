package com.brockel.dockerspringangular.util;

import com.brockel.dockerspringangular.model.User;

import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import java.util.Date;

public class UserListener {

  @PreUpdate
  @PrePersist
  public void setCreated(User user) {
    user.setCreated(new Date());
  }
}
