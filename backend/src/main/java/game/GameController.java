package game;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GameController {
	
	private final Application gameApp;
	
	GameController(Application app) {
		this.gameApp = app;
	}
	
	@CrossOrigin
	@PostMapping(path="/api/games")
	public String createGameSession(@RequestParam(value="userName", defaultValue="null") String userName) {
		return this.gameApp.createGameSession(userName);
	}
	
	@GetMapping(path="/api/games")
	public Score[] getScores() {
		return this.gameApp.scoreBoard;
	}
	
	@CrossOrigin
	@PostMapping(path="/api/games/{id}/positions")
	public String[] getPositionsDistances(@RequestBody String positions, @PathVariable long id) {
		int[][] positionsArray = new int[3][2];
		String[] positionsSent = positions.split("|");
		for(int i = 0; i < 3; i++) {
			String[] pos = positionsSent[i].split(",");
			positionsArray[i][0] = Integer.parseInt(pos[0]);
			positionsArray[i][1] = Integer.parseInt(pos[1]);
		}
		return this.gameApp.checkPositions(positionsArray);
	}
}
