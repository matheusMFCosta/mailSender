import { helloWorld } from './query'
import { sendEmail } from './mutation'

export const resolvers = {
  Query: {
    helloWorld: async (_, param, ctx, info) => await helloWorld(param, ctx)
  },
  Mutation: {
    sendEmail: async (_, param, ctx, info) => await sendEmail(param, ctx)
  }
}
