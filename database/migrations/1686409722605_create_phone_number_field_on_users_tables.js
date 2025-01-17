"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = "users";
    }
    async up() {
        this.schema.alterTable(this.tableName, (table) => {
            table.integer("phone_number").notNullable();
        });
    }
    async down() { }
}
exports.default = default_1;
//# sourceMappingURL=1686409722605_create_phone_number_field_on_users_tables.js.map