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
exports.Memory = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const Tag_1 = require("./Tag");
const SharedMemory_1 = require("./SharedMemory");
let Memory = class Memory {
};
exports.Memory = Memory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Memory.prototype, "memoryId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.memories, { onDelete: "CASCADE" }),
    __metadata("design:type", User_1.User)
], Memory.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Memory.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Memory.prototype, "file_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", Date)
], Memory.prototype, "upload_date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Memory.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Tag_1.Tag, (tag) => tag.memory),
    __metadata("design:type", Array)
], Memory.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => SharedMemory_1.SharedMemory, (sharedMemory) => sharedMemory.memory),
    __metadata("design:type", Array)
], Memory.prototype, "sharedMemories", void 0);
exports.Memory = Memory = __decorate([
    (0, typeorm_1.Entity)()
], Memory);
