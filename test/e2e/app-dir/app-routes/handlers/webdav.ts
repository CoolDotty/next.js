import { type NextRequest } from 'next/server'
import { withRequestMeta } from '../helpers'

const webdavHandler = async (
  request: NextRequest,
  { params }: { params?: Promise<Record<string, string | string[]>> }
): Promise<Response> => {
  const { pathname } = request.nextUrl
  const resolvedParams = params ? await params : null

  let hasBody = false
  if (request.body) {
    const text = await request.text()
    hasBody = text.length > 0
  }

  return new Response('webdav response', {
    headers: withRequestMeta({
      method: request.method,
      params: resolvedParams,
      pathname,
      hasBody,
    }),
  })
}

// WebDAV methods (RFC 4918)
export const MKCOL = webdavHandler
export const COPY = webdavHandler
export const MOVE = webdavHandler
export const LOCK = webdavHandler
export const UNLOCK = webdavHandler
export const PROPFIND = webdavHandler
export const PROPPATCH = webdavHandler

// CalDAV/CardDAV methods (RFC 4791, RFC 6352)
export const REPORT = webdavHandler
export const MKCALENDAR = webdavHandler
