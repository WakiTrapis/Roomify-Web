export type NoticeType = 'norma' | 'comunicado';

export interface Notice {
    id: string;
    title: string;
    content: string;
    type: NoticeType;
    date: string;
}

export const NOTICE_TYPES: { value: NoticeType; label: string; badge: string }[] = [
    { value: 'norma', label: 'Norma', badge: 'text-bg-danger' },
    { value: 'comunicado', label: 'Comunicado', badge: 'text-bg-violet-light' },
];
