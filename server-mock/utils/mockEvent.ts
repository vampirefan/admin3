import type { EventHandler, EventHandlerRequest } from 'h3'

export function defineMockEventHandler<T extends EventHandlerRequest, D>(handler: EventHandler<T, D>): EventHandler<T, D> {
  return defineEventHandler<T>(async (event) => {
    try {
      const response = await handler(event)
      return {
        success: true,
        code: 200,
        msg: '请求成功',
        data: response,
      }
    }
    catch (err) {
      return err
    }
  })
}
