import { getServer } from './server'

async function start() {
  const server = await getServer()
  server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server listening at ${url}`)
  })
}

start()
