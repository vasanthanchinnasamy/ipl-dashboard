package com.innovate.ipldashboard.repository;

import com.innovate.ipldashboard.model.Team;

import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team,Long>{
    
    Team findByTeamName(String teamName);
}
