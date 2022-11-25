export class ParcelLimitations {
    minVolume: number = 0;
    maxVolume: number = 0;
    minWeight: number = 0;
    maxWeight: number = 0;
    hasMaxVolume: boolean = this.maxVolume > 0;
    hasMaxWeight: boolean = this.maxWeight > 0;
}