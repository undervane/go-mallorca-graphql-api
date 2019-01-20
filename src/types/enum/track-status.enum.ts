import { registerEnumType } from "type-graphql";

export enum TrackStatusEnum {
    "DESCONOCIDO",
    "FLUIDO",
    "DENSO",
    "CONGESTIONADO",
    "CORTADO"
}

registerEnumType(TrackStatusEnum, {
    name: "TrackStatus",
    description: "All possible track status options",
});