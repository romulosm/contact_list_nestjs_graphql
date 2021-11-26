import { IsString, IsNumber, IsPositive, IsEnum } from 'class-validator';

export enum NodeEnv {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

export class ConfigEnv {
  @IsNumber()
  @IsPositive()
  httpPort: number;

  @IsString()
  @IsEnum(NodeEnv)
  nodeEnv: string;

  @IsString()
  mongodbUri: string;

  get isProduction(): boolean {
    return this.nodeEnv === NodeEnv.Production;
  }
}
