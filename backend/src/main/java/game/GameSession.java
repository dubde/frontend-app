package game;

import java.util.Arrays;

public class GameSession {
	
	private final int nTreasures = 3;
	private final int columns = 5;
	private final int rows = 5;
	
	public final String userName;
	public final long sessionId;
	public int movesCount = 0;
	
	private int[][] treasuresPositions = new int[this.nTreasures][2];
	
	GameSession(String userName) {
		this.userName = userName;
		this.sessionId = System.currentTimeMillis();
		this.createTreasures();
	}
	
	public int checkDistance(int row, int col) {
		
		int[] distances = new int[this.nTreasures];
		
		for(int t = 0; t < this.nTreasures ; t++) {
			
			int rowDistances = (int) Math.pow(this.treasuresPositions[t][0] - row, 2);
			int colDistances = (int) Math.pow(this.treasuresPositions[t][1] - col, 2);
			
			distances[t] = (int) Math.floor(Math.sqrt(rowDistances + colDistances));
		}
		
		Arrays.sort(distances);
		this.movesCount++;
		return Arrays.binarySearch(distances, Arrays.stream(distances).min().getAsInt());
	}
	
	private void createTreasures() {
		for(int i = 0 ; i < this.nTreasures; i++) {
			this.treasuresPositions[i][0] = (int) Math.floor(Math.random() * this.rows);
			this.treasuresPositions[i][1] = (int) Math.floor(Math.random() * this.columns);
		}
	}
	
}
