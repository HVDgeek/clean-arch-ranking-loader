export class RankingUnavailableError extends Error {
  constructor(){
    super('Ranking Unavailble')
    this.name = 'RankingUnavailableError'
  }
}