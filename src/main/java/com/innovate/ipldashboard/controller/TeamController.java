package com.innovate.ipldashboard.controller;

import java.util.List;

import com.innovate.ipldashboard.model.Match;
import com.innovate.ipldashboard.model.Team;
import com.innovate.ipldashboard.repository.MatchRepository;
import com.innovate.ipldashboard.repository.TeamRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeamController {

    private  TeamRepository teamRepository;
    private  MatchRepository matchRepository;
    
    public TeamController(TeamRepository teamRepository,MatchRepository matchRepository){
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName){
         Team team = this.teamRepository.findByTeamName(teamName);
         List<Match> matches = this.matchRepository.findLatestMatchesByTeam(teamName,4);
         team.setMatches(matches);
         return team;
    }

   

    
}
