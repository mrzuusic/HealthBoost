import { Module } from "@nestjs/common";
import { RecommendationService } from "./recommendation.service";
import { RecommendationController } from "./recommendation.controller";
import { RecommendationResolver } from "./recommendation.resolver";

@Module({
  controllers: [RecommendationController],
  providers: [RecommendationService, RecommendationResolver],
  exports: [RecommendationService],
})
export class RecommendationModule {}
