import type { Main } from "tsparticles-core";
import { Interactor } from "./Interactor";

export function loadInteraction(tsParticles: Main): void {
    tsParticles.addInteractor((container) => new Interactor(container));
}
