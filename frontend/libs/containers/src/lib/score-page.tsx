import React from 'react';

import { HighScore } from '@frontend/models';
import './score-page.css';

export interface ScorePageProps {
  fetchScores;
  navigateToStart;
  highScoresList: HighScore[];
}

export const ScorePage = (props: ScorePageProps) => {


  return (
    <div>
      <h1>High Scores</h1>
      <ol>
        {props.highScoresList.map((highScore: HighScore) => (
          <li>
            {highScore.userName} - {highScore.score}
          </li>
        ))}
      </ol>
      <p onClick={props.navigateToStart}>
        <b>back to start page</b>
      </p>
    </div>
  );
};

export default ScorePage;
