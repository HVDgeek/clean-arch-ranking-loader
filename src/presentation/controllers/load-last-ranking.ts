import { LastRankingLoader } from "@/domain/usecases";
import { Controller, HttpResponse, serverError, success } from "@/presentation/contracts";
import { RankingScoreViewModel } from "@/presentation/view-model";

export class LoadLastController implements Controller {

  constructor ( private readonly lastRankingLoader: LastRankingLoader) {}

  async handle(): Promise<HttpResponse<RankingScoreViewModel[]>> {

    try {
      
      const ranking = await this.lastRankingLoader.load()

      return success( RankingScoreViewModel.mapCollection(ranking))
    } catch (error) {
      return serverError(error)
    }

  }
}