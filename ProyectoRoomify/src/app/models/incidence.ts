export type IncidencePriority = 'baja' | 'media' | 'alta' | 'urgente';
export type IncidenceStatus = 'pendiente' | 'en_curso' | 'resuelta';

export interface Incidence {
    id: string;
    title: string;
    description: string;
    priority: IncidencePriority;
    status: IncidenceStatus;
    technician: string | null;
    reportedBy: string;
    date: string;
    photos?: string[];
}

export const INCIDENCE_PRIORITIES: { value: IncidencePriority; label: string; badge: string }[] = [
    { value: 'baja', label: 'Baja', badge: 'text-bg-success' },
    { value: 'media', label: 'Media', badge: 'text-bg-warning' },
    { value: 'alta', label: 'Alta', badge: 'text-bg-primary' },
    { value: 'urgente', label: 'Urgente', badge: 'text-bg-danger' },
];

export const INCIDENCE_STATUSES: { value: IncidenceStatus; label: string; badge: string }[] = [
    { value: 'pendiente', label: 'Pendiente', badge: 'text-bg-warning' },
    { value: 'en_curso', label: 'En curso', badge: 'text-bg-info' },
    { value: 'resuelta', label: 'Resuelta', badge: 'text-bg-success' },
];