export type FlatMode = 'autogestionado' | 'vinculado';

export interface Flat {
    id: string;
    name: string;
    address: string;
    code: string;
    rooms: number;
    tenantsCount: number;
    monthlyRent: number;
    mode: FlatMode;
    openIncidences: number;
    overdueTenants: number;
}

export const FLAT_MODES: { value: FlatMode; label: string; badge: string }[] = [
    { value: 'autogestionado', label: 'Autogestionado', badge: 'text-bg-secondary' },
    { value: 'vinculado', label: 'Vinculado', badge: 'text-bg-success' },
];