// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file peoplesmarkets/commerce/v1/price.proto (package peoplesmarkets.commerce.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum peoplesmarkets.commerce.v1.Currency
 */
export enum Currency {
  /**
   * @generated from enum value: CURRENCY_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: CURRENCY_EUR = 1;
   */
  EUR = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(Currency)
proto3.util.setEnumType(Currency, "peoplesmarkets.commerce.v1.Currency", [
  { no: 0, name: "CURRENCY_UNSPECIFIED" },
  { no: 1, name: "CURRENCY_EUR" },
]);

/**
 * @generated from enum peoplesmarkets.commerce.v1.PriceType
 */
export enum PriceType {
  /**
   * @generated from enum value: PRICE_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: PRICE_TYPE_ONE_TIME = 1;
   */
  ONE_TIME = 1,

  /**
   * @generated from enum value: PRICE_TYPE_RECURRING = 2;
   */
  RECURRING = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(PriceType)
proto3.util.setEnumType(PriceType, "peoplesmarkets.commerce.v1.PriceType", [
  { no: 0, name: "PRICE_TYPE_UNSPECIFIED" },
  { no: 1, name: "PRICE_TYPE_ONE_TIME" },
  { no: 2, name: "PRICE_TYPE_RECURRING" },
]);

/**
 * @generated from enum peoplesmarkets.commerce.v1.PriceBillingScheme
 */
export enum PriceBillingScheme {
  /**
   * @generated from enum value: PRICE_BILLING_SCHEME_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: PRICE_BILLING_SCHEME_PER_UNIT = 1;
   */
  PER_UNIT = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(PriceBillingScheme)
proto3.util.setEnumType(PriceBillingScheme, "peoplesmarkets.commerce.v1.PriceBillingScheme", [
  { no: 0, name: "PRICE_BILLING_SCHEME_UNSPECIFIED" },
  { no: 1, name: "PRICE_BILLING_SCHEME_PER_UNIT" },
]);

/**
 * @generated from enum peoplesmarkets.commerce.v1.RecurringInterval
 */
export enum RecurringInterval {
  /**
   * @generated from enum value: RECURRING_INTERVAL_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: RECURRING_INTERVAL_DAY = 1;
   */
  DAY = 1,

  /**
   * @generated from enum value: RECURRING_INTERVAL_WEEK = 2;
   */
  WEEK = 2,

  /**
   * @generated from enum value: RECURRING_INTERVAL_MONTH = 3;
   */
  MONTH = 3,

  /**
   * @generated from enum value: RECURRING_INTERVAL_YEAR = 4;
   */
  YEAR = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(RecurringInterval)
proto3.util.setEnumType(RecurringInterval, "peoplesmarkets.commerce.v1.RecurringInterval", [
  { no: 0, name: "RECURRING_INTERVAL_UNSPECIFIED" },
  { no: 1, name: "RECURRING_INTERVAL_DAY" },
  { no: 2, name: "RECURRING_INTERVAL_WEEK" },
  { no: 3, name: "RECURRING_INTERVAL_MONTH" },
  { no: 4, name: "RECURRING_INTERVAL_YEAR" },
]);

/**
 * @generated from message peoplesmarkets.commerce.v1.Recurring
 */
export class Recurring extends Message<Recurring> {
  /**
   * @generated from field: peoplesmarkets.commerce.v1.RecurringInterval interval = 1;
   */
  interval = RecurringInterval.UNSPECIFIED;

  /**
   * @generated from field: uint32 interval_count = 2;
   */
  intervalCount = 0;

  /**
   * @generated from field: optional uint32 trial_period_days = 3;
   */
  trialPeriodDays?: number;

  constructor(data?: PartialMessage<Recurring>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "peoplesmarkets.commerce.v1.Recurring";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "interval", kind: "enum", T: proto3.getEnumType(RecurringInterval) },
    { no: 2, name: "interval_count", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "trial_period_days", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Recurring {
    return new Recurring().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Recurring {
    return new Recurring().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Recurring {
    return new Recurring().fromJsonString(jsonString, options);
  }

  static equals(a: Recurring | PlainMessage<Recurring> | undefined, b: Recurring | PlainMessage<Recurring> | undefined): boolean {
    return proto3.util.equals(Recurring, a, b);
  }
}

/**
 * @generated from message peoplesmarkets.commerce.v1.Price
 */
export class Price extends Message<Price> {
  /**
   * @generated from field: peoplesmarkets.commerce.v1.Currency currency = 1;
   */
  currency = Currency.UNSPECIFIED;

  /**
   * @generated from field: peoplesmarkets.commerce.v1.PriceType price_type = 2;
   */
  priceType = PriceType.UNSPECIFIED;

  /**
   * @generated from field: peoplesmarkets.commerce.v1.PriceBillingScheme billing_scheme = 3;
   */
  billingScheme = PriceBillingScheme.UNSPECIFIED;

  /**
   * @generated from field: uint32 unit_amount = 4;
   */
  unitAmount = 0;

  /**
   * @generated from field: optional peoplesmarkets.commerce.v1.Recurring recurring = 5;
   */
  recurring?: Recurring;

  constructor(data?: PartialMessage<Price>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "peoplesmarkets.commerce.v1.Price";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "currency", kind: "enum", T: proto3.getEnumType(Currency) },
    { no: 2, name: "price_type", kind: "enum", T: proto3.getEnumType(PriceType) },
    { no: 3, name: "billing_scheme", kind: "enum", T: proto3.getEnumType(PriceBillingScheme) },
    { no: 4, name: "unit_amount", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "recurring", kind: "message", T: Recurring, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Price {
    return new Price().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Price {
    return new Price().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Price {
    return new Price().fromJsonString(jsonString, options);
  }

  static equals(a: Price | PlainMessage<Price> | undefined, b: Price | PlainMessage<Price> | undefined): boolean {
    return proto3.util.equals(Price, a, b);
  }
}
