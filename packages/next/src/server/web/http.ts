/**
 * List of valid HTTP methods that can be implemented by Next.js's Custom App
 * Routes.
 */
export const HTTP_METHODS = [
  'GET',
  'HEAD',
  'OPTIONS',
  'POST',
  'PUT',
  'DELETE',
  'PATCH',
  // WebDAV methods (RFC 4918)
  'MKCOL',
  'COPY',
  'MOVE',
  'LOCK',
  'UNLOCK',
  'PROPFIND',
  'PROPPATCH',
  // CalDAV/CardDAV methods (RFC 4791, RFC 6352)
  'REPORT',
  'MKCALENDAR',
] as const

/**
 * A type representing the valid HTTP methods that can be implemented by
 * Next.js's Custom App Routes.
 */
export type HTTP_METHOD = (typeof HTTP_METHODS)[number]

/**
 * Checks to see if the passed string is an HTTP method. Note that this is case
 * sensitive.
 *
 * @param maybeMethod the string that may be an HTTP method
 * @returns true if the string is an HTTP method
 */
export function isHTTPMethod(maybeMethod: string): maybeMethod is HTTP_METHOD {
  return HTTP_METHODS.includes(maybeMethod as HTTP_METHOD)
}
