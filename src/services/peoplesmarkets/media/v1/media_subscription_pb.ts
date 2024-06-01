// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file peoplesmarkets/media/v1/media_subscription.proto (package peoplesmarkets.media.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Pagination } from "../../pagination/v1/pagination_pb.js";

/**
 * @generated from message peoplesmarkets.media.v1.MediaSubscriptionResponse
 */
export class MediaSubscriptionResponse extends Message<MediaSubscriptionResponse> {
  /**
   * @generated from field: string media_subscription_id = 1;
   */
  mediaSubscriptionId = "";

  /**
   * @generated from field: string buyer_user_id = 2;
   */
  buyerUserId = "";

  /**
   * @generated from field: string shop_id = 4;
   */
  shopId = "";

  /**
   * @generated from field: string offer_id = 5;
   */
  offerId = "";

  /**
   * @generated from field: uint64 current_period_start = 6;
   */
  currentPeriodStart = protoInt64.zero;

  /**
   * @generated from field: uint64 current_period_end = 7;
   */
  currentPeriodEnd = protoInt64.zero;

  /**
   * @generated from field: string subscription_status = 8;
   */
  subscriptionStatus = "";

  /**
   * @generated from field: uint64 payed_at = 9;
   */
  payedAt = protoInt64.zero;

  /**
   * @generated from field: uint64 payed_until = 10;
   */
  payedUntil = protoInt64.zero;

  /**
   * @generated from field: optional string stripe_subscription_id = 11;
   */
  stripeSubscriptionId?: string;

  /**
   * @generated from field: optional uint64 canceled_at = 12;
   */
  canceledAt?: bigint;

  /**
   * @generated from field: optional uint64 cancel_at = 13;
   */
  cancelAt?: bigint;

