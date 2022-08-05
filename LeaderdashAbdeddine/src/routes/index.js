module.exports = (fastify, options, done) => {
  fastify.get('/', (req, rep) => {
    return {
      status: 200,
      message: 'Topics -Abdeddine Github API Leaderboard ',
      routes: {
        users: '/users',
        repositories: '/repos',
        topics: '/topics',
      },
    }
  })

  done()
}
