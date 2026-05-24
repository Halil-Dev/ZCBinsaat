import { type SchemaTypeDefinition } from 'sanity'
import settings from './settings'
import hero from './hero'
import apartment from './apartment'
import gallery from './gallery'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [settings, hero, apartment, gallery],
}
