// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file sited_io/websites/v1/website.proto (package sited_io.websites.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { CustomizationResponse } from "./customization_pb.js";
import { DomainResponse } from "./domain_pb.js";
import { PageResponse } from "./page_pb.js";
import { PaginationRequest, PaginationResponse } from "../../pagination/v1/pagination_pb.js";

/**
 * @generated from message sited_io.websites.v1.WebsiteResponse
 */
export class WebsiteResponse extends Message<WebsiteResponse> {
  /**
   * @generated from field: string website_id = 1;
   */
  websiteId = "";

  /**
   * @generated from field: string user_id = 2;
   */
  userId = "";

  /**
   * @generated from field: uint64 created_at = 3;
   */
  createdAt = protoInt64.zero;

  /**
   * @generated from field: uint64 updated_at = 4;
   */
  updatedAt = protoInt64.zero;

  /**
   * @generated from field: string name = 5;
   */
  name = "";

  /**
   * @generated from field: string client_id = 6;
   */
  clientId = "";

  /**
   * @generated from field: sited_io.websites.v1.CustomizationResponse customization = 7;
   */
  customization?: CustomizationResponse;

  /**
   * @generated from field: repeated sited_io.websites.v1.DomainResponse domains = 8;
   */
  domains: DomainResponse[] = [];

  /**
   * @generated from field: repeated sited_io.websites.v1.PageResponse pages = 9;
   */
  pages: PageResponse[] = [];

