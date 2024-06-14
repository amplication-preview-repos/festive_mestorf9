/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CowWhereInput } from "./CowWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CowOrderByInput } from "./CowOrderByInput";

@ArgsType()
class CowFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CowWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CowWhereInput, { nullable: true })
  @Type(() => CowWhereInput)
  where?: CowWhereInput;

  @ApiProperty({
    required: false,
    type: [CowOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CowOrderByInput], { nullable: true })
  @Type(() => CowOrderByInput)
  orderBy?: Array<CowOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CowFindManyArgs as CowFindManyArgs };
