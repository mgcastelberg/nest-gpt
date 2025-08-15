
interface Options {
    prompt: string
}

export const orthographyCheckUseCase = async (options: Options) => {

    const { prompt } = options;
    // process.env.OPENAI_API_KEY
    return {
        prompt: prompt,
        apikey: 'api-key',
    }
};