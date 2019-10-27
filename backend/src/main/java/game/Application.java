package game;

import java.util.Arrays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class Application {
	
	private GameSession gameSession;
	private int remainingTreasures;
	public Score[] scoreBoard = new Score[10];
	
	public String createGameSession(String userName) {
		if(this.gameSession != null) {
			if(this.gameSession.userName == userName) {
				return Long.toString(this.gameSession.sessionId);
			}
		}
		this.gameSession = new GameSession(userName);
		this.remainingTreasures = 3;		
		return Long.toString(this.gameSession.sessionId);
	}
	
	public String[] checkPositions(int[][] positions) {
		String[] results = new String[positions.length];
		
		for(int i = 0; i < positions.length; i++) {
			int distance = this.gameSession.checkDistance(positions[i][0], positions[i][1]);
			if(distance == 0) {
				this.remainingTreasures--;
				if(this.remainingTreasures == 0) {
					this.updateScoreBoard(this.gameSession.userName, this.gameSession.movesCount);
				}
			}
			results[i] = this.mapDistanceToSymbol(distance);
		}
		return results;
	}
	
	private void updateScoreBoard(String userName,int score) {
		
		Score fullScore = new Score(userName, score);
		Arrays.sort(this.scoreBoard);
		
		for(int i = 0; i < this.scoreBoard.length; i++) {
			if(this.scoreBoard[i].score > fullScore.score) {
				Score temp = this.scoreBoard[i];
				this.scoreBoard[i] = fullScore;
				fullScore = temp;
			}
		}
	}
	
	private String mapDistanceToSymbol(int distance) {
		if(distance == 0) return "T";
		return Integer.toString(4 - distance);
	}

	public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
