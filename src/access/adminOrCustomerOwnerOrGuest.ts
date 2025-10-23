import type { Access } from 'payload'

import { checkRole } from '@/access/utilities'

// This access control allows:
// 1. Admins to access everything
// 2. Logged-in customers to access their own records
// 3. Guest users to access unclaimed records (for guest checkout)
export const adminOrCustomerOwnerOrGuest: Access = ({ req: { user } }) => {
  // Admins can access everything
  if (user && checkRole(['admin'], user)) {
    return true
  }

  // Logged-in customers can access their own records
  if (user?.id) {
    return {
      customer: {
        equals: user.id,
      },
    }
  }

  // Guest users can access records with no customer assigned (unclaimed carts/transactions)
  return {
    customer: {
      exists: false,
    },
  }
}