  constructor(data?: PartialMessage<WebsiteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.WebsiteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "website_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "created_at", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "updated_at", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "customization", kind: "message", T: CustomizationResponse },
    { no: 8, name: "domains", kind: "message", T: DomainResponse, repeated: true },
    { no: 9, name: "pages", kind: "message", T: PageResponse, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WebsiteResponse {
    return new WebsiteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WebsiteResponse {
    return new WebsiteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WebsiteResponse {
    return new WebsiteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: WebsiteResponse | PlainMessage<WebsiteResponse> | undefined, b: WebsiteResponse | PlainMessage<WebsiteResponse> | undefined): boolean {
    return proto3.util.equals(WebsiteResponse, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.CreateWebsiteRequest
 */
export class CreateWebsiteRequest extends Message<CreateWebsiteRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<CreateWebsiteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.CreateWebsiteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateWebsiteRequest {
    return new CreateWebsiteRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateWebsiteRequest {
    return new CreateWebsiteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateWebsiteRequest {
    return new CreateWebsiteRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateWebsiteRequest | PlainMessage<CreateWebsiteRequest> | undefined, b: CreateWebsiteRequest | PlainMessage<CreateWebsiteRequest> | undefined): boolean {
    return proto3.util.equals(CreateWebsiteRequest, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.CreateWebsiteResponse
 */
export class CreateWebsiteResponse extends Message<CreateWebsiteResponse> {
  /**
   * @generated from field: sited_io.websites.v1.WebsiteResponse website = 1;
   */
  website?: WebsiteResponse;

  constructor(data?: PartialMessage<CreateWebsiteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.CreateWebsiteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "website", kind: "message", T: WebsiteResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateWebsiteResponse {
    return new CreateWebsiteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateWebsiteResponse {
    return new CreateWebsiteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateWebsiteResponse {
    return new CreateWebsiteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateWebsiteResponse | PlainMessage<CreateWebsiteResponse> | undefined, b: CreateWebsiteResponse | PlainMessage<CreateWebsiteResponse> | undefined): boolean {
    return proto3.util.equals(CreateWebsiteResponse, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.GetWebsiteRequest
 */
export class GetWebsiteRequest extends Message<GetWebsiteRequest> {
  /**
   * @generated from field: optional string website_id = 1;
   */
  websiteId?: string;

  /**
   * @generated from field: optional string domain = 2;
   */
  domain?: string;

  /**
   * @generated from field: optional string client_id = 3;
   */
  clientId?: string;

  constructor(data?: PartialMessage<GetWebsiteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.GetWebsiteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "website_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "domain", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetWebsiteRequest {
    return new GetWebsiteRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetWebsiteRequest {
    return new GetWebsiteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetWebsiteRequest {
    return new GetWebsiteRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetWebsiteRequest | PlainMessage<GetWebsiteRequest> | undefined, b: GetWebsiteRequest | PlainMessage<GetWebsiteRequest> | undefined): boolean {
    return proto3.util.equals(GetWebsiteRequest, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.GetWebsiteResponse
 */
export class GetWebsiteResponse extends Message<GetWebsiteResponse> {
  /**
   * @generated from field: sited_io.websites.v1.WebsiteResponse website = 1;
   */
  website?: WebsiteResponse;

  constructor(data?: PartialMessage<GetWebsiteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.GetWebsiteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "website", kind: "message", T: WebsiteResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetWebsiteResponse {
    return new GetWebsiteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetWebsiteResponse {
    return new GetWebsiteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetWebsiteResponse {
    return new GetWebsiteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetWebsiteResponse | PlainMessage<GetWebsiteResponse> | undefined, b: GetWebsiteResponse | PlainMessage<GetWebsiteResponse> | undefined): boolean {
    return proto3.util.equals(GetWebsiteResponse, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.ListWebsitesRequest
 */
export class ListWebsitesRequest extends Message<ListWebsitesRequest> {
  /**
   * @generated from field: optional string user_id = 1;
   */
  userId?: string;

  /**
   * @generated from field: optional sited_io.pagination.v1.PaginationRequest pagination = 2;
   */
  pagination?: PaginationRequest;

  constructor(data?: PartialMessage<ListWebsitesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.ListWebsitesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "pagination", kind: "message", T: PaginationRequest, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListWebsitesRequest {
    return new ListWebsitesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListWebsitesRequest {
    return new ListWebsitesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListWebsitesRequest {
    return new ListWebsitesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListWebsitesRequest | PlainMessage<ListWebsitesRequest> | undefined, b: ListWebsitesRequest | PlainMessage<ListWebsitesRequest> | undefined): boolean {
    return proto3.util.equals(ListWebsitesRequest, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.ListWebsitesResponse
 */
export class ListWebsitesResponse extends Message<ListWebsitesResponse> {
  /**
   * @generated from field: repeated sited_io.websites.v1.WebsiteResponse websites = 1;
   */
  websites: WebsiteResponse[] = [];

  /**
   * @generated from field: sited_io.pagination.v1.PaginationResponse pagination = 2;
   */
  pagination?: PaginationResponse;

  constructor(data?: PartialMessage<ListWebsitesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.ListWebsitesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "websites", kind: "message", T: WebsiteResponse, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PaginationResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListWebsitesResponse {
    return new ListWebsitesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListWebsitesResponse {
    return new ListWebsitesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListWebsitesResponse {
    return new ListWebsitesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListWebsitesResponse | PlainMessage<ListWebsitesResponse> | undefined, b: ListWebsitesResponse | PlainMessage<ListWebsitesResponse> | undefined): boolean {
    return proto3.util.equals(ListWebsitesResponse, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.UpdateWebsiteRequest
 */
export class UpdateWebsiteRequest extends Message<UpdateWebsiteRequest> {
  /**
   * @generated from field: string website_id = 1;
   */
  websiteId = "";

  /**
   * @generated from field: optional string name = 2;
   */
  name?: string;

  constructor(data?: PartialMessage<UpdateWebsiteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.UpdateWebsiteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "website_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateWebsiteRequest {
    return new UpdateWebsiteRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateWebsiteRequest {
    return new UpdateWebsiteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateWebsiteRequest {
    return new UpdateWebsiteRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateWebsiteRequest | PlainMessage<UpdateWebsiteRequest> | undefined, b: UpdateWebsiteRequest | PlainMessage<UpdateWebsiteRequest> | undefined): boolean {
    return proto3.util.equals(UpdateWebsiteRequest, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.UpdateWebsiteResponse
 */
export class UpdateWebsiteResponse extends Message<UpdateWebsiteResponse> {
  /**
   * @generated from field: sited_io.websites.v1.WebsiteResponse website = 1;
   */
  website?: WebsiteResponse;

  constructor(data?: PartialMessage<UpdateWebsiteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.UpdateWebsiteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "website", kind: "message", T: WebsiteResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateWebsiteResponse {
    return new UpdateWebsiteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateWebsiteResponse {
    return new UpdateWebsiteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateWebsiteResponse {
    return new UpdateWebsiteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateWebsiteResponse | PlainMessage<UpdateWebsiteResponse> | undefined, b: UpdateWebsiteResponse | PlainMessage<UpdateWebsiteResponse> | undefined): boolean {
    return proto3.util.equals(UpdateWebsiteResponse, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.DeleteWebsiteRequest
 */
export class DeleteWebsiteRequest extends Message<DeleteWebsiteRequest> {
  /**
   * @generated from field: string website_id = 1;
   */
  websiteId = "";

  constructor(data?: PartialMessage<DeleteWebsiteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.DeleteWebsiteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "website_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteWebsiteRequest {
    return new DeleteWebsiteRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteWebsiteRequest {
    return new DeleteWebsiteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteWebsiteRequest {
    return new DeleteWebsiteRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteWebsiteRequest | PlainMessage<DeleteWebsiteRequest> | undefined, b: DeleteWebsiteRequest | PlainMessage<DeleteWebsiteRequest> | undefined): boolean {
    return proto3.util.equals(DeleteWebsiteRequest, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.DeleteWebsiteResponse
 */
export class DeleteWebsiteResponse extends Message<DeleteWebsiteResponse> {
  constructor(data?: PartialMessage<DeleteWebsiteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.DeleteWebsiteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteWebsiteResponse {
    return new DeleteWebsiteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteWebsiteResponse {
    return new DeleteWebsiteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteWebsiteResponse {
    return new DeleteWebsiteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteWebsiteResponse | PlainMessage<DeleteWebsiteResponse> | undefined, b: DeleteWebsiteResponse | PlainMessage<DeleteWebsiteResponse> | undefined): boolean {
    return proto3.util.equals(DeleteWebsiteResponse, a, b);
  }
}

