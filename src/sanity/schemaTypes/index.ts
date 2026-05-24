import { type SchemaTypeDefinition } from 'sanity'
import settings from './settings'
import hero from './hero'
import apartment from './apartment'
import gallery from './gallery'
import about from './about'
import page from './page'
import visionMission from './visionMission'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [settings, hero, apartment, gallery, about, page, visionMission],
}
