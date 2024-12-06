/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import { Exception } from '@adonisjs/core/exceptions'
import app from '@adonisjs/core/services/app'
import router from '@adonisjs/core/services/router'
import fs from 'node:fs/promises'
import { MarkdownFile } from '@dimerapp/markdown'
import { toHtml } from '@dimerapp/markdown/utils'
import { MovieService } from '#services/movie_service'

router
 .get('/', async (ctx) => {
    const slugs = await MovieService.getSlugs()
    const movies: Record<string, any>[] = []

    for (const slug of slugs){
      
      const md = await MovieService.read(slug)

      movies.push({
        title: md.frontmatter.title,
        summary: md.frontmatter.summary,
        slug,
      })
    }

    return ctx.view.render ('pages/home',{ movies })

 })
 .as('home')

router
  .get('/movies/:slug', async (ctx) => {

    const md = await MovieService.read(ctx.params.slug)
    const movie = toHtml(md).contents
    ctx.view.share({ movie,md})

    return ctx.view.render('pages/movies/show')
  })
  .as('movies.show')
  .where('slug', router.matchers.slug())
