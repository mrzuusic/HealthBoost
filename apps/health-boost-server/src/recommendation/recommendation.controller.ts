import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RecommendationService } from "./recommendation.service";
import { UserCreateInput } from "../user/base/UserCreateInput";

@swagger.ApiTags("recommendations")
@common.Controller("recommendations")
export class RecommendationController {
  constructor(protected readonly service: RecommendationService) {}

  @common.Post("/recommendations")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetRecommendations(
    @common.Body()
    body: UserCreateInput
  ): Promise<string> {
        return this.service.GetRecommendations(body);
      }
}
