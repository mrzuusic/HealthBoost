import * as graphql from "@nestjs/graphql";
import { UserCreateInput } from "../user/base/UserCreateInput";
import { RecommendationService } from "./recommendation.service";

export class RecommendationResolver {
  constructor(protected readonly service: RecommendationService) {}

  @graphql.Query(() => String)
  async GetRecommendations(
    @graphql.Args()
    args: UserCreateInput
  ): Promise<string> {
    return this.service.GetRecommendations(args);
  }
}
