import React from 'react'
import getWiki from '../lib/getWiki'
import Item, { wikiItem } from './components/Item'

export default async function page({ params }: { params: { term: string } }) {
  const { term } = params
  const response = await getWiki(term)
  const wiki = await response
  const pages: wikiItem[] = wiki.query.pages

  return (
    <div>
      { Object.entries(pages).map(([key, val]) => {
        return (
          <Item item={val}/>
        )
      }) }
    </div>
  )
}
