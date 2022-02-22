package ma.showmaker.ipl.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private long totalMatches;
    private long totalWins;

    @Transient
    public List<Match> getMatches() {
        return matches;
    }

    public void setMatches(List<Match> matches) {
        this.matches = matches;
    }

    @Transient
    private List<Match> matches;

    public Team() {

    }
    public Team(String name, long totalMatches) {
        this.name = name;
        this.totalMatches = totalMatches;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getTotalMatches() {
        return totalMatches;
    }

    public void setTotalMatches(long totalMatches) {
        this.totalMatches = totalMatches;
    }

    public long getTotalWins() {
        return totalWins;
    }

    public void setTotalWins(long totalWins) {
        this.totalWins = totalWins;
    }

    @Override
    public String toString() {
        return "Team{" +
                "id=" + id +
                ", Name='" + name + '\'' +
                ", totalMatches=" + totalMatches +
                ", totalWins=" + totalWins +
                '}';
    }

}

