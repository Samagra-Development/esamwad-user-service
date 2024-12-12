import {
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class SendOtpDto {
  @IsString()
  @IsNotEmpty()
  // @IsPhoneNumber('IN')
  phone: string;

  @IsString()
  @IsOptional()
  errorMessage?: string;

  @IsString()
  @IsOptional()
  botId?: string;

  @IsString()
  @IsOptional()
  orgId?: string;

  @IsString()
  @IsOptional()
  deliveryType?: string;
}
