"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyResp__OutputDto = exports.FindManyRespDto = void 0;
// Original file: proto/mwp/m1/mwp_m1_hero.proto
/* eslint-disable */
const swagger_1 = require("@nestjs/swagger");
const HeroBo_1 = require("../../mwp/m1/HeroBo");
class FindManyRespDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], FindManyRespDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FindManyRespDto.prototype, "msg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [HeroBo_1.HeroBo__OutputDto] }),
    __metadata("design:type", Array)
], FindManyRespDto.prototype, "list", void 0);
exports.FindManyRespDto = FindManyRespDto;
class FindManyResp__OutputDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], FindManyResp__OutputDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FindManyResp__OutputDto.prototype, "msg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [HeroBo_1.HeroBo__OutputDto] }),
    __metadata("design:type", Array)
], FindManyResp__OutputDto.prototype, "list", void 0);
exports.FindManyResp__OutputDto = FindManyResp__OutputDto;
