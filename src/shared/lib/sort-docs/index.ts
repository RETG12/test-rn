import { DocsResponse } from "@/pages/docs-page/types";

export const sortDocsRecords = (records: DocsResponse[]): DocsResponse[] => {
    return records.slice().sort((a, b) => {
        if (a.like !== b.like) {
            return b.like ? 1 : -1;
        }
        const dateA = new Date(a.created).getTime();
        const dateB = new Date(b.created).getTime();
        return dateB - dateA;
    });
}