import hypercore from 'hypercore'
import toPromises from 'hypercore-promisifier'

export default function hypercoreNine (storage, key, opts) {
  const core = hypercore(storage, key, opts)
  return toPromises(core)
}
