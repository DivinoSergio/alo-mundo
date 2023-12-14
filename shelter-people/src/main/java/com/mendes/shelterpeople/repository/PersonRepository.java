package com.mendes.shelterpeople.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mendes.shelterpeople.model.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
    
}
