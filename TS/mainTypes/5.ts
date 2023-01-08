enum QuestionStatus {
    PUBLISHED = 'published',
    DRAFT = 'draft',
    DELETED = 'deleted'
}

async function getFaqs(request: {
    topicId: number,
    status: QuestionStatus
}): Promise<{
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: QuestionStatus;
}[]> {
    const response = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(request)
    });
    return await response.json();
}