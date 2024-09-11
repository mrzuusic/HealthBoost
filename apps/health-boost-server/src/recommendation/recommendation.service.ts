import { Injectable } from "@nestjs/common";
import { UserCreateInput } from "../user/base/UserCreateInput";

@Injectable()
export class RecommendationService {
  constructor() {}
  async GetRecommendations(args: UserCreateInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
