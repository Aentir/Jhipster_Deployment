package com.trasteoapp.com.repository;

import com.trasteoapp.com.domain.Department;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data JPA repository for the Department entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {
    @Override
    @EntityGraph(value = "department-entity-graph")
    List<Department> findAll();
}
