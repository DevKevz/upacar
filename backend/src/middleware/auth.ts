import type { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const requireAdmin = (request: Request, response: Response, next: NextFunction) => {
  const authorization = request.headers.authorization
  const token = authorization?.startsWith('Bearer ') ? authorization.slice(7) : ''
  const secret = process.env.JWT_SECRET ?? 'change-me-for-local-dev'

  if (!token) {
    return response.status(401).json({ error: 'Missing token' })
  }

  try {
    jwt.verify(token, secret)
    return next()
  } catch {
    return response.status(401).json({ error: 'Invalid token' })
  }
}
