package ma.showmaker.ipl.repository;

import ma.showmaker.ipl.model.Match;
import org.apache.tomcat.jni.Local;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface MatchRepository extends CrudRepository<Match, Long> {

    List<Match> getByTeam1OrTeam2OrderByDateDesc(String team1, String team2, org.springframework.data.domain.Pageable pageable);

    @Query("select m from Match m where (m.team1 = :teamName or m.team2 = :teamName) and m.date between :startDate and :endDate order by m.date desc ")
    List<Match> getTeamMatchesBetweenDates(String teamName, LocalDate startDate, LocalDate endDate);

    List<Match> getByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(
            String team1,
            LocalDate startDate,
            LocalDate endDate,
            String team2,
            LocalDate startDate2,
            LocalDate endDate2);

   default List<Match> findLatestMatchesByTeam(String name, int count){
        return getByTeam1OrTeam2OrderByDateDesc(name, name, PageRequest.of(0,4));
    }
}
