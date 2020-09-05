package com.brockel.dockerspringangular.repository;

import com.brockel.dockerspringangular.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  @Override
  Optional<User> findById(Long id);

  Optional<User> findUserByEmail(String email);

  Optional<User> findUserByUsername(String username);

  Optional<User> findUserByUsernameIgnoreCase(String username);
}
