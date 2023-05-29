import React from 'react'

export type wikiItem = {
  pageid: string,
    title: string,
    extract: string,
    thumbnail?: {
        source: string,
        width: number,
        height: number,
    }
}

type itemProps = {
  item: wikiItem
}

export default function Item(itemProps: itemProps) {
  const { item } = itemProps
  return (
    <div>{item.title}</div>
  )
}
