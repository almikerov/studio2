'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState, useTransition } from 'react';
import { Copy, Loader2, Sparkles, Wand2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  generateVideoMetadata,
  type GenerateVideoMetadataOutput,
} from '@/ai/flows/generate-video-metadata';

const formSchema = z.object({
  videoDescription: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }),
  videoStyle: z.string().min(2, {
    message: 'Style must be at least 2 characters.',
  }),
  videoTheme: z.string().min(2, {
    message: 'Theme must be at least 2 characters.',
  }),
});

export default function MetadataGenerator() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<GenerateVideoMetadataOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      videoDescription: '',
      videoStyle: '',
      videoTheme: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setResult(null);
    startTransition(async () => {
      try {
        const response = await generateVideoMetadata(values);
        setResult(response);
      } catch (error) {
        console.error('Error generating metadata:', error);
        toast({
          variant: 'destructive',
          title: 'Generation Failed',
          description: 'There was a problem generating metadata. Please try again.',
        });
      }
    });
  }
  
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied to clipboard!',
    });
  };


  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-2xl">
            <Wand2 className="h-6 w-6 text-accent" />
            Video Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="videoDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video Content</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., A cinematic travel video showcasing the landscapes of Iceland, including waterfalls, glaciers, and volcanic fields."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Describe the content and key scenes of your video in detail.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="videoStyle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Video Style</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Cinematic, Documentary, Vlog" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="videoTheme"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Video Theme</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Travel, Technology, Cooking" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Metadata
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isPending && (
         <Card>
            <CardContent className="p-6 space-y-4">
                <div className="animate-pulse space-y-4">
                    <div className="h-6 w-1/3 rounded bg-muted"></div>
                    <div className="h-4 w-full rounded bg-muted"></div>
                    <div className="h-4 w-3/4 rounded bg-muted"></div>
                    <div className="h-10 w-full rounded bg-muted"></div>
                </div>
            </CardContent>
         </Card>
      )}

      {result && (
        <Card className="shadow-lg animate-in fade-in-50 duration-500">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Generated Metadata</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-sm font-medium text-muted-foreground">Title</Label>
              <div className="group relative mt-1">
                <p className="rounded-md border bg-secondary/30 p-3 pr-10 font-semibold text-lg">{result.title}</p>
                <Button variant="ghost" size="icon" className="absolute top-1/2 right-1 h-8 w-8 -translate-y-1/2" onClick={() => handleCopy(result.title)}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
              <Label className="text-sm font-medium text-muted-foreground">Description</Label>
               <div className="group relative mt-1">
                <p className="rounded-md border bg-secondary/30 p-3 pr-10 text-sm">{result.description}</p>
                <Button variant="ghost" size="icon" className="absolute top-1/2 right-1 h-8 w-8 -translate-y-1/2" onClick={() => handleCopy(result.description)}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
              <Label className="text-sm font-medium text-muted-foreground">Tags</Label>
              <div className="group relative mt-1">
                <div className="flex flex-wrap gap-2 rounded-md border bg-secondary/30 p-3 pr-10">
                  {result.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">{tag}</Badge>
                  ))}
                </div>
                 <Button variant="ghost" size="icon" className="absolute top-1/2 right-1 h-8 w-8 -translate-y-1/2" onClick={() => handleCopy(result.tags.join(', '))}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
