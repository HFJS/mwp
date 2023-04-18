"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.M1Service = void 0;
/* eslint-disable */
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const grpc = __importStar(require("@grpc/grpc-js"));
const path_1 = require("path");
let M1Service = class M1Service {
  onModuleInit() {
    // return true;
    let extra = {};
    if (this.url && /:443$/.test(this.url)) {
      extra.credentials = grpc.credentials.createSsl();
    }
    console.log(this.url);
    const BookServiceClient = microservices_1.ClientProxyFactory.create({
      transport: microservices_1.Transport.GRPC,
      options: Object.assign(
        {
          package: "mwp.m1",
          url: this.url,
          protoPath: (0, path_1.join)(
            __dirname,
            "../proto/mwp/m1/mwp_m1_book.proto"
          ),
        },
        extra
      ),
    });
    const HeroesServiceClient = microservices_1.ClientProxyFactory.create({
      transport: microservices_1.Transport.GRPC,
      options: Object.assign(
        {
          package: "mwp.m1",
          url: this.url,
          protoPath: (0, path_1.join)(
            __dirname,
            "../proto/mwp/m1/mwp_m1_hero.proto"
          ),
        },
        extra
      ),
    });
    this.BookServiceStub = BookServiceClient.getService("BookService");
    this.HeroesServiceStub = HeroesServiceClient.getService("HeroesService");
  }
};
__decorate(
  [(0, common_1.Inject)("SERVICE_URI"), __metadata("design:type", Object)],
  M1Service.prototype,
  "url",
  void 0
);
M1Service = __decorate([(0, common_1.Injectable)()], M1Service);
exports.M1Service = M1Service;
