package ma.showmaker.ipl.repository;

import ma.showmaker.ipl.model.Match;
import ma.showmaker.ipl.model.Team;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeamRepository extends CrudRepository<Team, Long> {
    Team findByName(String name);
}
