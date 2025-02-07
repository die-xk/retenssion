import { getMarkdownContent } from '@/lib/markdown'

export default async function TermsPage() {
  // Call the server action directly in a Server Component
  const content = await getMarkdownContent('terms')
  
  return (
    <div className="relative overflow-hidden bg-white pt-32 pb-16">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        
        <div className="mt-12 text-sm text-gray-500 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  )
} 