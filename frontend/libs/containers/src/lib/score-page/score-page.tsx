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
    <div className="container">
      <div className="col align-self-center">
        <div className="row">
          <h1 className="title">High Scores</h1>
        </div>
        <div className="row align-items-center">
          <ol className="list-group">
            {props.highScoresList.map((highScore: HighScore, index) => (
              <li key={index} className="list-group-item">
                {highScore.userName} - {highScore.score}
              </li>
            ))}
          </ol>
        </div>
        <div className="row">
          <button
            type="button"
            className="btn btn-link"
            onClick={props.navigateToStart}
          >
            Back to start page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScorePage;
