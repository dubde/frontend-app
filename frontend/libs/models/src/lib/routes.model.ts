export enum Route {
    StartPage = 'start-page',
    GamePage = 'game-page',
    ScorePage = 'score-page'
}

export type Routes = Route.StartPage | Route.GamePage | Route.ScorePage;