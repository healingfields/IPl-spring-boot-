package ma.showmaker.ipl.data;

import ma.showmaker.ipl.model.Match;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.ItemProcessor;

import java.time.LocalDate;

public class Matchprocessor implements ItemProcessor<MatchInput, Match> {
    private static final Logger log = LoggerFactory.getLogger(Matchprocessor.class);

    @Override
    public Match process(final MatchInput matchInput) throws Exception {
        Match match = new Match();
        match.setId(Long.parseLong(matchInput.getId()));
        match.setCity(matchInput.getCity());
        match.setDate(LocalDate.parse(matchInput.getDate()));
        match.setPlayerOfMatch(matchInput.getPlayer_of_match());
        match.setVenue(matchInput.getVenue());
        String firstInningsTeam, secondInningsTeam;
        if("bat".equals(matchInput.getToss_decision())){
            firstInningsTeam = matchInput.getToss_inner();
            secondInningsTeam = matchInput.getToss_inner().equals(matchInput.getTeam1())
                    ? matchInput.getTeam2():matchInput.getTeam1();
        }else{
            secondInningsTeam = matchInput.getToss_inner();
            firstInningsTeam = matchInput.getToss_inner().equals(matchInput.getTeam1())?matchInput.getTeam2():matchInput.getTeam1();
        }
        match.setTeam1(firstInningsTeam);
        match.setTeam2(secondInningsTeam);
        match.setTossWinner(matchInput.getToss_inner());
        match.setTossDecision(matchInput.getToss_decision());
        match.setWinner(matchInput.getWinner());
        match.setResult(matchInput.getResult());
        match.setResultMargin(matchInput.getResult_margin());
        match.setUmpire1(matchInput.getUmpire1());
        match.setUmpire2(matchInput.getUmpire2());

        return match;
    }
}
