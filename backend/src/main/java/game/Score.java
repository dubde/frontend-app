package game;

public class Score {
	public final String userName;
	public final int score;
	
	Score(String userName,int score) {
		this.userName = userName;
		this.score = score;
	}
	
	public String getScore() {
		return userName + " - " + score;
	}
}
