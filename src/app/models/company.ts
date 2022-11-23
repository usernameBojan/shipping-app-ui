import { ParcelLimitations } from "./limitations";
import { VolumeRange } from "./volume-range";
import { WeightRange } from "./weight-range";

export class Company {
    name: string = '';
    parcelLimitations: ParcelLimitations = new ParcelLimitations();
    parcelVolumeRange: Array<VolumeRange> = [];
    parcelWeightRange: Array<WeightRange> = [];
}