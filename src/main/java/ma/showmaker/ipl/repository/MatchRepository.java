package ma.showmaker.ipl.repository;

import ma.showmaker.ipl.model.Match;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;
import java.util.List;

@Repository
public interface MatchRepository extends CrudRepository<Match, Long> {

    List<Match> getByTeam1OrTeam2OrderByDateDesc(String team1, String team2, org.springframework.data.domain.Pageable pageable);

   default List<Match> findLatestMatchesByTeam(String name, int count){
        return getByTeam1OrTeam2OrderByDateDesc(name, name, PageRequest.of(0,4));
    }
}
