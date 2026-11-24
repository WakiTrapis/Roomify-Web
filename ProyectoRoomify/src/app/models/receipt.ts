export type ReceiptStatus = 'emitido' | 'pagado' | 'anulado';

export interface Receipt {
    id: string;
    tenantName: string;
    period: string;
    amount: number;
    status: ReceiptStatus;
    issuedDate: string;
    hash: string | null;
    photoUrl?: string | null;
}

export const RECEIPT_STATUSES: { value: ReceiptStatus; label: string; badge: string }[] = [
    { value: 'emitido', label: 'Emitido', badge: 'text-bg-warning' },
    { value: 'pagado', label: 'Pagado', badge: 'text-bg-success' },
    { value: 'anulado', label: 'Anulado', badge: 'text-bg-danger' },
];