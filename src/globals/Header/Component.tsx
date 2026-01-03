import { getCachedGlobal } from '@/utilities/getGlobals'
import { HeaderClient } from './Component.client'

import type { ContactInfo, Header } from '@/payload-types'

export async function Header() {
  let headerData: Header | null = null
  let contactData: ContactInfo | null = null

  try {
    headerData = await getCachedGlobal('header', 1)()

    // Fetch contact info if showSocialMedia is enabled
    if (headerData?.showSocialMedia) {
      contactData = await getCachedGlobal('contact-info', 1)()
    }
  } catch (error) {
    console.error('Error fetching header data:', error)
  }

  if (!headerData) {
    return null
  }

  return <HeaderClient data={headerData} contactData={contactData} />
}
