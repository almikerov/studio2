'use server';

/**
 * @fileOverview Generates video metadata (title, description, tags) based on video content.
 *
 * - generateVideoMetadata - A function that generates video metadata.
 * - GenerateVideoMetadataInput - The input type for the generateVideoMetadata function.
 * - GenerateVideoMetadataOutput - The return type for the generateVideoMetadata function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateVideoMetadataInputSchema = z.object({
  videoDescription: z
    .string()
    .describe('Detailed description of the video content.'),
  videoStyle: z
    .string()
    .describe('The style of the video, e.g., documentary, cinematic, vlog.'),
  videoTheme: z
    .string()
    .describe('The theme of the video, e.g., travel, cooking, technology.'),
});
export type GenerateVideoMetadataInput = z.infer<
  typeof GenerateVideoMetadataInputSchema
>;

const GenerateVideoMetadataOutputSchema = z.object({
  title: z.string().describe('Suggested title for the video.'),
  description: z.string().describe('Suggested short description for the video.'),
  tags: z.array(z.string()).describe('Suggested tags for the video.'),
});
export type GenerateVideoMetadataOutput = z.infer<
  typeof GenerateVideoMetadataOutputSchema
>;

export async function generateVideoMetadata(
  input: GenerateVideoMetadataInput
): Promise<GenerateVideoMetadataOutput> {
  return generateVideoMetadataFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateVideoMetadataPrompt',
  input: {schema: GenerateVideoMetadataInputSchema},
  output: {schema: GenerateVideoMetadataOutputSchema},
  prompt: `You are an expert in creating engaging video metadata.

  Based on the video's description, style, and theme, generate a title, short description, and a list of relevant tags.

  Description: {{{videoDescription}}}
  Style: {{{videoStyle}}}
  Theme: {{{videoTheme}}}

  Ensure the title is captivating, the description is concise and informative, and the tags are relevant and popular.
  `,
});

const generateVideoMetadataFlow = ai.defineFlow(
  {
    name: 'generateVideoMetadataFlow',
    inputSchema: GenerateVideoMetadataInputSchema,
    outputSchema: GenerateVideoMetadataOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
