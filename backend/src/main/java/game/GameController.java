package game;

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

	@PostMapping(path="/api/games")
	public String createGameSession(@RequestParam(value="userName", defaultValue="null") String userName) {
		return this.gameApp.createGameSession(userName);
	}
	
	@GetMapping(path="/api/games")
	public Score[] getScores() {
		return this.gameApp.scoreBoard;
	}
	
	@PostMapping(path="/api/games/{id}/positions")
	public String[] getPositionsDistances(@RequestBody int[][] positions, @PathVariable long id) {
		return this.gameApp.checkPositions(positions);
	}
}
