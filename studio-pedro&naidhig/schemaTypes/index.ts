import { defineType, defineField } from 'sanity'

const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumo',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagem principal',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Direito Trabalhista', value: 'trabalhista' },
          { title: 'Direito Previdenciário', value: 'previdenciario' },
          { title: 'Direito Civil', value: 'civil' },
          { title: 'Direito de Família', value: 'familia' },
          { title: 'Geral', value: 'geral' },
        ]
      }
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de publicação',
      type: 'datetime'
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true }
        }
      ]
    }),
  ]
})

export const schemaTypes = [post]