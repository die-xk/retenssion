import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// Create a separate async server action
export async function getMarkdownContent(filename: string) {
  'use server'
  
  try {
    const fullPath = path.join(process.cwd(), 'src/content', `${filename}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    const { content } = matter(fileContents)
    
    const processedContent = await remark()
      .use(html)
      .process(content)
      
    return processedContent.toString()
  } catch (error) {
    console.error('Error reading markdown:', error)
    return ''
  }
} 