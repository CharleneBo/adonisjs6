import Movie from '#models/movie'
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class HomeController {
  async index({ view, auth }: HttpContext) {
    const comingSoon = await Movie.query()
      .apply((scope) => scope.notReleased())
      .if(auth.user, (query) =>
        query.preload('watchlist', (watchlist) => watchlist.where('userId', auth.user!.id))
      )
      .preload('director')
      .preload('writer')
      .orderBy('releasedAt')
      .limit(3)

    const recentlyReleased = await Movie.query()
      .apply((scope) => scope.released())
      .if(auth.user, (query) =>
        query.preload('watchlist', (watchlist) => watchlist.where('userId', auth.user!.id))
      )
      .preload('director')
      .preload('writer')
      .orderBy('releasedAt', 'desc')
      .limit(9)
    const moviesCountResult = await db.rawQuery('SELECT COUNT(*) as total FROM movies')
    console.log('moviesCountResult--------------------------------------', moviesCountResult)
    const moviesCount = moviesCountResult.rows[0]['total']

    return view.render('pages/home', { comingSoon, recentlyReleased, moviesCount })
  }
}
