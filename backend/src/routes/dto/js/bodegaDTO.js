var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
export class bodegasDTO {
    constructor(nombre, id_responsable, estado, created_by) {
        this.nombre = nombre;
        this.responsable = id_responsable;
        this.estado = estado;
        this.creador = created_by;
    }
}
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `El nombre es requerido` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], bodegasDTO.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "responsable" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `El id del responsable es requerido` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], bodegasDTO.prototype, "responsable", void 0);
__decorate([
    Expose({ name: "estado" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `El id del estado es requerido` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], bodegasDTO.prototype, "estado", void 0);
__decorate([
    Expose({ name: "creador" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `El id del creador es requerido` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], bodegasDTO.prototype, "creador", void 0);
