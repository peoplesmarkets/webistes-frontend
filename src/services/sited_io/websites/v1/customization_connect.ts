// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file sited_io/websites/v1/customization.proto (package sited_io.websites.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { PutCustomizationRequest, PutCustomizationResponse } from "./customization_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service sited_io.websites.v1.CustomizationService
 */
export const CustomizationService = {
  typeName: "sited_io.websites.v1.CustomizationService",
  methods: {
    /**
     * @generated from rpc sited_io.websites.v1.CustomizationService.PutCustomization
     */
    putCustomization: {
      name: "PutCustomization",
      I: PutCustomizationRequest,
      O: PutCustomizationResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

