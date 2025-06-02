export type PaginatedResponse<T> = {
	totalPages: number;
	payloadSize: number;
	hasNext: boolean;
	content: Array<T>;
	currentPage: number;
	skippedRecords: number;
	totalRecords: number;
};

export type BaseResponse<T> = {
	status: {
		code: number;
		message: string | null;
		errorCode: string | null;
		timestamp: number;
	};
	data: T;
};
