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
exports.AccountServiceClientStub = void 0;
/* eslint-disable */
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
let AccountServiceClientStub = class AccountServiceClientStub {
    onModuleInit() {
        const client = microservices_1.ClientProxyFactory.create({
            transport: microservices_1.Transport.GRPC,
            options: {
                package: "mwp.m2",
                url: this.url,
                protoPath: (0, path_1.join)(__dirname, "../../../proto/mwp/m2/mwp_m2_account.proto"),
            },
        });
        this.stub = client.getService("AccountService");
    }
};
__decorate([
    (0, common_1.Inject)("SERVICE_URI"),
    __metadata("design:type", Object)
], AccountServiceClientStub.prototype, "url", void 0);
AccountServiceClientStub = __decorate([
    (0, common_1.Injectable)()
], AccountServiceClientStub);
exports.AccountServiceClientStub = AccountServiceClientStub;