  constructor(data?: PartialMessage<MediaSubscriptionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "peoplesmarkets.media.v1.MediaSubscriptionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "media_subscription_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "buyer_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "shop_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "offer_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "current_period_start", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "current_period_end", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 8, name: "subscription_status", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "payed_at", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 10, name: "payed_until", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 11, name: "stripe_subscription_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 12, name: "canceled_at", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 13, name: "cancel_at", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MediaSubscriptionResponse {
    return new MediaSubscriptionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MediaSubscriptionResponse {
    return new MediaSubscriptionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MediaSubscriptionResponse {
    return new MediaSubscriptionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MediaSubscriptionResponse | PlainMessage<MediaSubscriptionResponse> | undefined, b: MediaSubscriptionResponse | PlainMessage<MediaSubscriptionResponse> | undefined): boolean {
    return proto3.util.equals(MediaSubscriptionResponse, a, b);
  }
}

/**
 * @generated from message peoplesmarkets.media.v1.PutMediaSubscriptionRequest
 */
export class PutMediaSubscriptionRequest extends Message<PutMediaSubscriptionRequest> {
  /**
   * @generated from field: string media_subscription_id = 1;
   */
  mediaSubscriptionId = "";

  /**
   * @generated from field: string buyer_user_id = 2;
   */
  buyerUserId = "";

  /**
   * @generated from field: string offer_id = 3;
   */
  offerId = "";

  /**
   * @generated from field: uint64 current_period_start = 4;
   */
  currentPeriodStart = protoInt64.zero;

  /**
   * @generated from field: uint64 current_period_end = 5;
   */
  currentPeriodEnd = protoInt64.zero;

  /**
   * @generated from field: string subscription_status = 6;
   */
  subscriptionStatus = "";

  /**
   * @generated from field: uint64 payed_at = 7;
   */
  payedAt = protoInt64.zero;

  /**
   * @generated from field: uint64 payed_until = 8;
   */
  payedUntil = protoInt64.zero;

  /**
   * @generated from field: string shop_id = 9;
   */
  shopId = "";

  /**
   * @generated from field: optional string stripe_subscription_id = 10;
   */
  stripeSubscriptionId?: string;

  /**
   * @generated from field: optional uint64 canceled_at = 11;
   */
  canceledAt?: bigint;

  /**
   * @generated from field: optional uint64 cancel_at = 12;
   */
  cancelAt?: bigint;

  constructor(data?: PartialMessage<PutMediaSubscriptionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "peoplesmarkets.media.v1.PutMediaSubscriptionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "media_subscription_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "buyer_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "offer_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "current_period_start", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "current_period_end", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "subscription_status", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "payed_at", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 8, name: "payed_until", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 9, name: "shop_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "stripe_subscription_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 11, name: "canceled_at", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 12, name: "cancel_at", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PutMediaSubscriptionRequest {
    return new PutMediaSubscriptionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PutMediaSubscriptionRequest {
    return new PutMediaSubscriptionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PutMediaSubscriptionRequest {
    return new PutMediaSubscriptionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PutMediaSubscriptionRequest | PlainMessage<PutMediaSubscriptionRequest> | undefined, b: PutMediaSubscriptionRequest | PlainMessage<PutMediaSubscriptionRequest> | undefined): boolean {
    return proto3.util.equals(PutMediaSubscriptionRequest, a, b);
  }
}

/**
 * @generated from message peoplesmarkets.media.v1.PutMediaSubscriptionResponse
 */
export class PutMediaSubscriptionResponse extends Message<PutMediaSubscriptionResponse> {
  constructor(data?: PartialMessage<PutMediaSubscriptionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "peoplesmarkets.media.v1.PutMediaSubscriptionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PutMediaSubscriptionResponse {
    return new PutMediaSubscriptionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PutMediaSubscriptionResponse {
    return new PutMediaSubscriptionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PutMediaSubscriptionResponse {
    return new PutMediaSubscriptionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PutMediaSubscriptionResponse | PlainMessage<PutMediaSubscriptionResponse> | undefined, b: PutMediaSubscriptionResponse | PlainMessage<PutMediaSubscriptionResponse> | undefined): boolean {
    return proto3.util.equals(PutMediaSubscriptionResponse, a, b);
  }
}

/**
 * @generated from message peoplesmarkets.media.v1.GetMediaSubscriptionRequest
 */
export class GetMediaSubscriptionRequest extends Message<GetMediaSubscriptionRequest> {
  /**
   * @generated from field: optional string media_subscription_id = 1;
   */
  mediaSubscriptionId?: string;

  /**
   * @generated from field: optional string offer_id = 2;
   */
  offerId?: string;

  constructor(data?: PartialMessage<GetMediaSubscriptionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "peoplesmarkets.media.v1.GetMediaSubscriptionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "media_subscription_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "offer_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMediaSubscriptionRequest {
    return new GetMediaSubscriptionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMediaSubscriptionRequest {
    return new GetMediaSubscriptionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMediaSubscriptionRequest {
    return new GetMediaSubscriptionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetMediaSubscriptionRequest | PlainMessage<GetMediaSubscriptionRequest> | undefined, b: GetMediaSubscriptionRequest | PlainMessage<GetMediaSubscriptionRequest> | undefined): boolean {
    return proto3.util.equals(GetMediaSubscriptionRequest, a, b);
  }
}

/**
 * @generated from message peoplesmarkets.media.v1.GetMediaSubscriptionResponse
 */
export class GetMediaSubscriptionResponse extends Message<GetMediaSubscriptionResponse> {
  /**
   * @generated from field: peoplesmarkets.media.v1.MediaSubscriptionResponse media_subscription = 1;
   */
  mediaSubscription?: MediaSubscriptionResponse;

  constructor(data?: PartialMessage<GetMediaSubscriptionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "peoplesmarkets.media.v1.GetMediaSubscriptionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "media_subscription", kind: "message", T: MediaSubscriptionResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMediaSubscriptionResponse {
    return new GetMediaSubscriptionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMediaSubscriptionResponse {
    return new GetMediaSubscriptionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMediaSubscriptionResponse {
    return new GetMediaSubscriptionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetMediaSubscriptionResponse | PlainMessage<GetMediaSubscriptionResponse> | undefined, b: GetMediaSubscriptionResponse | PlainMessage<GetMediaSubscriptionResponse> | undefined): boolean {
    return proto3.util.equals(GetMediaSubscriptionResponse, a, b);
  }
}

/**
 * @generated from message peoplesmarkets.media.v1.ListMediaSubscriptionsRequest
 */
export class ListMediaSubscriptionsRequest extends Message<ListMediaSubscriptionsRequest> {
  /**
   * @generated from field: optional string shop_id = 1;
   */
  shopId?: string;

  /**
   * @generated from field: optional peoplesmarkets.pagination.v1.Pagination pagination = 2;
   */
  pagination?: Pagination;

  /**
   * @generated from field: optional bool is_accessible = 3;
   */
  isAccessible?: boolean;

  constructor(data?: PartialMessage<ListMediaSubscriptionsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "peoplesmarkets.media.v1.ListMediaSubscriptionsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "shop_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "pagination", kind: "message", T: Pagination, opt: true },
    { no: 3, name: "is_accessible", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListMediaSubscriptionsRequest {
    return new ListMediaSubscriptionsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListMediaSubscriptionsRequest {
    return new ListMediaSubscriptionsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListMediaSubscriptionsRequest {
    return new ListMediaSubscriptionsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListMediaSubscriptionsRequest | PlainMessage<ListMediaSubscriptionsRequest> | undefined, b: ListMediaSubscriptionsRequest | PlainMessage<ListMediaSubscriptionsRequest> | undefined): boolean {
    return proto3.util.equals(ListMediaSubscriptionsRequest, a, b);
  }
}

/**
 * @generated from message peoplesmarkets.media.v1.ListMediaSubscriptionsResponse
 */
export class ListMediaSubscriptionsResponse extends Message<ListMediaSubscriptionsResponse> {
  /**
   * @generated from field: repeated peoplesmarkets.media.v1.MediaSubscriptionResponse media_subscriptions = 1;
   */
  mediaSubscriptions: MediaSubscriptionResponse[] = [];

  /**
   * @generated from field: peoplesmarkets.pagination.v1.Pagination pagination = 2;
   */
  pagination?: Pagination;

  constructor(data?: PartialMessage<ListMediaSubscriptionsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "peoplesmarkets.media.v1.ListMediaSubscriptionsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "media_subscriptions", kind: "message", T: MediaSubscriptionResponse, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: Pagination },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListMediaSubscriptionsResponse {
    return new ListMediaSubscriptionsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListMediaSubscriptionsResponse {
    return new ListMediaSubscriptionsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListMediaSubscriptionsResponse {
    return new ListMediaSubscriptionsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListMediaSubscriptionsResponse | PlainMessage<ListMediaSubscriptionsResponse> | undefined, b: ListMediaSubscriptionsResponse | PlainMessage<ListMediaSubscriptionsResponse> | undefined): boolean {
    return proto3.util.equals(ListMediaSubscriptionsResponse, a, b);
  }
}

/**
 * @generated from message peoplesmarkets.media.v1.CancelMediaSubscriptionRequest
 */
export class CancelMediaSubscriptionRequest extends Message<CancelMediaSubscriptionRequest> {
  /**
   * @generated from field: string media_subscription_id = 1;
   */
  mediaSubscriptionId = "";

  constructor(data?: PartialMessage<CancelMediaSubscriptionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "peoplesmarkets.media.v1.CancelMediaSubscriptionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "media_subscription_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CancelMediaSubscriptionRequest {
    return new CancelMediaSubscriptionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CancelMediaSubscriptionRequest {
    return new CancelMediaSubscriptionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CancelMediaSubscriptionRequest {
    return new CancelMediaSubscriptionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CancelMediaSubscriptionRequest | PlainMessage<CancelMediaSubscriptionRequest> | undefined, b: CancelMediaSubscriptionRequest | PlainMessage<CancelMediaSubscriptionRequest> | undefined): boolean {
    return proto3.util.equals(CancelMediaSubscriptionRequest, a, b);
  }
}

/**
 * @generated from message peoplesmarkets.media.v1.CancelMediaSubscriptionResponse
 */
export class CancelMediaSubscriptionResponse extends Message<CancelMediaSubscriptionResponse> {
  constructor(data?: PartialMessage<CancelMediaSubscriptionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "peoplesmarkets.media.v1.CancelMediaSubscriptionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CancelMediaSubscriptionResponse {
    return new CancelMediaSubscriptionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CancelMediaSubscriptionResponse {
    return new CancelMediaSubscriptionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CancelMediaSubscriptionResponse {
    return new CancelMediaSubscriptionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CancelMediaSubscriptionResponse | PlainMessage<CancelMediaSubscriptionResponse> | undefined, b: CancelMediaSubscriptionResponse | PlainMessage<CancelMediaSubscriptionResponse> | undefined): boolean {
    return proto3.util.equals(CancelMediaSubscriptionResponse, a, b);
  }
}

/**
 * @generated from message peoplesmarkets.media.v1.ResumeMediaSubscriptionRequest
 */
export class ResumeMediaSubscriptionRequest extends Message<ResumeMediaSubscriptionRequest> {
  /**
   * @generated from field: string media_subscription_id = 1;
   */
  mediaSubscriptionId = "";

  constructor(data?: PartialMessage<ResumeMediaSubscriptionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "peoplesmarkets.media.v1.ResumeMediaSubscriptionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "media_subscription_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResumeMediaSubscriptionRequest {
    return new ResumeMediaSubscriptionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResumeMediaSubscriptionRequest {
    return new ResumeMediaSubscriptionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResumeMediaSubscriptionRequest {
    return new ResumeMediaSubscriptionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ResumeMediaSubscriptionRequest | PlainMessage<ResumeMediaSubscriptionRequest> | undefined, b: ResumeMediaSubscriptionRequest | PlainMessage<ResumeMediaSubscriptionRequest> | undefined): boolean {
    return proto3.util.equals(ResumeMediaSubscriptionRequest, a, b);
  }
}

/**
 * @generated from message peoplesmarkets.media.v1.ResumeMediaSubscriptionResponse
 */
export class ResumeMediaSubscriptionResponse extends Message<ResumeMediaSubscriptionResponse> {
  constructor(data?: PartialMessage<ResumeMediaSubscriptionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "peoplesmarkets.media.v1.ResumeMediaSubscriptionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResumeMediaSubscriptionResponse {
    return new ResumeMediaSubscriptionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResumeMediaSubscriptionResponse {
    return new ResumeMediaSubscriptionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResumeMediaSubscriptionResponse {
    return new ResumeMediaSubscriptionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ResumeMediaSubscriptionResponse | PlainMessage<ResumeMediaSubscriptionResponse> | undefined, b: ResumeMediaSubscriptionResponse | PlainMessage<ResumeMediaSubscriptionResponse> | undefined): boolean {
    return proto3.util.equals(ResumeMediaSubscriptionResponse, a, b);
  }
}
