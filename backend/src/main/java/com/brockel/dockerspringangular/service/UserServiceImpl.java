package com.brockel.dockerspringangular.service;

import com.brockel.dockerspringangular.model.User;
import com.brockel.dockerspringangular.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

  @Autowired private UserRepository userRepository;

  @Override
  public boolean existsByEmail(String email) {
    return userRepository.findUserByEmail(email).isPresent();
  }

  @Override
  public boolean existsByUsername(String username) {
    return userRepository.findUserByUsernameIgnoreCase(username).isPresent();
  }

  @Override
  public List<User> findAll() {
    return userRepository.findAll();
  }

  @Override
  public User findByEmail(String email) {
    return userRepository
        .findUserByEmail(email)
        .orElseThrow(() -> new EntityNotFoundException("User Not Found with email: " + email));
  }

  @Override
  public User findById(Long id) {
    return userRepository
        .findById(id)
        .orElseThrow(() -> new EntityNotFoundException("User Not Found with id: " + id));
  }

  @Override
  public User findByUsername(String username) throws EntityNotFoundException {
    return userRepository
        .findUserByUsername(username)
        .orElseThrow(
            () -> new EntityNotFoundException("User Not Found with username: " + username));
  }

  @Override
  public void save(User user) {
    userRepository.save(user);
  }
}
