/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DiaryEntryWhereInput } from "./DiaryEntryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DiaryEntryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DiaryEntryWhereInput,
  })
  @ValidateNested()
  @Type(() => DiaryEntryWhereInput)
  @IsOptional()
  @Field(() => DiaryEntryWhereInput, {
    nullable: true,
  })
  every?: DiaryEntryWhereInput;

  @ApiProperty({
    required: false,
    type: () => DiaryEntryWhereInput,
  })
  @ValidateNested()
  @Type(() => DiaryEntryWhereInput)
  @IsOptional()
  @Field(() => DiaryEntryWhereInput, {
    nullable: true,
  })
  some?: DiaryEntryWhereInput;

  @ApiProperty({
    required: false,
    type: () => DiaryEntryWhereInput,
  })
  @ValidateNested()
  @Type(() => DiaryEntryWhereInput)
  @IsOptional()
  @Field(() => DiaryEntryWhereInput, {
    nullable: true,
  })
  none?: DiaryEntryWhereInput;
}
export { DiaryEntryListRelationFilter as DiaryEntryListRelationFilter };
