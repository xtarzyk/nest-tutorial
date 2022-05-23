import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { ProductsContoller } from "./products.controller";
import { ProductsService } from "./products.service";

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [ProductsContoller],
    providers: [ProductsService]
})
export class ProductsModule {}