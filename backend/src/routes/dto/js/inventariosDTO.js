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
export class inventariosDTO {
    constructor(id_bodega, id_producto, cantidad, created_by) {
        this.bodega = id_bodega;
        this.producto = id_producto;
        this.cantidad = cantidad;
        this.creador = created_by;
    }
}
__decorate([
    Expose({ name: "bodega" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `El nombre es requerido` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventariosDTO.prototype, "bodega", void 0);
__decorate([
    Expose({ name: "producto" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `El id del producto es requerido` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventariosDTO.prototype, "producto", void 0);
__decorate([
    Expose({ name: "cantidad" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `La cantidad es requerida` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventariosDTO.prototype, "cantidad", void 0);
__decorate([
    Expose({ name: "creador" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `El id del creador es requerido` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventariosDTO.prototype, "creador", void 0);