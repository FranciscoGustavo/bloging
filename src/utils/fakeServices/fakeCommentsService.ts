const fakeCommentsService = {
		findAll: async (query: any) => {
				if (query.error) {
						throw false;
				}
				return 'request is successfully';
		},
		findByPost: async (postId: string) => {
				if (postId === 'error') {
						throw false;
				}
				return 'request is successfully';
		},
		insertComment: async ({ error }: any) => {
				if (error) {
						throw false;
				}
				return 'request is successfully';
		},
		deleteComment: async (commentId: string) => {
				if (commentId === 'error') {
						throw false;
				}
				return 'request is successfully';
		},
};

export default fakeCommentsService;